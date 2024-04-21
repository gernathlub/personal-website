import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Socials() {
    return (
        <div className="absolute -top-2 right-4 flex flex-row space-x-6 align-middle text-4xl md:right-0">
            <a
                href="https://github.com/gernathlub"
                className="h-9 w-9"
                target="_blank">
                <FontAwesomeIcon
                    className="hover:cursor-pointer hover:text-primary"
                    icon={faGithub}
                />
            </a>
            <a
                href="https://www.linkedin.com/in/%C4%BEubom%C3%ADr-gern%C3%A1th-24335a220/"
                className="h-9 w-9"
                target="_blank">
                <FontAwesomeIcon
                    className="hover:cursor-pointer hover:text-primary"
                    icon={faLinkedin}
                />
            </a>
        </div>
    )
}
