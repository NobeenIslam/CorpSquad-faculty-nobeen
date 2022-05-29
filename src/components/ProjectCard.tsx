import { useEffect, useState } from "react";
import { ProjectInterface } from "../utils/Interfaces";

export function ProjectCard(): JSX.Element {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);

  async function fetchProjects() {
    const response = await fetch(
      "https://consulting-projects.academy-faculty.repl.co/api/projects"
    );
    const jsonBody: ProjectInterface[] = await response.json();
    setProjects(jsonBody);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  console.log(projects);
  return <div>{JSON.stringify(projects[1])}</div>;
}
