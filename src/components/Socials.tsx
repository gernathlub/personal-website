import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <div className="absolute right-4 flex flex-row text-4xl space-x-6 align-middle -top-2">
      <a href="https://github.com/gernathlub" className="w-9 h-9">
        <FontAwesomeIcon
          className="hover:text-primary hover:cursor-pointer"
          icon={faGithub}
        />
      </a>
      <a href="https://www.linkedin.com/in/%C4%BEubom%C3%ADr-gern%C3%A1th-24335a220/" className="w-9 h-9">
        <FontAwesomeIcon
          className="hover:text-primary hover:cursor-pointer"
          icon={faLinkedin}
        />
      </a>
    </div>
  );
}
