import { EventList } from "@/components/events/event-list";
import { EventsSearch } from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const EventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const searchHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={searchHandler} />
      <EventList items={events} />
    </div>
  );
};

export default EventsPage;
