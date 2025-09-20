import mission from "../../assets/mission.mp4"
import missionImg from "../../assets/mission.jpeg"
import { MISSION } from "../../Constants"

const Mission = () => {
    return (
        <section className="pb-16 mt-20" id="mission">
            <div className="container mx-auto text-center">
                <h2 className="mb-8 text-3xl tracking-tighter lg:text-4xl">Our Mission</h2>

                <div className="relative flex items-center justify-center">
                    <video
                        className="w-full rounded-3xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={missionImg}
                    >
                        <source src={mission} type="video/mp4" />
                    </video>

                    <div className="absolute h-full w-full rounded-3xl bg-black/30"></div>

                    <p className="absolute max-w-lg tacking-tighter lg:text-3xl">
                        {MISSION}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Mission
