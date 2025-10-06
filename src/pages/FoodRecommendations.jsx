import { motion } from 'framer-motion';
import { FaHeartbeat, FaAppleAlt, FaBan, FaRunning, FaClock, FaShieldAlt, FaSun, FaLeaf, FaWater } from 'react-icons/fa';

function FoodRecommendations() {
  const skinCareGuidelines = [
    {
      title: "Skin-Healthy Foods",
      icon: FaHeartbeat,
      items: [
        "Omega-3 rich foods (salmon, flaxseeds)",
        "Antioxidant-rich fruits (berries, citrus)",
        "Green leafy vegetables",
        "Nuts and seeds",
        "Hydrating foods (cucumber, watermelon)"
      ],
      benefits: "Support skin health, reduce inflammation, and promote healing"
    },
    {
      title: "Foods to Avoid",
      icon: FaBan,
      items: [
        "Processed sugary foods",
        "Excessive dairy products",
        "High-glycemic foods",
        "Fried and greasy foods",
        "Excessive alcohol"
      ],
      benefits: "Reduces risk of skin inflammation and breakouts"
    }
  ];

  const lifestyleRecommendations = [
    {
      title: "Skin Care Routine",
      icon: FaRunning,
      items: [
        "Gentle daily cleansing",
        "Regular moisturizing",
        "Sun protection",
        "Avoid harsh chemicals",
        "Stay hydrated"
      ],
      benefits: "Maintains skin barrier and prevents damage"
    },
    {
      title: "Lifestyle Habits",
      icon: FaClock,
      items: [
        "Regular exercise",
        "Adequate sleep",
        "Stress management",
        "Avoid smoking",
        "Regular skin checks"
      ],
      benefits: "Supports overall skin health and early detection of issues"
    }
  ];

  const additionalTips = [
    {
      title: "Sun Protection",
      icon: FaSun,
      items: [
        "Use broad-spectrum sunscreen daily",
        "Wear protective clothing",
        "Avoid peak sun hours",
        "Reapply sunscreen every 2 hours",
        "Use SPF 30 or higher"
      ],
      benefits: "Prevents sun damage and reduces skin cancer risk"
    },
    {
      title: "Natural Remedies",
      icon: FaLeaf,
      items: [
        "Aloe vera for soothing",
        "Coconut oil for moisturizing",
        "Green tea compresses",
        "Honey masks",
        "Oatmeal baths for irritation"
      ],
      benefits: "Provides gentle, natural skin care solutions"
    },
    {
      title: "Hydration & Moisture",
      icon: FaWater,
      items: [
        "Drink 8-10 glasses of water daily",
        "Use humidifier in dry weather",
        "Apply moisturizer to damp skin",
        "Take lukewarm showers",
        "Avoid hot water exposure"
      ],
      benefits: "Maintains skin hydration and barrier function"
    },
    {
      title: "Prevention Tips",
      icon: FaShieldAlt,
      items: [
        "Regular dermatologist visits",
        "Monthly self-skin checks",
        "Avoid touching face frequently",
        "Use clean pillowcases",
        "Maintain good hand hygiene"
      ],
      benefits: "Early detection and prevention of skin issues"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 relative bg-gradient-to-br from-skin-yellow via-skin-light-yellow to-skin-light-green">
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-skin-dark-green mb-8"
        >
          Skin Disease Prevention Guide
        </motion.h1>

        <div className="space-y-12">
          {/* Dietary Guidelines Section */}
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl border border-skin-yellow shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-skin-dark-green mb-8">Dietary Guidelines for Skin Health</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skinCareGuidelines.map((guideline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-skin-light-yellow rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-skin-yellow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <guideline.icon className="text-2xl text-skin-dark-green" />
                    <h3 className="text-xl font-semibold text-skin-dark-green">{guideline.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {guideline.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-skin-dark-green">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-gray-600 italic">
                    <strong>Benefits:</strong> {guideline.benefits}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lifestyle Recommendations Section */}
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl border border-skin-yellow shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-skin-dark-green mb-8">Lifestyle Recommendations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {lifestyleRecommendations.map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-skin-light-yellow rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-skin-yellow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <rec.icon className="text-2xl text-skin-dark-green" />
                    <h3 className="text-xl font-semibold text-skin-dark-green">{rec.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {rec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-skin-dark-green">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-gray-600 italic">
                    <strong>Benefits:</strong> {rec.benefits}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Tips Section */}
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl border border-skin-yellow shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-skin-dark-green mb-8">Advanced Skin Care Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-skin-light-yellow rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-skin-yellow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <tip.icon className="text-2xl text-skin-dark-green" />
                    <h3 className="text-xl font-semibold text-skin-dark-green">{tip.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {tip.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-skin-dark-green">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-gray-600 italic">
                    <strong>Benefits:</strong> {tip.benefits}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Emergency Tips Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-md p-8 rounded-xl border border-skin-yellow shadow-lg"
          >
            <h2 className="text-3xl font-semibold text-center text-skin-dark-green mb-8">Emergency Skin Care Tips</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-skin-light-yellow rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-skin-yellow">
                <h3 className="text-xl font-semibold mb-4 text-skin-dark-green">Allergic Reactions</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-skin-dark-green">•</span>
                    <span className="text-gray-700">Stop using new products immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-skin-dark-green">•</span>
                    <span className="text-gray-700">Apply cold compress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-skin-dark-green">•</span>
                    <span className="text-gray-700">Take antihistamines if prescribed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-skin-dark-green">•</span>
                    <span className="text-gray-700">Seek medical help if severe</span>
                  </li>
                </ul>
              </div>

              <div className="bg-skin-light-yellow rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-skin-yellow">
                <h3 className="text-xl font-semibold mb-4 text-skin-dark-green">Severe Sunburn</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-skin-dark-green">•</span>
                    <span className="text-gray-700">Get out of sun immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-skin-dark-green">•</span>
                    <span className="text-gray-700">Take cool shower/bath</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-skin-dark-green">•</span>
                    <span className="text-gray-700">Apply aloe vera gel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-skin-dark-green">•</span>
                    <span className="text-gray-700">Stay hydrated</span>
                  </li>
                </ul>
              </div>

              <div className="bg-skin-light-yellow rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-skin-yellow">
                <h3 className="text-xl font-semibold mb-4 text-skin-dark-green">Chemical Contact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-skin-dark-green">•</span>
                    <span className="text-gray-700">Rinse area with cool water</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-skin-dark-green">•</span>
                    <span className="text-gray-700">Remove contaminated clothing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-skin-dark-green">•</span>
                    <span className="text-gray-700">Don't apply other products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-skin-dark-green">•</span>
                    <span className="text-gray-700">Seek immediate medical attention</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FoodRecommendations;