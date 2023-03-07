import Link from "next/link";

const EventsPage = () => {
  return (
    <div>
      <h1>Events</h1>
      <ul>
        <li>
          <Link href="/events/1">Event 1</Link>
        </li>
      </ul>
    </div>
  );
};

export default EventsPage;
