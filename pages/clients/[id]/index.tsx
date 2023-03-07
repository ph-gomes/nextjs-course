import { useRouter } from "next/router";

export default function Client() {
  const router = useRouter();
  const { id } = router.query;

  const loadProjectHandler = () => {
    // do some stuff
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "foo", clientProjectId: "bar" },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <h2>Client Id: &quot;{id}&quot;</h2>

      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
