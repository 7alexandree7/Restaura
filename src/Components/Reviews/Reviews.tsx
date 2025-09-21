import { REVIEW } from "../../Constants"
import xaviour from "../../assets/xaviour.jpeg"

import customer1 from "../../assets/customer1.jpeg"
import customer2 from "../../assets/customer2.jpeg"
import customer3 from "../../assets/customer3.jpeg"
import customer4 from "../../assets/customer4.jpeg"

const Reviews = () => {
  return (
    <section className="flex flex-col">
        <p className="mb-10  text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:text-[3rem]">{REVIEW.content}</p>

        <div className="flex items-center justify-center gap-6">
            <img className="rounded-full border" src={xaviour} width={80} height={80} alt={REVIEW.name} />

            <div className="tracking-tighter">
                <h6>{REVIEW.name}</h6>
                <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
            </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-3 md:flex-row">
            {[customer1, customer2, customer3, customer4].map((customer, index) => (
                <img key={index} className="h-[300px] w-[200px] rounded-br-3xl object-cover" src={customer} width={80} height={80} alt={REVIEW.name} />
            ))}
        </div>
    </section>
  )
}

export default Reviews
