import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  className?: string;
  name: string;
  description: string;
  url?: string;
  githubUrl?: string;
  tech?: string[];
  image?: ProjectCardImageProps[];
};

type ProjectCardImageProps = {
  url: string;
  alt: string;
};

export default function ProjectCard({
  className,
  name,
  description,
  githubUrl,
  image,
  tech,
  url,
}: ProjectCardProps) {
  return (
    <Card className={cn("mb-5", className)}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row flex-wrap justify-center">
          {tech?.map((t) => (
            <span
              key={t}
              className="mb-2 mr-2 rounded-md bg-secondary-foreground px-2 py-1 text-sm text-primary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="lg: flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-5">
        {url && (
          <div className="flex flex-row justify-center">
            <a
              href={url}
              target="_blank"
              className="text-sm duration-200 hover:scale-125 lg:text-lg"
            >
              <span>Visit</span>
            </a>
          </div>
        )}
        {githubUrl && (
          <div className="flex flex-row justify-center">
            <a
              href={githubUrl}
              target="_blank"
              className="text-sm duration-200 hover:scale-125 lg:text-lg"
            >
              <span>Source Code</span>
            </a>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
