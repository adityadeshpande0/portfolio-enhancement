import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../screens/Home/Home";
import TopNavbar from "../components/topnavbar/TopNavbar";
import Projects from "../screens/Projects/Projects";


const AppRouter: React.FC = () => {
  return (
    <Router>
      <TopNavbar/>
      <Routes>
       <Route path="/" Component={Home}/>
       <Route path='/projects' Component={Projects}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
