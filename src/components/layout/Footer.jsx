import { motion } from 'framer-motion'
import { FiMail, FiPhoneCall, FiMapPin, FiInstagram, FiTwitter, FiLinkedin, FiGithub, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <footer className="bg-wine text-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <img 
                src="https://drive.google.com/thumbnail?id=1QuUY8mC2wGk5mswRjxo-rlJY4ZZXEn1q&sz=w1000" 
                alt="InnoFemme Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold">InnoFemme</span>
            </div>
            <p className="text-gray-300">
              An African, women-led nonprofit hacking everyday technology so it finally works for all of us.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <FiTwitter size={22} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <FiLinkedin size={22} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <FiInstagram size={22} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <FiGithub size={22} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <FiYoutube size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-gold transition-colors duration-300">About Us</a></li>
              <li><a href="#initiatives" className="hover:text-gold transition-colors duration-300">Our Initiatives</a></li>
              <li><a href="#team" className="hover:text-gold transition-colors duration-300">Our Team</a></li>
              <li><a href="#products" className="hover:text-gold transition-colors duration-300">Products</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors duration-300">Services</a></li>
              <li><a href="#events" className="hover:text-gold transition-colors duration-300">Events</a></li>
            </ul>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-gold mt-1" size={20} />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhoneCall className="text-gold" size={20} />
                <span>+233 541 625 107</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-gold" size={20} />
                <span>info@innofemme.org</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold">Join Our Newsletter</h4>
            <p className="text-gray-300">Stay updated with our latest news and events.</p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 rounded-lg bg-wine-light bg-opacity-20 border border-wine-light text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button 
                type="submit" 
                className="w-full btn bg-gold text-black hover:bg-gold-light"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-wine-light border-opacity-30 text-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} InnoFemme. All rights reserved. Technology reclaimed. By women. For everyone.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
