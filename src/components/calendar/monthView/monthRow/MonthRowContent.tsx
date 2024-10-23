import moment from "moment";
import { MonthRowSegment } from "./MonthRowSegment";
import { Event } from "../../../../types/types";
import {
  assembleWeekEventsByName,
  computeSegments,
} from "../../../../utils/calendar";

export const MonthRowContent = ({
  week,
  events,
}: {
  week: Date[];
  events: Event[];
}) => {
  const weekStart = moment(week[0]).subtract(1, "day");
  const weekEnd = moment(week[4]).add(1, "day");

  const isEventInRange = (event: Event) =>
    moment(event.start).isBetween(weekStart, weekEnd) ||
    moment(event.end).isBetween(weekStart, weekEnd) ||
    (moment(event.start).isBefore(week[0]) &&
      moment(event.end).isAfter(week[4]));

  const weekEvents = events.filter(isEventInRange);

  const weekEventsByName = assembleWeekEventsByName(weekEvents);

  return (
    <div className="rbc-row-content">
      {weekEventsByName.map((eventArray) => {
        const segments = computeSegments(week, eventArray);
        return (
          <div className="rbc-row" key={eventArray[0].user.name}>
            {segments.map((segment, segmentIndex) => (
              <MonthRowSegment key={segmentIndex} segment={segment} />
            ))}
          </div>
        );
      })}
    </div>
  );
};
