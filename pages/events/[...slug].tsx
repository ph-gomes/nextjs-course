import { EventList } from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

export const FilteredEventsPage = () => {
  const router = useRouter();
  const { slug: filterData } = router.query as { slug: string[] };

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const [rawYear, rawMonth] = filterData;

  const year = +rawYear;
  const month = +rawMonth;

  if (
    isNaN(month) ||
    isNaN(year) ||
    year < 2021 ||
    year > 2030 ||
    month < 1 ||
    month > 12
  ) {
    return <p className="center">Invalid Filter. Please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No events found for the chosen filter!</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
