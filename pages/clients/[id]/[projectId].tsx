import { useRouter } from "next/router";

export default function ClientProject() {
  const router = useRouter();
  const { id, projectId } = router.query;

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
      <h2>Client Id:&quot;{id}&quot;</h2>
      <h2>Project Id:&quot;{projectId}&quot;</h2>
    </div>
  );
}
