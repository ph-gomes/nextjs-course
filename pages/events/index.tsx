import { EventList } from "@/components/events/event-list";
import { getAllEvents } from "@/dummy-data";

const EventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <h1>Events</h1>
      <EventList items={events} />
    </div>
  );
};

export default EventsPage;
