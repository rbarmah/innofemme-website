import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { products } from '../../data/products'

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(products[0])
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="products" className="py-20 bg-cream-gradient overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-5">
            Our <span className="text-wine">Products</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-700">
            Innovative technology solutions designed by women, for everyone.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 lg:pr-8 mb-8 lg:mb-0">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setActiveProduct(product)}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeProduct.id === product.id
                        ? 'bg-wine text-white shadow-lg'
                        : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <h3 className={`text-xl font-bold mb-2 ${
                      activeProduct.id === product.id ? 'text-white' : 'text-wine'
                    }`}>
                      {product.name}
                    </h3>
                    <p className={`${
                      activeProduct.id === product.id ? 'text-white' : 'text-gray-600'
                    }`}>
                      {product.description.substring(0, 100)}...
                    </p>
                    {activeProduct.id === product.id && (
                      <div className="mt-4">
                        <div className="h-1 w-12 bg-gold"></div>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div ref={ref}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl"
                >
                  <div className="relative h-64 lg:h-96">
                    <img 
                      src={activeProduct.image} 
                      alt={activeProduct.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <div className="inline-block px-3 py-1 bg-gold text-black text-sm font-semibold rounded-full mb-4">
                        Coming Soon
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{activeProduct.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-lg text-gray-700 mb-6">{activeProduct.description}</p>
                    
                    <h4 className="text-xl font-bold text-wine mb-4">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {activeProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-wine-light bg-opacity-20 flex items-center justify-center mt-1 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-wine" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="ml-3 text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-4">
                      <a href="#contact" className="btn btn-primary flex items-center">
                        Join Waitlist
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                      
                      {activeProduct.id === 1 && (
                        <a 
                          href="https://gurlz.innofemme.org" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-outline flex items-center"
                        >
                          More Info
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products