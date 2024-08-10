import { Link } from "react-scroll";
const BlackButton = ({ link, text, to }) => {
  if (to) {
    return (
      <Link
        to={to}
        smooth={true}
        duration={500}
        offset={-80}
        className="px-4 py-2 rounded-full border-2 border-gray-300 text-white bg-black hover:bg-transparent transition-all duration-200 ease-linear"
      >
        {text}
      </Link>
    );
  }
  return (
    <a
      href={link}
      target="_blank"
      className="px-4 py-2 rounded-full border-2 border-gray-300 text-white bg-black hover:bg-transparent transition-all duration-200 ease-linear"
    >
      {text}
    </a>
  );
};

export default BlackButton;
