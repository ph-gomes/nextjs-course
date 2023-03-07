import { IEvent } from "@/types";
import Link from "next/link";

export const EventItem = (props: { item: IEvent }) => {
  const { title, image, date, location, id } = props.item;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li key={id}>
      <img src={`/${image}`} alt={title} />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{readableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};
