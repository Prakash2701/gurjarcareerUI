import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'  
import './App.css';
import LinksPage from './components/LinksPage';
import StudentForms from './components/StudentForms';
import WinTable from './components/WinTable';
function App() {
  return (
   <>
   <Router>  
    <div>  
      
      <Routes>
      <Route exact path="/student" element={<LinksPage/>} />  
       <Route exact path="/StudentForms" element={<StudentForms/>} />  
       <Route exact path='/' element={<WinTable/>}/>
      {/* <Route path="/contact" component={Contact} />   */}
      </Routes>
      
    </div>  
  </Router>
   </>
  );
}

export default App;
