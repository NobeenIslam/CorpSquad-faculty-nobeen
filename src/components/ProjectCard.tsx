import { useEffect, useState } from "react";
import { ProjectInterface } from "../utils/Interfaces";

interface ProjectCardProps {
  project: ProjectInterface;
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  return (
    <section>
      <h2>{project.id}</h2>
      <div>Start-Date:{project.contract.startDate}</div>
      <div>End-Date:{project.contract.endDate}</div>
      <div>clientId:{project.clientId}</div>
      <div>Revenue: {project.contract.size}</div>
      <div>Employees: {project.employeeIds}</div>
    </section>
  );
}
