import logo from './logo.svg';
import './App.css';
import Login from './component/Login';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Patients from './component/Patients';
import PatientDetais from './component/PatientDetais';
import Header from './component/Header'


function App() {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Login />}>
          
        </Route>
        <Route path="/patients" element={<Patients />}>
          
        </Route>
        <Route path="/details/:id" element={<PatientDetais />}>
          
        </Route>
      </Routes>

    </Router>

  );
}

export default App;
