import { useRouter } from "next/router";

export const EventDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Event</h1>
      <p>Event ID: {id}</p>
    </div>
  );
};

export default EventDetailPage;
