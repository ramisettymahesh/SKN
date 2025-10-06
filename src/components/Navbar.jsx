import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { FaSun, FaUserMd } from 'react-icons/fa';

function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/learning', label: 'Image Analysis', protected: true },
    { path: '/analysis', label: 'Risk Assessment', protected: true },
    { path: '/food-recommendations', label: 'Health Guide', protected: true },
    { path: '/stories', label: 'Mapping', protected: true }
  ];

  const handleNavClick = (path, isProtected) => {
    if (isProtected && !user) {
      navigate('/signin');
      return;
    }
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-skin-yellow via-skin-light-yellow to-skin-light-green shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-12 h-12"
            >
              <motion.div
                className="relative w-full h-full"
                animate={{
                  scale: [1, 1.1, 1],
                  filter: [
                    'drop-shadow(0 0 8px rgba(147, 197, 114, 0.8))',
                    'drop-shadow(0 0 12px rgba(147, 197, 114, 0.9))',
                    'drop-shadow(0 0 8px rgba(147, 197, 114, 0.8))'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <motion.path
                    d="M50,10 
                       C70,10 85,25 85,45 
                       C85,65 70,80 50,80 
                       C30,80 15,65 15,45 
                       C15,25 30,10 50,10 Z"
                    fill="#FFD700"
                    stroke="#808000"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.8))"
                    }}
                  />
                  <motion.circle
                    cx="50"
                    cy="45"
                    r="20"
                    fill="#808000"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(128, 128, 0, 0.8))"
                    }}
                  />
                </svg>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              <motion.span
                className="text-2xl font-bold"
                animate={{
                  textShadow: [
                    "0 0 8px rgba(147, 197, 114, 0.8)",
                    "0 0 16px rgba(147, 197, 114, 0.9)",
                    "0 0 8px rgba(147, 197, 114, 0.8)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: "linear-gradient(to right, #556B2F, #93C572)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 8px rgba(147, 197, 114, 0.8))"
                }}
              >
                SKIN-SCAN
              </motion.span>
              <motion.span
                className="text-xs font-medium"
                animate={{
                  textShadow: [
                    "0 0 4px rgba(85, 107, 47, 0.8)",
                    "0 0 8px rgba(85, 107, 47, 0.9)",
                    "0 0 4px rgba(85, 107, 47, 0.8)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  color: "#556B2F",
                  filter: "drop-shadow(0 0 4px rgba(85, 107, 47, 0.8))"
                }}
              >
                DETECT-PROTECT-HEAL
              </motion.span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.button
                key={item.path}
                onClick={() => handleNavClick(item.path, item.protected)}
                className="text-skin-dark-green hover:text-skin-green px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-skin-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  initial={false}
                  style={{
                    boxShadow: "0 0 8px rgba(147, 197, 114, 0.8)"
                  }}
                />
              </motion.button>
            ))}
            {user ? (
              <motion.button
                onClick={signOut}
                className="bg-gradient-to-r from-skin-yellow to-skin-green text-white px-4 py-2 rounded-md hover:from-skin-dark-yellow hover:to-skin-dark-green transition-all shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(147, 197, 114, 0.8)" }}
                whileTap={{ scale: 0.95 }}
              >
                Log OUT
              </motion.button>
            ) : (
              <motion.button
                onClick={() => navigate('/signin')}
                className="bg-gradient-to-r from-skin-yellow to-skin-green text-white px-4 py-2 rounded-md hover:from-skin-dark-yellow hover:to-skin-dark-green transition-all shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(147, 197, 114, 0.8)" }}
                whileTap={{ scale: 0.95 }}
              >
                Log IN
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;