import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import NeonSentinelPitchDeck from "./pages/NeonSentinelPitchDeck";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/neon-sentinel" element={<NeonSentinelPitchDeck />} />
      </Routes>
    </Router>
  );
};

export default App;
