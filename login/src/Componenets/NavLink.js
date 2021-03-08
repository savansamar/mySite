import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, signout } from '../Form/FormBackend';
function NavLink({history}) {

    const currentTab = (history, path) => {
        if (history.location.pathname === path) {
          return { color: "#5DA3FA" };
        } else {
          return { color: "#FFFFFF" };
        }
      };

      const logOut=(event)=>{
        event.preventDefault();
        signout(()=>{
          history.push("/About")
        }).then(data=>{
         
           console.log(data)
          
        })
      }
    return (
       <>
        <Link style={currentTab(history, "/")} className="p-4  "  to="/"> Home</Link>
        <Link  style={currentTab(history, "/Menu")} className="p-4  "  to="/Menu"> Menu</Link>
        <Link style={currentTab(history, "/About")} className="p-4  "  to="/About"> About</Link>
        {isAuthenticated()&&isAuthenticated().user.role==1&&(
        <Link style={currentTab(history, "/Admin/Dashboard")} className="p-4 "  to="/Admin/Dashboard">Admin</Link>
          
        )}

        {isAuthenticated()&&(
        <Link style={currentTab(history, "/Contact")} className="p-4 "  to="/Contact">Contact</Link>

        )}

            {!isAuthenticated()&&(
                <>
                 <Link style={currentTab(history, "/")} className="p-4 text-white "  to="/Signup">Signup</Link>
                 <Link style={currentTab(history, "/")} className="p-4 text-white  "  to="/Login">Login</Link>
       
                </>
            )} 

            {
              isAuthenticated()&&(
                <span style={currentTab(history, "/")} type="button" className="text-yellow-400 p-4" onClick={logOut} >
                  Logout
                  </span>
              )
            }   
           
                
           <Link style={currentTab(history, "/Cart")} className="p-4  "  to="/Cart">Cart</Link>

        
    </>
    )
}

export default withRouter(NavLink)
