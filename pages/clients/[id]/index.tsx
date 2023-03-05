import { useRouter } from "next/router";

export default function Client() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Client Id:&quot;{id}&quot;</h1>
    </div>
  );
}
