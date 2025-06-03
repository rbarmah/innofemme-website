import { motion } from 'framer-motion'
import { teamMembers } from '../data/team'
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'

const TeamPage = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="pt-20">
      <section className="bg-wine text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Team</h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Meet the incredible women leading the charge to make technology more inclusive.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={item}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img 
                    src={member.imgSrc} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-gold">{member.role}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{member.bio}</p>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wine hover:text-gold transition-colors"
                    >
                      <FiLinkedin size={20} />
                    </a>
                    <a 
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wine hover:text-gold transition-colors"
                    >
                      <FiTwitter size={20} />
                    </a>
                    <a 
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wine hover:text-gold transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TeamPage