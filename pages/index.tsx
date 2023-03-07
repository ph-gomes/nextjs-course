import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/events">Events</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
