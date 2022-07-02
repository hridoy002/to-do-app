import { Route, Routes } from "react-router-dom";
import Calender from "./Component/Calender/Calender";
import Footer from "./Component/Shared/Footer";
import Header from "./Component/Shared/Header";
import TaskDone from "./Component/TaskDone/TaskDone";
import ToDo from "./Component/ToDo/ToDo";


function App() {
  return (
    <div className="App ">
      <Header />
      <Routes >
        <Route path="/calendar" element={<Calender />}/>
        <Route path="/" element={<ToDo />}/>
        <Route path="/taskDone" element={<TaskDone />}/>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
