import Homepage from './Homepage'
import Topics from './Topics'
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </Router>
  );
}

export default App;
