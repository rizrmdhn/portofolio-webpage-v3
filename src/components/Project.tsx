import { project } from "@/lib/data.json";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div
      id="project"
      className="mt-5 flex w-full flex-col items-center justify-center border-b-2 border-primary"
    >
      {project.map((item, index) => (
        <ProjectCard
          className="lg:w-400px bg-transparent"
          key={index}
          name={item.name}
          description={item.description}
          url={item.url}
          githubUrl={item.githubUrl}
          tech={item.tech}
          image={item.image}
        />
      ))}
    </div>
  );
}
