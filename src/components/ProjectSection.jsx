import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section
      className="w-full px-6 py-8 md:py-20 2xl:py-24 bg-gray-900 text-white"
      id="projects"
    >
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-xl md:text-3xl font-semibold text-center uppercase border-amber-700 pb-2">
            My <span className="text-orange-500">Projects</span>
          </h2>
          <p className="md:text-lg text-sm text-gray-400">
            Browse My Recent Works
          </p>
        </div>

        <div className="flex  lg:flex-row flex-col items-center gap-6">
          {/* ------First_Project------ */}
          <ProjectCard
            img={"./Images/E-commerce-Website.png"}
            name={"E-Commerce Website"}
            githubLink={
              "https://github.com/MatinBadsha3313/CRYPTO-CURRENCY-WEBSITE"
            }
            liveLink={"https://react-js-ecommerce-project.vercel.app/"}
          />
          {/* ------2nd_Project------ */}
          <ProjectCard
            img={"./Images/Cryptocurrency-Website.png"}
            name={"Cryptocurrency Landing Page"}
            githubLink={
              "https://github.com/MatinBadsha3313/CRYPTO-CURRENCY-WEBSITE"
            }
            liveLink={"https://crypto-currency-website-theta.vercel.app/"}
          />

          {/* ------3rd_Project------ */}
          {/* --The best way I can create a Data.jsx file and we save the img, name, githubLink and liveLink in it. And I can use Map method to show all projects in it.-- */}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
