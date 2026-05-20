import { Routes, Route } from "react-router-dom";
import Footer from '../../Components/Dashboard/Footer/Footer';
import Navbar from "../../Components/Dashboard/Navbar/Navbar";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import StatusPage from "./StatusPages";
import Users from "./Users";
import Projects from "./Projects";
import Developers from './Developers'
import TableDashboard from "../../Components/UI/TableDashboard/TableDashboard";
import FormDashboard from "../../Components/UI/FormDashboard/FormDashboard";
import { useState } from "react";
function Dashboard() {
  const [isTyping,setIsTyping]=useState(false);
  return (
    <>
      <Navbar adminName="Mohamed" />
      <div className="d-flex">
        <Sidebar isTyping={isTyping} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<StatusPage />} />
            <Route path="/users" element={<Users />} >
              <Route index element={<TableDashboard header='Users' addbtn="User" />} />
              <Route path="add" element={<FormDashboard  setIsTyping={setIsTyping}/>} />

            </Route>

            {/* Projects */}
            <Route path="/projects" element={<Projects />} >
              <Route index element={<TableDashboard header='Projects' addbtn="Projects" />} />
              <Route path="add" element={<FormDashboard />} />

            </Route>
            {/* Developers */}
            <Route path="/developers" element={<Developers />} >
            <Route index element={<TableDashboard header='Developers' addbtn="Developers"/>}/>
            <Route path="add" element={<FormDashboard/> }/>
            
            </Route>

          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
