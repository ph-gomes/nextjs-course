import { useRouter } from "next/router";

export default function BlogPostPage() {
  const router = useRouter();

  const { slug } = router.query;
  console.log("slug", slug);

  return (
    <div>
      <h1>BlogPostPage</h1>
    </div>
  );
}
