import Image from "next/image";
import { AddressIcon } from "../icons/address-icon";
import { DateIcon } from "../icons/date-icon";
import classes from "./event-logistics.module.css";
import { LogisticsItem } from "./logistics-item";

interface EventLogisticsProps {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

export const EventLogistics = (props: EventLogisticsProps) => {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width="1366" height="768" />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};
