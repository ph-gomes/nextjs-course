import { EventList } from "@/components/events/event-list";
import { EventsSearch } from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";

const EventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventsSearch />
      <EventList items={events} />
    </div>
  );
};

export default EventsPage;
