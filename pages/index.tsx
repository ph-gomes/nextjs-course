import { EventList } from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home</h1>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
