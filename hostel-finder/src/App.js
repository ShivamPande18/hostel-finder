import RegistrationMain from "./Pages/Registration/RegistrationMain";
import Main from "./Pages/Main/Main";
import Details from "./Pages/ReadMore/Details";
import AddMain from "./Pages/Add/AddMain"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationMain />} />
          <Route path="/main" element={<Main />} />
          <Route path="/details" element={<Details />} />
          <Route path="/add" element={<AddMain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;