import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <div className="relative mr-4 flex-grow-0 flex flex-row text-4xl space-x-6 align-bottom">
      <a href="https://github.com/gernathlub" className="w-8 h-8">
        <FontAwesomeIcon
          className="hover:text-primary hover:cursor-pointer"
          icon={faGithub}
        />
      </a>
      <a href="https://www.linkedin.com/in/%C4%BEubom%C3%ADr-gern%C3%A1th-24335a220/" className="w-8 h-8">
        <FontAwesomeIcon
          className="hover:text-primary hover:cursor-pointer"
          icon={faLinkedin}
        />
      </a>
    </div>
  );
}
