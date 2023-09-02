import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <div className="absolute align-middle flex flex-row right-4 space-x-6 text-4xl -top-2 md:right-0">
      <a href="https://github.com/gernathlub" className="h-9 w-9">
        <FontAwesomeIcon
          className="hover:text-primary hover:cursor-pointer"
          icon={faGithub}
        />
      </a>
      <a href="https://www.linkedin.com/in/%C4%BEubom%C3%ADr-gern%C3%A1th-24335a220/" className="h-9 w-9">
        <FontAwesomeIcon
          className="hover:text-primary hover:cursor-pointer"
          icon={faLinkedin}
        />
      </a>
    </div>
  );
}
