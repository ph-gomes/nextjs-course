import { IEvent } from "@/types";
import { EventItem } from "./event-item";
import classes from "./event-list.module.css";

export const EventList = (props: { items: IEvent[] }) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem item={event} key={event.id} />
      ))}
    </ul>
  );
};
