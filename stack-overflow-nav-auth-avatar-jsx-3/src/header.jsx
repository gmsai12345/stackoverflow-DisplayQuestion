import React from "react";
import Navbar from "react-bootstrap/Navbar";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InboxIcon from "@mui/icons-material/Inbox";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";
import header from "./header.css";
import { Link } from "react-router-dom";
import Avatar from '../Avatar/Avatar';
import Button from  '../Button/Button';

var User = null;
export default function Header1() {
  return (
    <Navbar className="main-nav">
      <div className="navbar">
        <span className="nav-item nav-logo">
          <img
            src="https://raw.githubusercontent.com/Manoj-Athi/Stack-overflow/main/client/src/assets/logo.png"
            alt="logo"
          />
        </span>
        <span className="nav-item nav-btn">About</span>
        <span className="nav-item nav-btn">Products</span>
        <span className="nav-item nav-btn">For Teams</span>
        <form>
        <input type="text" placeholder="Search..." />
        <img
          src={SearchRoundedIcon}
          alt="search"
          width="18"
          className="search-icon"
        />
        </form>
        { User === null ? 
                    <Link to='/Auth' className='nav-item nav-links'>Log in</Link> : 
                    <>
                        <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to = '/User' {color:"white", textDecoration:'none'}>M</Link></Avatar>
                        <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
                  
                  </>}
        <button className="b1">
          <EmojiEventsIcon className="header1" fontSize="medium" />
        </button>
        <button className="b2">
          <InboxIcon className="header__logoImage" fontSize="medium" />
        </button>
        <button className="b3">
          <HelpIcon className="header__logoImage" fontSize="medium" />
        </button>
        <button className="b4">
          <MenuIcon className="header__logoImage" fontSize="medium" />
        </button>
        <button type="submit">Login</button>
      </div>
    </Navbar>
  );
}

// user ==  null to ckec if anyone has logged in
// if not sending to authentication page