import { EventList } from "@/components/events/event-list";
import { ResultsTitle } from "@/components/events/results-title";
import { Button } from "@/components/ui/button";
import { ErrorAlert } from "@/components/ui/error-alert/error-alert";
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
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className="center">No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
