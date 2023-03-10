import { EventContent } from "@/components/event-detail/event-content";
import { EventLogistics } from "@/components/event-detail/event-logistics";
import { EventSummary } from "@/components/event-detail/event-summary";
import { Button } from "@/components/ui/button";
import { ErrorAlert } from "@/components/ui/error-alert/error-alert";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

export const EventDetailPage = () => {
  const router = useRouter();
  const { eventId } = router.query as { eventId: string };

  const event = getEventById(eventId);

  if (!event) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </div>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        address={event.location}
        date={event.date}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
