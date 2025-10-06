import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import SignUpForm from '../../components/auth/SignUpForm';
import SuccessMessage from '../../components/auth/SuccessMessage';
import logo from '../../assets/logoss.png';

function SignUp() {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/signin');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-skin-yellow via-skin-light-yellow to-skin-light-green py-12">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Left Side - Info */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-skin-yellow to-skin-green p-12">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 mb-8"
          >
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </motion.div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center text-white mb-4">SKIN-SCAN</h2>
            <p className="text-center text-white/90 mb-8">DETECT-PROTECT-HEAL</p>
          </div>
          <Link
            to="/signin"
            className="px-8 py-2 border-2 border-white rounded-lg text-white hover:bg-white hover:text-skin-dark-green transition-colors font-semibold"
          >
            Sign In
          </Link>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-12 bg-white relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col items-center justify-center mb-8">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 mb-4"
              >
                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
              </motion.div>
              <h1 className="text-3xl font-bold text-skin-dark-green">Create Account</h1>
              <p className="text-gray-600 mt-2">Join us to access personalized skin health tools</p>
            </div>
            
            <SignUpForm onSubmit={handleSubmit} />
          </motion.div>
        </div>

        <AnimatePresence>
          {showSuccess && (
            <SuccessMessage message="Account created successfully!" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SignUp;