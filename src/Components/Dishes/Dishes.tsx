import { DISHES } from "../../Constants"
import DishCard from "../DischCard/DishCard"

const Dishes = () => {
  return (
    <section id="dishes" className="container mx-auto py-16">
        <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">Our Dishes</h2>

        <div className="grid grid-cold-1 gap-8 md:grid-cols-5">
            {DISHES.map((dish, index) => (
                <DishCard key={index} dish={dish} />
            ))}
        </div>
    </section>
  )
}

export default Dishes
