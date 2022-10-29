import  myicon from '../../../assets/img/myicon.jpg'
import './Header.css'
const Header = () => {
  return (
    <div>
      {/* <div className="dashboard">
           <h3>User Dashboard</h3>
           </div> */}
      {/* <nav className="navbar navbar-expand-lg"> */}
      <nav className="navbar navbar-expand-lg bg-info bg-secondary">
     <img src={myicon} alt="icon" className=''></img>
        <div className="p-4 mx-auto"> 
       
           <h1 className=""> User Dashboard</h1>
        </div>
      </nav>
    </div>
  );
};

export default Header;
