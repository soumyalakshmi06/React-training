import './App.css';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Dashboard from './components/Dashboard';

function App() {
  return (
   <div>  
              <Router>  
                <Routes>   
                 <Route exact path="/" element={<RegistrationForm />} /> 
                 <Route exact path="/login" element={<LoginForm />} />  
                 <Route exact path="/dashboard" element={<Dashboard />} />  
                 
                </Routes>    
              </Router>  
   </div> 
  );
}
export default App;