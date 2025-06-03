import { motion } from 'framer-motion'

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-wine flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="https://drive.google.com/thumbnail?id=1QuUY8mC2wGk5mswRjxo-rlJY4ZZXEn1q&sz=w1000"
            alt="InnoFemme Logo"
            className="h-24 mx-auto"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          InnoFemme
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gold text-xl mb-8"
        >
          Innovation Without Bias
        </motion.p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.9, duration: 1.5 }}
          className="h-1 bg-gold mx-auto rounded-full max-w-xs"
        />
      </div>
    </div>
  )
}

export default Preloader