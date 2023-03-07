import { useRouter } from "next/router";

export const FilteredEventsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Filtered Event</h1>
      <p>Event SLUG: {(slug as string[]).join("/")}</p>
    </div>
  );
};

export default FilteredEventsPage;
