import WhiteButton from "./WhiteButton";
import BlackButton from "./BlackButton";

const ProjectCard = ({ img, name, githubLink, liveLink }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-gray-950 border-2 border-slate-800 rounded-3xl px-6 py-6 text-center max-w-[400px]">
      <div className="w-full h-full border-2 border-slate-950 rounded-2xl overflow-hidden">
        <img
          src={img}
          alt="E-Commerce Website"
          className="w-full bg-cover object-cover h-full"
        />
      </div>
      <h3 className="md:text-xl sm:text-lg text-base font-semibold text-gray-300">
        {name}
      </h3>
      <div className="flex justify-center items-center gap-4">
        <WhiteButton link={githubLink} text={"GitHub"} />

        <BlackButton link={liveLink} text={"Live Demo"} />
      </div>
    </div>
  );
};

export default ProjectCard;
