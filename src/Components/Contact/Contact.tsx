import { CONTACT } from "../../Constants"

const Contact = () => {
    return (
        <section className="text-neutral-400">
            <h2 className="my-12 text-3xl tracking-tighter lg:text-4xl text-center text-white">Contact Us</h2>
            {CONTACT.map((detail) => (
                <p
                    className="my20 border-b border-dotted border-neutral-700 pb-12  text-center text-2xl tracking-tighter lg:text-3xl"
                    key={detail.key}
                >
                    {detail.value}
                </p>
            ))}
        </section>
    )
}

export default Contact
