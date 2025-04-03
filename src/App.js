import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SelectSkipPage from "./pages/SelectSkipPage";
function App() {
  return (    
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
      <Router>
        <Routes>
          <Route exact path="/" element={<SelectSkipPage />} />    
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
