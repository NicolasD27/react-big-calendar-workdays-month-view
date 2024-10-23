import moment from "moment";

export const Day = ({ day, date }: { day: Date; date: Date }) => {
  const isToday = moment(day).isSame(moment().startOf("day"));
  const isOutsideMonth =
    moment(day).isBefore(moment(date).startOf("month")) ||
    moment(day).isAfter(moment(date).endOf("month"));

  const dayClassName = `rbc-day-bg poppins-medium text-[10px] ${
    isToday ? "bg-blue-50 text-blue-500" : ""
  } ${isOutsideMonth ? "text-gray-200" : ""}`;

  return (
    <div key={day.toISOString()} className={dayClassName}>
      {day.getDate().toString().padStart(2, "0")}
    </div>
  );
};
