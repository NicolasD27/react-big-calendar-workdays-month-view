import { Event } from "../../../../../../types/calendar/types";

export const EventComponent = ({ event }: { event: Event }) => (
  <div className="custom-event">
    <img
      src={event.user.avatar}
      alt={event.user.name}
      className="event-avatar"
    />
    <span className="kumbh-medium">{event.user.name}</span>
  </div>
);
