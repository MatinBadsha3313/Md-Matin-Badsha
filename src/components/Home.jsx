import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import BlackButton from "./BlackButton";
import WhiteButton from "./WhiteButton";
const Home = () => {
  const downloadResume = () => {
    window.open("./Md_Matin_Badsha_Resume.pdf", "_blank");
  };
  return (
    <>
      <section
        className="w-full px-6 py-8 md:py-20 2xl:py-24 bg-slate-950 text-white"
        id="home"
      >
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 flex flex-col gap-16 md:flex-row items-center justify-center">
          <div className="rounded-full w-72 h-72 sm:w-80 sm:h-80 bg-orange-400 overflow-hidden shadow-2xl shadow-gray-600 border-4 border-gray-900">
            <img
              src="./Images\Profile-Image.png"
              alt="Md Matin Badsha"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center">
            <p className="font-bold text-gray-400">Hello, I'm</p>
            <h1 className="text-2xl md:text-3xl font-bold my-3">
              MD <span className="text-orange-400">MATIN BADSHA</span>{" "}
            </h1>
            <h2 className="text-xl font-semibold text-gray-400">
              Frontend Developer
            </h2>
            <div className="mt-6 space-x-4">
              <WhiteButton text={"Download CV"} onClick={downloadResume} />

              <BlackButton to={"contact"} text={"Contact Me"} />
            </div>

            <div className="flex justify-center items-center gap-4 mt-6">
              <a
                href="https://github.com/MatinBadsha3313"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={30}
                  className="hover:text-gray-400 transition-colors duration-200"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/md-matin-badsha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaLinkedin
                  size={30}
                  className="hover:text-gray-400 transition-colors duration-200"
                />
              </a>
              <a
                href="https://x.com/badshakhan888"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaSquareXTwitter
                  size={30}
                  className="hover:text-gray-400 transition-colors duration-200"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
