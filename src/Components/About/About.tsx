import about from "../../assets/about.jpeg"
import { ABOUT } from "../../Constants"

const About = () => {
  return (
    <section id='about' className='container mx-auto my-8'>
      <h2 className='mb-8 text center text-3xl tracking-tighter lg:text-4xl'>About Us</h2>

      <div className='flex flex-wrap'>

        <div className='w-full p-4 lg:w-1/2'>
          <img src={about} alt="" className="rounded-3xl lg:-rotate-3" />
        </div>

        <div className="w-full px-4 lg:w-1/2">
          <h2 className="mt-2 text-4xl tracking-tighter lg:text-6xl lg:mt-0">{ABOUT.header}</h2>
          <div className="mb-8 mt-1.5 h-2 w-36 bg-rose-300 lg:-rotate-3"></div>
          <p className="sm ml-0 m-8 text-2xl leading-relaxed  tracking-tight">{ABOUT.content}</p>
        </div>

      </div>
    </section>
  )
}

export default About
 