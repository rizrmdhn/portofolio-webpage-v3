import data from "@/lib/data.json";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div
      id="project"
      className="mt-5 flex w-full flex-row flex-wrap items-center justify-center gap-5 border-b-2 border-primary"
    >
      {data.project.map((item, index) => (
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
