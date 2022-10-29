import Footer from "./footer/Footer";
import Header from "./header/Header";

import "./Dashboard.css"
import Sidebar from "./sidebar/Sidebar";
const Dashboard=(props)=>{
    return(
    <>
    <div className=" r">
   
   <div>
    <Header></Header>
    <div className="d-flex menu">
    <Sidebar/>
    <div>{props.children}</div>
    </div>
    <Footer></Footer>
    </div>
    </div>
    </>
    );
}

export default Dashboard; 