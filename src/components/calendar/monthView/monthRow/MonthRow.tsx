import { Event } from "../../../../types/types";
import { MonthRowBackground } from "./MonthRowBackground";
import { MonthRowContent } from "./MonthRowContent";

export const MonthRow = ({
  date,
  events,
  week,
}: {
  date: Date;
  events: Event[];
  week: Date[];
}) => {
  return (
    <div className="rbc-month-row">
      <MonthRowBackground week={week} date={date} />
      <MonthRowContent week={week} events={events} />
    </div>
  );
};
