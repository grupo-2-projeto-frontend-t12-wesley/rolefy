import "./App.css";
import Modal from "react-modal";
import ModalFav from "./components/ModalInfo/ModalInfo";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <ModalFav />
    </div>
  );
}

export default App;
