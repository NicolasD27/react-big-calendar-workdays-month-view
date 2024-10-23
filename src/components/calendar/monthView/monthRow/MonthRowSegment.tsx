import moment from "moment";
import { EventComponent } from "./EventComponent";
import { Segment } from "../../../../types/types";

export const MonthRowSegment = ({ segment }: { segment: Segment }) => {
  const segmentStart = moment(segment.start);
  const segmentEnd = moment(segment.end);
  const segmentDays =
    segmentEnd.diff(segmentStart, "days") + (segment.event ? 1 : 0);

  return (
    <div
      className="rbc-row-segment"
      style={{
        flexBasis: `${(segmentDays / 5) * 100}%`,
        maxWidth: `${(segmentDays / 5) * 100}%`,
      }}
    >
      {segment.event && (
        <div className="rbc-event">
          <div className="rbc-event-content">
            <EventComponent event={segment.event} />
          </div>
        </div>
      )}
    </div>
  );
};
