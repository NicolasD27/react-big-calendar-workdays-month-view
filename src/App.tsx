import { Calendar } from "react-big-calendar";
import { localizer } from "./utils/calendar";
import { Toolbar } from "./components/calendar/Toolbar";
import { MonthView } from "./components/calendar/monthView/MonthView";
import { Event } from "./types/types";
import "./calendar.scss";

const events: Event[] = [
  {
    start: new Date("9/10/2024"),
    end: new Date("10/17/2024"),
    user: {
      name: "Joseph",
      avatar: "https://i.pravatar.cc/300",
    },
  },
  {
    start: new Date("10/10/2024"),
    end: new Date("10/14/2024"),
    user: {
      name: "Max",
      avatar: "https://i.pravatar.cc/300",
    },
  },
  {
    start: new Date("10/16/2024"),
    end: new Date("10/16/2024"),
    user: {
      name: "Max",
      avatar: "https://i.pravatar.cc/300",
    },
  },
  {
    start: new Date("10/18/2024"),
    end: new Date("11/1/2024"),
    user: {
      name: "Max",
      avatar: "https://i.pravatar.cc/300",
    },
  },
  {
    start: new Date("10/10/2024"),
    end: new Date("10/16/2024"),
    user: {
      name: "Damien",
      avatar: "https://i.pravatar.cc/300",
    },
  },
];

function App() {
  return (
    <div className="p-8">
      <Calendar
        events={events}
        localizer={localizer}
        components={{
          toolbar: Toolbar,
        }}
        views={{
          month: MonthView,
        }}
        style={{ height: "auto" }}
      />
    </div>
  );
}

export default App;
