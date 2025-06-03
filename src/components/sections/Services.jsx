import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '../../data/services'

const Services = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabVariants = {
    inactive: { opacity: 0.6, scale: 0.95 },
    active: { opacity: 1, scale: 1 }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-5">
            Our <span className="text-wine">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-700">
            We offer a range of services to help build a more inclusive tech ecosystem.
          </p>
        </motion.div>

        <div className="flex flex-col space-y-10">
          {/* Tabs */}
          <div className="flex overflow-x-auto pb-4 sm:justify-center">
            <div className="flex space-x-3 md:space-x-6">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  variants={tabVariants}
                  animate={activeTab === index ? 'active' : 'inactive'}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex flex-col items-center py-3 px-4 md:px-6 rounded-lg whitespace-nowrap ${
                    activeTab === index
                      ? 'bg-wine text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-semibold">{service.name}</span>
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTabLine"
                      className="h-1 w-12 bg-gold mt-2"
                      initial={false}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 lg:grid-cols-2"
              >
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={services[activeTab].image}
                    alt={services[activeTab].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-wine to-transparent opacity-70 lg:opacity-40"></div>
                  <div className="absolute bottom-0 left-0 p-8 lg:hidden">
                    <div className="inline-block px-3 py-1 bg-gold text-black text-sm font-semibold rounded-full mb-4">
                      Coming Soon
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{services[activeTab].name}</h3>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="hidden lg:block mb-8">
                    <div className="inline-block px-3 py-1 bg-gold text-black text-sm font-semibold rounded-full mb-4">
                      Coming Soon
                    </div>
                    <h3 className="text-3xl font-bold text-wine mb-4">{services[activeTab].name}</h3>
                    <div className="h-1 w-16 bg-gold"></div>
                  </div>

                  <p className="text-xl text-gray-700 mb-8">{services[activeTab].description}</p>

                  <h4 className="text-xl font-semibold text-wine mb-6">What's Included:</h4>
                  <ul className="space-y-4 mb-8">
                    {services[activeTab].details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-gold-light flex items-center justify-center mt-1 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-wine" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-gray-700">{detail}</p>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="btn btn-primary inline-flex items-center">
                    <span>Join Waitlist</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services