import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Event, Segment } from "../types/types";

export const localizer = momentLocalizer(moment);

export const assembleWeekEventsByName = (weekEvents: Event[]) => {
  if (weekEvents.length > 0) {
    const weekEventsWithSameName = weekEvents.reduce(
      (
        acc: {
          [key: string]: Event[];
        },
        event: Event
      ) => {
        if (!acc[event.user.name]) {
          acc[event.user.name] = [];
        }
        acc[event.user.name].push(event);
        return acc;
      },
      {}
    );
    const weekEventsWithSameNameArray = Object.values(weekEventsWithSameName);
    return weekEventsWithSameNameArray;
  } else return weekEvents.map((event) => [event]);
};

export const computeWeeks = (date: Date) => {
  const startOfMonth = moment(date).startOf("month").toDate();
  const endOfMonth = moment(date).endOf("month").toDate();

  const weeks = [];
  let currentWeek = [];

  let day = computeFirstWorkingDay(startOfMonth);

  while (day <= endOfMonth || currentWeek.length > 0) {
    const dayOfWeek = day.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      currentWeek.push(day);
    }

    day = new Date(day);
    day.setDate(day.getDate() + 1);

    if (currentWeek.length === 5) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  return weeks;
};

export const computeFirstWorkingDay = (date: Date) => {
  const increment = date.getDay() === 0 || date.getDay() === 6 ? 1 : -1;
  while (date.getDay() !== 1) {
    date.setDate(date.getDate() + increment);
  }
  return date;
};
export const computeSegments = (week: Date[], events: Event[]) => {
  const sortedEvents = events.sort((a, b) => {
    return new Date(a.start).getTime() - new Date(b.start).getTime();
  });

  const segments: Segment[] = [];

  sortedEvents.forEach((event, index) => {
    const prevEvent = sortedEvents[index - 1];
    const eventStart = new Date(event.start);
    const eventEnd = new Date(event.end);

    if (index > 0 && prevEvent) {
      const prevEnd = new Date(prevEvent.end);
      const gapStart = new Date(prevEnd);
      gapStart.setDate(gapStart.getDate() + 1);

      if (gapStart < eventStart) {
        segments.push({
          start: gapStart,
          end: eventStart,
        });
      }
    }

    segments.push({
      start: eventStart < week[0] ? week[0] : eventStart,
      end: eventEnd > week[4] ? week[4] : eventEnd,
      event,
    });
  });

  if (sortedEvents.length && new Date(segments[0].start) > week[0]) {
    segments.unshift({
      start: week[0],
      end: segments[0].start,
    });
  }

  if (
    sortedEvents.length &&
    new Date(segments[segments.length - 1].end) < week[4]
  ) {
    segments.push({
      start: segments[segments.length - 1].end,
      end: week[4],
    });
  }

  return segments;
};
