import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Initiatives = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const initiatives = [
    {
      id: 1,
      title: "Duplicate & Upgrade",
      description: "We take popular tools (think period trackers, credit‑scoring models, mapping apps) and rebuild them with stronger ethics—privacy, accessibility, and cultural fit baked in.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Influence From Within",
      description: "We equip women who are already inside tech companies, banks, and governments to steer the code, the data, and the decisions toward fairness. Bias can't hide when women write the rules.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Invent for Justice",
      description: "When no tool exists, we create brand‑new products that tackle ignored problems—from safe‑route finders for night travel to AI that spots discrimination in hiring ads.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section id="initiatives" className="py-20 bg-cream-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-5">
            Our <span className="text-wine">Big Plays</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-700">
            Three strategic approaches to hacking everyday technology and innovation so it finally works for all of us.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-10 md:grid-cols-3"
        >
          {initiatives.map((initiative) => (
            <motion.div
              key={initiative.id}
              variants={item}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="h-16 w-16 rounded-full bg-wine bg-opacity-10 flex items-center justify-center mb-6 text-wine">
                  {initiative.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-wine">{initiative.title}</h3>
                <p className="text-gray-700">{initiative.description}</p>
              </div>
              <div className="h-2 bg-gold"></div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-wine mb-6">Join the build</h3>
          <a href="#contact" className="btn btn-primary inline-flex items-center">
            <span>Code with us</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Initiatives