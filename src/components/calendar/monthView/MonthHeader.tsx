import moment from "moment";

export const MonthHeader = () => {
  const weekDays = moment.weekdays().slice(1, 6);
  return (
    <div className="rbc-month-header">
      {weekDays.map((day, index) => (
        <div key={index} className="rbc-header poppins-medium">
          {day}
        </div>
      ))}
    </div>
  );
};
