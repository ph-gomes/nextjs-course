import { useRouter } from "next/router";

export default function PortfolioProject() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Portfolio Project Id:&quot;{id}&quot;</h1>
    </div>
  );
}
