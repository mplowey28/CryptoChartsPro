import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bottom-0 flex flex-col justify-center align-middle bg-gray-900 mt-4 py-2 w-full">
      <div className="flex flex-row justify-center align-middle">
        <a
          href="https://www.linkedin.com/in/matthew-plowey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin size={32} />
        </a>
        <a
          href="https://www.github.com/mplowey28"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub size={32} />
        </a>
      </div>
      <div className="flex flex-row justify-center align-middle">
        <h3> &copy; Matthew Plowey 2021</h3>
      </div>
    </div>
  );
};

export default Footer;
