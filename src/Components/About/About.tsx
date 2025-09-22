import about from "../../assets/about.jpeg"
import { ABOUT } from "../../Constants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section id='about' className='container mx-auto my-8'>
      <h2 className='mb-8 text center text-3xl tracking-tighter lg:text-4xl'>About Us</h2>

      <div className='flex flex-wrap'>

        <div className='w-full p-4 lg:w-1/2'>
          <img src={about} alt="" className="rounded-3xl lg:-rotate-3" />
        </div>

        <div className="w-full px-4 lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 text-4xl tracking-tighter lg:text-6xl lg:mt-0">
            {ABOUT.header}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 mt-1.5 h-2 w-36 bg-rose-300 lg:-rotate-3"></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="sm ml-0 m-8 text-2xl leading-relaxed  tracking-tight">{ABOUT.content}</motion.p>
        </div>

      </div>
    </section>
  )
}

export default About
