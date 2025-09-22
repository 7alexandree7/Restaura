import { REVIEW } from "../../Constants"
import xaviour from "../../assets/xaviour.jpeg"
import { motion } from "framer-motion"

import customer1 from "../../assets/customer1.jpeg"
import customer2 from "../../assets/customer2.jpeg"
import customer3 from "../../assets/customer3.jpeg"
import customer4 from "../../assets/customer4.jpeg"

const Reviews = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.8,
            }
        }
    }

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }


    return (
        <section className="container mx-auto  mb-8 mt-12" id="reviews">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="flex flex-col">
                <motion.p
                    className="mb-10  text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:text-[3rem]"
                    variants={childVariants}
                >{REVIEW.content}</ motion.p>

                <motion.div variants={childVariants} className="flex items-center justify-center gap-6">
                    <img className="rounded-full border" src={xaviour} width={80} height={80} alt={REVIEW.name} />

                    <div className="tracking-tighter">
                        <h6>{REVIEW.name}</h6>
                        <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={childVariants}
                    className="mt-14 flex flex-col items-center justify-center gap-3 md:flex-row">
                    {[customer1, customer2, customer3, customer4].map((customer, index) => (
                        <motion.img
                            variants={childVariants}
                            key={index}
                            className="h-[300px] w-[200px] rounded-br-3xl object-cover"
                            src={customer}
                            width={80}
                            height={80}
                            alt={REVIEW.name} />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Reviews
