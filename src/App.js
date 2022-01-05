
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import Posts from './pages/Posts';
function App() {
  return (
    <div className="App">
    <Router>
       <Navbar />
      
       <Routes>
       <Route path="/" element={<Home />} />
      <Route exact path="about" element={<About />} />
      <Route path="user" element={<User/>} />
      <Route path="Posts" element={<Posts/>} />

       </Routes>
    </Router>
    
    </div>
  );
}

export default App;
