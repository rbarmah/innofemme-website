import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiMessageSquare, FiUser, FiSend } from 'react-icons/fi'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
    alert('Thank you for your message! We will get back to you soon.')
    setFormState({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-[#463169] text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-5">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-white text-opacity-80">
            Join the build. Code with us, fund a project, or pilot a solution in your community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
              <p className="text-white text-opacity-80 mb-8">
                Ready to collaborate on making technology more inclusive? Reach out to us with your ideas, questions, or partnership opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-wine-light bg-opacity-20 p-3 rounded-lg">
                  <FiMail className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-white text-opacity-80">info@innofemme.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-wine-light bg-opacity-20 p-3 rounded-lg">
                  <FiPhone className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-white text-opacity-80">+233 541 625 107</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-wine-light bg-opacity-20 p-3 rounded-lg">
                  <FiMapPin className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="text-white text-opacity-80">Accra, Ghana</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-white text-opacity-90 italic text-xl mb-4">
                "A world where women’s innovative capacity drives every technology—and every policy it inspires—to serve and treat everyone equitably."
              </p>
              <p className="text-white text-opacity-90 font-semibold">
                Technology reclaimed. By women. For everyone.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 text-gray-800 shadow-2xl">
              <h3 className="text-2xl font-bold text-wine mb-6">Send Us a Message</h3>

              <div className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine focus:border-transparent"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine focus:border-transparent"
                  />
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMessageSquare className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine focus:border-transparent"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine focus:border-transparent"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-wine text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center hover:bg-wine-dark transition-colors duration-300"
                >
                  <FiSend className="mr-2" />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
