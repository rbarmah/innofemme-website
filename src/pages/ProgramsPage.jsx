import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const programs = [
  {
    id: 1,
    name: 'Gurlz Wellness',
    description: 'A comprehensive wellness platform designed specifically for African women, focusing on physical and mental health.',
    image: 'https://images.pexels.com/photos/3759660/pexels-photo-3759660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    director: 'Dr. Deborah Chantelle Kanamintie',
    deputyDirector: 'Lady Diane Esi Ndur-Buabeng'
  },
  {
    id: 2,
    name: 'EqiEmploy',
    description: 'An innovative job platform that combines AI-powered matching with bias detection to ensure fair employment opportunities.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'InnoFemme Volunteers\' Programme',
    description: 'A structured program connecting passionate volunteers with meaningful tech initiatives that promote inclusivity.',
    image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Hackathon for Equity',
    description: 'Regular hackathon events focused on developing solutions that address gender inequity in technology.',
    image: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'Equity Clinics',
    description: 'Specialized sessions providing bias audits and practical solutions for tech companies and development teams.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    name: 'InnoFemme Summit',
    description: 'An annual conference bringing together leaders, innovators, and change-makers in inclusive technology.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-wine text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-gray-300">
              Innovative initiatives designed to promote inclusivity and equity in technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">{program.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  {program.director && (
                    <div className="mb-2">
                      <p className="text-wine font-semibold">Director:</p>
                      <p className="text-gray-700">{program.director}</p>
                    </div>
                  )}
                  {program.deputyDirector && (
                    <div className="mb-4">
                      <p className="text-wine font-semibold">Deputy Director:</p>
                      <p className="text-gray-700">{program.deputyDirector}</p>
                    </div>
                  )}
                  <button className="inline-flex items-center text-wine hover:text-gold transition-colors duration-300">
                    Learn More <FiArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;