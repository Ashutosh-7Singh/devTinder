import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user)
  const distach = useDispatch()
  // console.log("user", user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, {
        withCredentials: true
      });
      distach(removeUser())
      navigate("/login")
    } catch (error) {
//  Error message  may be redirect to ERROR page
    }
  }

  // useEffect((
  //   handleLogout()
  // ),[])

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/"
          className="btn btn-ghost text-xl">devTinder
        </Link>
      </div>
      {user &&
        <div className="flex items-center gap-2">
          <div className="form-control">Welcome,{user.firstName}</div>
          <div className="dropdown dropdown-end mx-5 flex ">
            <div tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="user photo"
                  src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile"
                  className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link to='/connections'>Connections</Link></li>
              <li><Link to='/requests'>Request</Link></li>

              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
        </div>}
    </div>
  )
}

export default NavBar;