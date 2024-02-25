import NavigationBar from "./components/NavigationBar.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import VirtualTryOn from "./pages/VirtualTryOn.jsx";
import CreateAvatar from "./pages/CreateAvatar.jsx";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/virtual-try-on" element={<VirtualTryOn />} />
        <Route path="/create-avatar" element={<CreateAvatar />} />
      </Routes>
    </Router>
  );
}

export default App;
