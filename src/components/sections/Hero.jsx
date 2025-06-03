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
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Empowering Women Through Technology
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
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
            >
              Our Initiatives
            </a>
            <a 
              href="#contact" 
              className="btn border-2 border-white text-white hover:bg-white hover:text-wine"
            >
              Join Us
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-wine to-transparent"></div>
    </section>
  )
}

export default Hero