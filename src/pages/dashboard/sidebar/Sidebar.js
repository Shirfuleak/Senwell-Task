
import { useNavigate } from 'react-router';
// import  myicon from '../../../assets/img/myicon.jpg'
import "./Sidebar.css"

const Sidebar=()=>{
    const navigate=useNavigate();
    const logoutHandler=()=>{
        localStorage.removeItem("token");
        navigate('/');
    }
    return(
    <>
    
    <div className="sidebar rounded pt-3 bg-dark text-white">
        
       <div>
 
        
        <ul>
            <li onClick={()=>{navigate('/home')}}>Home</li>
            <li onClick={()=>{navigate('/contact')}}>Contact</li>
            <li onClick={()=>{navigate('/call')}}> Call</li>
            <li onClick={()=>{navigate('/address')}}>Address</li>
            <li onClick={logoutHandler}>LogOut</li>
        </ul>
       </div>
    </div>
 
    </>
    );
}

export default Sidebar; 