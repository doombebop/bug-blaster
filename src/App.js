import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./Component/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./Component/TicketList";
import { sortTickets } from "./utilities/sortingUtilities";

function App() {
  const initialState = {
    tickets: [],
    editingTicket: null,
    sortPreference: "high to low",
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  console.log(state);

  const sortedTickets = sortTickets(state.tickets, state.sortPreference);

  return (
    <div className="App">
      <div className="container"></div>
      <h1>Bug Blaster</h1>
      <TicketForm
        dispatch={dispatch}
        editingTicket={state.editingTicket}
      ></TicketForm>

      {state.tickets.length > 0 && (
        <div className="results">
          <h2>All Tickets</h2>

          <select
            value={state.sortedPreference}
            onChange={(e) =>
              dispatch({ type: "SET_SORTING", payload: e.target.value })
            }
          >
            <option value="high to low">High to Low</option>
            <option value="low to high">Low to High</option>
          </select>
          <TicketList tickets={sortedTickets} dispatch={dispatch}></TicketList>
        </div>
      )}
    </div>
  );
}

export default App;
