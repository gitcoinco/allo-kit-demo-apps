import { ProjectDetails } from "@allo-team/kit";

export default function ProjectPage({
  params: { chainId = 0, projectId = "" },
}) {
  return (
    <section className="space-y-8">
      <ProjectDetails id={projectId} chainId={chainId} />
    </section>
  );
}
