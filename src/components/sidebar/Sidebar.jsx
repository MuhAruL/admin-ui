import "./sidebar.scss"
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
  <div className="top">
    <Link to="/">
      <span className="logo">Store</span>
    </Link>
  </div>
  <hr />
  <div className="center">
    <ul>
      <p className="title">MAIN</p>
      <Link to="/">
      <li>
        <DashboardIcon className="icon"/>
        <span>Dashboard</span>
      </li>
      </Link>
      <p className="title">LIST</p>
      <Link to="/users">
        <li>
        <PersonIcon className="icon"/>
          <span>Users</span>
        </li>
      </Link>
      <Link to="/products">
        <li>
        <PaymentIcon className="icon"/>
          <span>Products</span>
        </li>
      </Link>
      <li>
      <StoreIcon className="icon"/>
        <span>Orders</span>
      </li>
      <li>
      <Link to="/categories">
      <CategoryIcon className="icon"/>
        <span>Categories</span>
        </Link>
      </li>
      <p className="title">USER</p>
      <li>
      <AccountCircleOutlinedIcon className="icon"/>
        <span>Profile</span>
      </li>
      <li>
      <LogoutOutlinedIcon className="icon"/>
        <span>Logout</span>
      </li>
    </ul>
  </div>
  <div className="bottom">
    <div className="colorOption" onClick={() => dispatch({ type : "LIGHT" })}></div>
    <div className="colorOption" onClick={() => dispatch({ type : "DARK" })}></div>
  </div>
</div>
  )
}

export default Sidebar