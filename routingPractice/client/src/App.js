import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import AdtlRoutes from './components/AdtlRoutes';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:num" element={<AdtlRoutes />} />
        <Route path="/:num/:color/:backgrd" element={<AdtlRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
