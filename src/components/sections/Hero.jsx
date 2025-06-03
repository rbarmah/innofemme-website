import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-wine text-white overflow-hidden"
      style={{ 
        backgroundImage: 'linear-gradient(to right, rgba(49,27,86,0.9), rgba(49,27,86,0.7)), url(https://images.pexels.com/photos/3894383/pexels-photo-3894383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gold"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold"
        />
      </div>

      <div className="container mx-auto px-6 py-12 z-10">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="sr-only">InnoFemme - Innovation Without Bias</span>
                InnoFemme
                <span className="block text-gold">Innovation Without Bias</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-lg"
            >
              An African, women‑led nonprofit hacking everyday technology and innovation so it finally works for <em>all</em> of us.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a 
                href="#initiatives" 
                className="btn bg-gold text-black hover:bg-gold-light"
                aria-label="Learn more about our initiatives"
              >
                Explore Our Initiatives
              </a>
              <a 
                href="#contact" 
                className="btn border-2 border-white text-white hover:bg-white hover:text-wine"
                aria-label="Get involved with InnoFemme"
              >
                Join The Build
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <a 
          href="#about"
          className="animate-bounce bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
          aria-label="Scroll down to learn more about InnoFemme"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-white"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero