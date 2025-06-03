import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'
import { teamMembers } from '../../data/team'

const Team = () => {
  const [flippedCards, setFlippedCards] = useState({})
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleFlip = (index) => {
    setFlippedCards(prev => {
      const newState = {...prev}
      newState[index] = !prev[index]
      return newState
    })
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="team" className="py-20 mb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-5">
            Meet Our <span className="text-wine">Coordinating Team</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-700">
            The incredible women leading the charge to make technology more inclusive.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24 mb-32"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={item}
              className="relative mx-auto"
              style={{ 
                width: "100%",
                maxWidth: "320px",
                height: "450px",
              }}
            >
              <div 
                className="h-full w-full cursor-pointer" 
                onClick={() => toggleFlip(index)}
              >
                <div className="flip-card relative w-full h-full">
                  {/* Card inner container */}
                  <motion.div
                    className="flip-card-inner absolute w-full h-full"
                    animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center",
                    }}
                  >
                    {/* Front of card */}
                    <div 
                      className="flip-card-front absolute w-full h-full rounded-xl shadow-lg bg-white overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        zIndex: flippedCards[index] ? 0 : 1,
                      }}
                    >
                      <div className="flex flex-col h-full">
                        <div className="relative overflow-hidden h-64">
                          <img 
                            src={member.imgSrc} 
                            alt={member.name} 
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        
                        <div className="p-6 text-center flex flex-col justify-center flex-grow">
                          <h3 className="text-xl font-bold mb-1 text-wine">{member.name}</h3>
                          <p className="text-gold font-medium mb-3">{member.role}</p>
                          <p className="text-gray-600 text-sm">Click to see bio</p>
                        </div>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div 
                      className="flip-card-back absolute w-full h-full rounded-xl shadow-lg bg-white overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        zIndex: flippedCards[index] ? 1 : 0,
                      }}
                    >
                      <div className="p-6 flex flex-col h-full">
                        <h3 className="text-xl font-bold mb-4 text-wine text-center">{member.name}</h3>
                        <div className="overflow-y-auto mb-4 flex-grow">
                          <p className="text-gray-600">{member.bio}</p>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="flex justify-center space-x-3 mb-3">
                            <a 
                              href={member.socialLinks.linkedin} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-white text-wine flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-200 border border-wine"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FiLinkedin />
                            </a>
                            <a 
                              href={member.socialLinks.twitter} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-white text-wine flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-200 border border-wine"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FiTwitter />
                            </a>
                            <a 
                              href={member.socialLinks.github} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-white text-wine flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-200 border border-wine"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FiGithub />
                            </a>
                          </div>
                          <p className="text-gray-600 text-sm text-center">Click to flip back</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div 
                className="absolute -inset-px rounded-xl -z-10 border-2 border-gold opacity-0 hover:opacity-100 transition-opacity duration-300"
              ></div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 relative z-10"
        >
          <a href="#contact" className="btn btn-outline inline-flex items-center">
            <span>Join Our Team</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Team