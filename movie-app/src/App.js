
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        {/* <Route path="/movies/:id" component={MovieDetails} /> */}
      </Routes>
    </Router>
    <ToastContainer/>
    
    </div>
  );
}

export default App;
