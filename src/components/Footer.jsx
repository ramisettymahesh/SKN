import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-skin-yellow via-skin-light-yellow to-skin-light-green text-skin-dark-green py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
              {/* Animated Skin Cell SVG */}
              <motion.div
                className="relative w-12 h-12"
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
                  repeatType: "reverse"
                }}
              >
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full"
                >
                  <motion.path
                    d="M50,10 C70,10 85,25 85,45 C85,65 70,80 50,80 C30,80 15,65 15,45 C15,25 30,10 50,10"
                    fill="#FFD700"
                    stroke="#808000"
                    strokeWidth="2"
                    animate={{
                      scale: [1, 1.1, 1],
                      fill: ["#FFD700", "#808000", "#FFD700"]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.8))"
                    }}
                  />
                  <motion.circle
                    cx="50"
                    cy="45"
                    r="15"
                    fill="#808000"
                    animate={{ 
                      r: [15, 18, 15],
                      fill: ["#808000", "#556B2F", "#808000"]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(128, 128, 0, 0.8))"
                    }}
                  />
                </svg>
              </motion.div>

              <div className="flex flex-col">
                <motion.h3
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
                </motion.h3>
                <motion.span
                  className="text-xs"
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
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-skin-dark-green">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/learning", label: "Image Analysis" },
                { to: "/analysis", label: "Risk Assessment" },
                { to: "/food-recommendations", label: "Health Guide" },
                { to: "/stories", label: "Mapping" }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    textShadow: "0 0 8px rgba(147, 197, 114, 0.8)"
                  }}
                >
                  <Link 
                    to={link.to} 
                    className="text-skin-dark-green hover:text-skin-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-skin-dark-green">Contact</h4>
            <motion.div
              className="flex items-center justify-center md:justify-start gap-2"
              whileHover={{
                textShadow: "0 0 8px rgba(147, 197, 114, 0.8)"
              }}
            >
              <FaEnvelope className="text-skin-dark-green" />
              <a 
                href="mailto:skinscan@gmail.com" 
                className="text-skin-dark-green hover:text-skin-green transition-colors"
              >
                skinscan@gmail.com
              </a>
            </motion.div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-skin-green text-center relative">
          <motion.div
            className="absolute left-0 right-0 top-0 h-0.5 bg-skin-green"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              boxShadow: "0 0 8px rgba(147, 197, 114, 0.8)"
            }}
          />
          <motion.p
            className="text-skin-dark-green"
            animate={{
              textShadow: [
                "0 0 4px rgba(85, 107, 47, 0.6)",
                "0 0 8px rgba(85, 107, 47, 0.7)",
                "0 0 4px rgba(85, 107, 47, 0.6)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            &copy; {new Date().getFullYear()} SKIN-SCAN. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;