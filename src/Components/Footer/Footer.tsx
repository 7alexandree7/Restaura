import { SOCIAL_MEDIA_LINKS } from "../../Constants"


const Footer = () => {
    return (
        <footer className="mb-8 mt-14">
            <div className="ml-12 flex items-center justify-center gap-8">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Footer
