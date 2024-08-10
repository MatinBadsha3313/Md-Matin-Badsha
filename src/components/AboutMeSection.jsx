import BlackButton from "./BlackButton";

const AboutMeSection = () => {
  return (
    <section
      className="w-full px-6 py-8 md:py-20 2xl:py-24 bg-gray-900 text-white"
      id="about"
    >
      <div className="container">
        <h2 className="text-3xl font-semibold text-center">
          ABOUT <span className="text-orange-500">ME</span>
        </h2>

        {/* About Me Section Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* About Me Section Image */}
          <div className="md:w-[30%] h-full flex justify-center items-center">
            <div className="max-h-[60%] w-[70%] md:w-full rounded-lg bg-orange-400 overflow-hidden shadow-2xl shadow-gray-600 border-4 border-white">
              <img
                src="./Images/About_Image.jpg"
                alt="About image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* About Me Section text */}
          <div className="md:w-[70%] flex flex-col justify-center items-start gap-8 px-4">
            <p className="font-semibold text-gray-300 text-start font-mono">
              Hey there! I'm Md Matin Badsha, a front-end developer who loves
              creating dynamic and engaging user experiences. I have a strong
              background in React.js and I thoroughly enjoy bringing web ideas
              to life. I’m all about making things that are not only beautiful
              but also super functional, my focus is on creating visually
              stunning and highly functional digital products. My goal is to
              merge creativity with technology to deliver seamless and intuitive
              digital experiences that users will adore.
              <br />
              <br />
              My journey into web development began with a curiosity about how
              websites function and a strong desire to build my own. I started
              with the basics of HTML and CSS, but my interest quickly grew,
              leading me to dive deeper into JavaScript and eventually
              specialize in React.js. Throughout this journey, I've worked on
              various projects that have taught me so much about the front-end
              development and the importance of user-centered design. Each
              project has been a learning experience, helping me continuously
              improve my skills and take on new challenges confidently and
              enthusiastically.
              <br />
              <br />
              I'm dedicated to crafting engaging, user-friendly websites that go
              above and beyond client expectations. I believe in writing clean,
              efficient code and following design principles that ensure an
              optimal user experience. My video demonstrations and project
              showcases reflect my dedication to quality and my enthusiasm for
              web development.
              <br />
              <br />I love connecting with like-minded folks. If you’ve got a
              project in mind or just want to chat about web development, feel
              free to reach out!
            </p>

            <BlackButton to={"contact"} text={"Contact Me"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
