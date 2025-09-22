import mission from "../../assets/mission.mp4"
import missionImg from "../../assets/mission.jpeg"
import { MISSION } from "../../Constants"
import { motion } from "framer-motion"

const Mission = () => {
    return (
        <section className="pb-16 mt-20" id="mission">
            <div className="container mx-auto text-center">
                <h2 className="mb-8 text-3xl tracking-tighter lg:text-4xl">Our Mission</h2>

                <div className="relative flex items-center justify-center">
                    <motion.video
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full rounded-3xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={missionImg}
                    >
                        <source src={mission} type="video/mp4" />
                    </motion.video>

                    <motion.div
                        className="absolute h-full w-full rounded-3xl bg-black/30"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    ></motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="absolute max-w-lg tacking-tighter lg:text-3xl">
                        {MISSION}
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default Mission
