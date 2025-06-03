import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { events } from '../../data/events'

const Events = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  // Format date to readable format
  const formatDate = (dateString) => {
    if (dateString === 'Various dates') return dateString;
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section id="events" className="py-20 bg-wine bg-opacity-[0.03]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-5">
            Flagship <span className="text-wine">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-700">
            Join us for these transformative events that bring together women in technology.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {events.map((event, index) => (
            <motion.div 
              key={event.id} 
              variants={item}
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} bg-white rounded-xl shadow-lg overflow-hidden`}
            >
              <div className="md:w-2/5 relative">
                <img 
                  src={event.image} 
                  alt={event.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="inline-block px-3 py-1 bg-gold text-black text-sm font-semibold rounded-full mb-3">
                    Coming Soon
                  </div>
                  {event.nextDate !== 'Various dates' && (
                    <div className="inline-block px-3 py-1 bg-white text-wine text-sm font-semibold rounded-full ml-2 mb-3">
                      Next: {formatDate(event.nextDate)}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold text-wine mb-4">{event.name}</h3>
                <p className="text-gray-700 mb-6">{event.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 rounded-full bg-wine-light bg-opacity-20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-wine" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Frequency: {event.frequency}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-wine-light bg-opacity-20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-wine" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Location: {event.location}</span>
                  </div>
                </div>
                
                <h4 className="font-semibold text-wine mb-3">Highlights:</h4>
                <ul className="space-y-2 mb-6">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-gold-light flex items-center justify-center mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-wine" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">{highlight}</p>
                    </li>
                  ))}
                </ul>
                
                <a href="#contact" className="btn btn-outline inline-flex items-center">
                  <span>Join Waitlist</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Events