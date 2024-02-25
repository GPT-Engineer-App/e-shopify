import NavigationBar from "./components/NavigationBar.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import VirtualTryOn from "./pages/VirtualTryOn.jsx";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/virtual-try-on" element={<VirtualTryOn />} />
      </Routes>
    </Router>
  );
}

export default App;
