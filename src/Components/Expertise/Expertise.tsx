import { CUSINES } from "../../Constants"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: {duration: 0.8} }
}

const Expertise = () => {
  return (
    <section id="expertise">
      <h2 className="tracking-tighter text-center my-8 text-3xl lg:text-4xl">Our Expertise</h2>

      <motion.div initial="hidden" whileInView="show" variants={containerVariants} className="container mx-auto px4">
        {CUSINES.map((cusine, index) => (
          <motion.div variants={childVariants} className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2" key={index}>

            <div className="flex-shrink-0 pr-8 text-2xl">
              {cusine.number}
            </div>

            <div className="w-1/3 flex-shrink-0">
              <img className="h-auto rounded-3xl" src={cusine.image} alt={cusine.title} />
            </div>

            <div className="pl-8">
              <h3 className="text-2xl uppercase tracking-tighter text-rose-300">{cusine.title}</h3>
              <p className="mt-4 text-lg tracking-tighter">{cusine.description}</p>
            </div>

          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Expertise
