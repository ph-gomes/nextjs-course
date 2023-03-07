import Link from "next/link";

export default function Portfolio() {
  const projects = [
    { id: "foo", name: "Foo" },
    { id: "bar", name: "Bar" },
  ];

  return (
    <div>
      <h1>Portfolio page</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/portfolio/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
