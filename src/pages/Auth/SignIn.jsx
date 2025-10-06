import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import SuccessMessage from '../../components/auth/SuccessMessage';
import logo from '../../assets/logoss.png';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === formData.email);

    if (!user) {
      setError('Account not found. Please sign up first.');
      return;
    }

    if (user.password !== formData.password) {
      setError('Invalid password.');
      return;
    }

    signIn(formData);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-skin-yellow via-skin-light-yellow to-skin-light-green">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Left Side - Form */}
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
              <h1 className="text-3xl font-bold text-skin-dark-green">Welcome Back</h1>
              <p className="text-gray-600 mt-2">Sign in to continue your journey</p>
            </div>
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border-l-4 border-red-500 p-4 mb-6"
              >
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-skin-dark-green mb-1">Email ID</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-skin-light-yellow border border-skin-yellow rounded-lg focus:ring-2 focus:ring-skin-dark-green focus:border-transparent"
                  placeholder="Enter email ID"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-skin-dark-green mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-2 bg-skin-light-yellow border border-skin-yellow rounded-lg focus:ring-2 focus:ring-skin-dark-green focus:border-transparent"
                    placeholder="Enter password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-skin-dark-green"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-skin-yellow to-skin-green text-skin-dark-green py-2 rounded-lg hover:from-skin-dark-yellow hover:to-skin-dark-green transition-colors font-semibold"
              >
                Sign In
              </button>

              <p className="text-center text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-skin-dark-green hover:text-skin-green font-semibold">
                  Sign Up
                </Link>
              </p>
            </form>
          </motion.div>
        </div>

        {/* Right Side - Info */}
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
            to="/signup"
            className="px-8 py-2 border-2 border-white rounded-lg text-white hover:bg-white hover:text-skin-dark-green transition-colors font-semibold"
          >
            Create Account
          </Link>
        </div>

        <AnimatePresence>
          {showSuccess && (
            <SuccessMessage message="Welcome back!" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SignIn;