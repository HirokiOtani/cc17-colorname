import logo from "./logo.svg";
import "./App.css";
import { ColorForm } from "./ColorForm";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <ColorForm />
      </body>
      <script src="/__/firebase/init.js"></script>
    </div>
  );
}

export default App;
