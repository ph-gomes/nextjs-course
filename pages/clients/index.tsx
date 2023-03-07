import Link from "next/link";

export default function Clients() {
  const clients = [
    { id: "foo", name: "Foo" },
    { id: "bar", name: "Bar" },
  ];

  return (
    <div>
      <h1>All Clients</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
