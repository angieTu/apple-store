import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const yearCopyright = new Date().getFullYear();

  return (
    <footer>
      <p className="footer-content">
        © {yearCopyright}. Designed and built by Angie Turne. All rights
        reserved.
      </p>
      <div className="contact-details">
        <a target="_blank" href="https://github.com/angieTu" rel="noreferrer">
          <AiFillGithub
            className={`footer-icon github-icon`}
            aria-hidden="true"
            aria-label="GitHub"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/angie-tu/"
          rel="noreferrer"
        >
          <AiFillLinkedin
            className={`footer-icon`}
            target="_blank"
            aria-hidden="true"
            aria-label="LinkedIn"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
