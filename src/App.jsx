import NavbarComponent from "./components/NavbarComponent.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {


  return (
    <>
        <BrowserRouter>
            <NavbarComponent/>
        </BrowserRouter>

    </>
  )
}

export default App
