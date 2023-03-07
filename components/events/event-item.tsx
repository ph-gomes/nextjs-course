import { IEvent } from "@/types";
import Image from "next/image";
import Link from "next/link";
import classes from "./event-item.module.css";

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
    <li className={classes.item} key={id}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={title} fill />
      </div>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link className={classes.actions} href={exploreLink}>
            Explore Event
          </Link>
        </div>
      </div>
    </li>
  );
};
