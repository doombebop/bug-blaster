import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import TicketForm from "./Component/TicketForm";

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <h1>Bug Blaster</h1>
      <TicketForm></TicketForm>
    </div>
  );
}

export default App;
