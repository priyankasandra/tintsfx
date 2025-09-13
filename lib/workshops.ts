export type WorkshopEvent = {
  id: string;
  title: "Beginner Workshop" | "Pro-Intensive Workshop" | "Live Zoom Workshop";
  city?: string;
  format: "In-person" | "Live Zoom";
  level: "Beginner" | "Pro";
  start: string; // ISO date string
  end: string;   // ISO date string
  priceINR: number;
  seatsLeft: number;
  slug: string;
};

export const workshopEvents: WorkshopEvent[] = [
  {
    id: "pro-intensive-oct-2025",
    title: "Pro-Intensive Workshop",
    city: "Hyderabad",
    format: "In-person",
    level: "Pro",
    start: "2025-10-18T10:00:00+05:30",
    end: "2025-10-20T17:00:00+05:30",
    priceINR: 12000,
    seatsLeft: 8,
    slug: "/workshops/pro-intensive"
  },
  {
    id: "live-zoom-nov-2025",
    title: "Live Zoom Workshop",
    format: "Live Zoom",
    level: "Beginner",
    start: "2025-11-08T14:00:00+05:30",
    end: "2025-11-08T18:00:00+05:30",
    priceINR: 5000,
    seatsLeft: 14,
    slug: "/workshops/live-zoom"
  }
];

export function getEventsInMonth(year: number, month: number): WorkshopEvent[] {
  return workshopEvents.filter(event => {
    const eventDate = new Date(event.start);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month;
  });
}

export function getUpcomingEvents(): WorkshopEvent[] {
  const now = new Date();
  return workshopEvents
    .filter(event => new Date(event.start) > now)
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
}

export function getNextUpcomingEvent(): WorkshopEvent | null {
  const upcoming = getUpcomingEvents();
  return upcoming.length > 0 ? upcoming[0] : null;
}

