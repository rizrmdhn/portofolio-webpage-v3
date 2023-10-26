import { project } from "@/lib/data.json";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div
      id="project"
      className="mb-5 mt-5 flex w-full flex-col items-center justify-center border-b-2 border-primary"
    >
      {project.map((item, index) => (
        <ProjectCard
          className="bg-transparent"
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
