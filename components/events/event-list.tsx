import { IEvent } from "@/types";
import { EventItem } from "./event-item";

export const EventList = (props: { items: IEvent[] }) => {
  const { items } = props;

  return (
    <ul>
      {items.map((event) => (
        <EventItem item={event} key={event.id} />
      ))}
    </ul>
  );
};
