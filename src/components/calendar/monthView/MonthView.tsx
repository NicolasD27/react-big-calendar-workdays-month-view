import moment from "moment";
import { MonthHeader } from "./MonthHeader";
import { MonthRow } from "./monthRow/MonthRow";
import { computeWeeks, localizer } from "../../../utils/calendar";
import { Event } from "../../../types/types";

export const MonthView = ({
  date,
  events,
}: {
  date: Date;
  events: Event[];
}) => {
  const weeks = computeWeeks(date);

  return (
    <div
      className="rbc-month-view"
      style={{
        gridTemplateRows: `auto repeat(${weeks.length}, 1fr)`,
      }}
    >
      <MonthHeader />
      {weeks.map((week) => (
        <MonthRow
          key={week[0].toString()}
          date={date}
          events={events}
          week={week}
        />
      ))}
    </div>
  );
};

MonthView.title = (date: Date) => {
  return `${localizer.format(date, "MMMM YYYY")}`;
};

MonthView.navigate = (date: Date, action: string) => {
  switch (action) {
    case "PREV":
      return moment(date).subtract(1, "month").toDate();
    case "NEXT":
      return moment(date).add(1, "month").toDate();
    default:
      return date;
  }
};
