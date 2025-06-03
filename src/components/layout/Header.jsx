import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Programs', href: '/programs' },
    { name: 'Contact', href: '/contact' }
  ]

  const headerClasses = scrolled
    ? 'bg-white shadow-md text-wine'
    : 'bg-transparent text-white'

  const isHomePage = location.pathname === '/'

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${headerClasses} ${!isHomePage ? 'bg-wine text-white' : ''}`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-3"
          aria-label="InnoFemme Home"
        >
          <img 
            src="https://drive.google.com/thumbnail?id=1QuUY8mC2wGk5mswRjxo-rlJY4ZZXEn1q&sz=w1000" 
            alt="InnoFemme Logo" 
            className="h-14 w-auto"
            width="56"
            height="56"
          />
          <span className={`text-2xl font-bold ${scrolled && isHomePage ? 'text-wine' : 'text-white'}`}>
            InnoFemme
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium hover:text-gold-light transition-colors duration-200 ${
                scrolled && isHomePage
                  ? 'text-wine hover:text-wine-dark'
                  : 'text-white hover:text-gold-light'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className={`btn ${scrolled && isHomePage ? 'bg-wine text-white hover:bg-wine-dark' : 'bg-gold text-black hover:bg-gold-light'} py-2 px-5 rounded-lg`}
          >
            Join Us
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <FiX className={scrolled && isHomePage ? 'text-wine-dark' : 'text-white'} />
          ) : (
            <FiMenu className={scrolled && isHomePage ? 'text-wine-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-wine font-medium py-2 hover:text-wine-dark transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn btn-primary w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header