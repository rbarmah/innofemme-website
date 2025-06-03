import Hero from '../components/sections/Hero'
import Initiatives from '../components/sections/Initiatives'
import Contact from '../components/sections/Contact'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <>
      <Hero />
      
      {/* About Section */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-5">
              <span className="text-wine">About</span> Us
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-700">
              We are an African, women‑led nonprofit hacking everyday technology and innovation so it finally works for <em>all</em> of us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src="/src/assets/image.png" 
                  alt="Women in technology" 
                  className="rounded-xl object-cover h-full w-full shadow-xl"
                />
              </div>
              
              <div className="absolute bottom-10 right-10 bg-wine text-white p-5 rounded-xl shadow-lg max-w-xs">
                <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                <p>To enable women-led technology and innovation that is inclusive, accessible, and culturally relevant for all.</p>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-gold rounded-xl z-[-1]"></div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-wine mb-4">Why We Exist</h3>
                <p className="text-lg text-gray-700">
                  Too much of today's tech and innovation systems, were built without women—especially African women—in mind. We're here to flip that script.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-wine mb-4">How We Work</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">We build our own prototypes and open‑source much of the code.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">We run fellowships and micro‑grants that let other women do the same.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">We partner with universities, grassroots groups, and forward‑thinking businesses.</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Initiatives />
      <Contact />
    </>
  )
}

export default HomePage