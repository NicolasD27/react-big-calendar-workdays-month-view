import { ToolbarProps } from "react-big-calendar";
import { Event } from "../../../../types/calendar/types";

export const Toolbar = (props: ToolbarProps<Event, object>) => {
  const { label, onNavigate } = props;

  return (
    <div className="rbc-toolbar">
      <img
        src="/arrow-left.svg"
        alt="Previous"
        className="cursor-pointer"
        onClick={() => onNavigate("PREV")}
      />
      <span className="rbc-toolbar-label kumbh-medium ">{label}</span>
      <img
        src="/arrow-right.svg"
        alt="Next"
        className="cursor-pointer"
        onClick={() => onNavigate("NEXT")}
      />
    </div>
  );
};
