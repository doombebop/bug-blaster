import react from "react";
import TicketItem from "./TicketItem";

export default function TicketList({ tickets, dispatch }) {
  return (
    <div className="ticket-list container">
      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          dispatch={dispatch}
          ticket={ticket}
        ></TicketItem>
      ))}
    </div>
  );
}
