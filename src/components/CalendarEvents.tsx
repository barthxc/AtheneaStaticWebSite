import { useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.locale("es");
dayjs.extend(customParseFormat);

const CalendarEvents = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const parseDate = (dateStr) => dayjs(dateStr, "DD-MM-YYYYTHH:mm:ss").toDate();
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: parseDate("16-06-2024T08:00:00"),
      end: parseDate("16-06-2024T10:00:00"),
      title: "Cierre de Athenea",
    },
  ];

  return (
    <div>
      <button
        className="hover:text-gray-700 transform hover:scale-105 transition duration-300 calendar-button"
        onClick={() => setShowCalendar(!showCalendar)}>
        <p className="hidden md:block">Calendario</p>
        <svg
          className="block md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6zm7 6q-.425 0-.712-.288T11 13t.288-.712T12 12t.713.288T13 13t-.288.713T12 14m-4 0q-.425 0-.712-.288T7 13t.288-.712T8 12t.713.288T9 13t-.288.713T8 14m8 0q-.425 0-.712-.288T15 13t.288-.712T16 12t.713.288T17 13t-.288.713T16 14m-4 4q-.425 0-.712-.288T11 17t.288-.712T12 16t.713.288T13 17t-.288.713T12 18m-4 0q-.425 0-.712-.288T7 17t.288-.712T8 16t.713.288T9 17t-.288.713T8 18m8 0q-.425 0-.712-.288T15 17t.288-.712T16 16t.713.288T17 17t-.288.713T16 18"
          />
        </svg>
      </button>
      {showCalendar && (
        <div className="fixed inset-0 flex items-center justify-center p-2 bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-5 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
            <div className="flex justify-end">
              <button
                className="p-2 text-gray-600 hover:bg-gray-300 text-2xl rounded-full focus:outline-none"
                onClick={() => setShowCalendar(false)}>
                &times;
              </button>
            </div>
            <Calendar
              localizer={localizer}
              events={events}
              views={["month", "agenda"]}
              style={{ height: "80vh" }}
              formats={{
                monthHeaderFormat: (date) => {
                  return dayjs(date).format("DD - MMMM - YY");
                },
              }}
              messages={{
                allDay: "Todo el día",
                previous: "Anterior",
                next: "Siguiente",
                today: "Hoy",
                month: "Mes",
                week: "Semana",
                day: "Día",
                agenda: "Agenda",
                date: "Fecha",
                time: "Hora",
                event: "Evento",
                noEventsInRange: "Sin eventos",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarEvents;
