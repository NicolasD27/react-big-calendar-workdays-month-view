import { Day } from "./Day";

export const MonthRowBackground = ({
  week,
  date,
}: {
  week: Date[];
  date: Date;
}) => {
  return (
    <div className="rbc-row-bg">
      {week.map((day, dayIndex) => (
        <Day key={dayIndex} day={day} date={date} />
      ))}
    </div>
  );
};
