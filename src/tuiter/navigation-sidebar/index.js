import React from "react";
import {Link, useLocation} from "react-router-dom"
import { BsTwitter } from "react-icons/bs";
import { AiFillHome, AiOutlineLogin } from "react-icons/ai";
import { FaHashtag, FaUser } from "react-icons/fa";
import { IoIosNotifications, } from "react-icons/io"
import { BsFillEnvelopeFill, BsFillBookmarkFill, BsListStars } from "react-icons/bs";
import { MdAppRegistration } from "react-icons/md";
import { MdMore } from "react-icons/md";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {

    const { currentUser } = useSelector(state => state.user);
    const {pathname} = useLocation();

     const links = [
                        {"name": "home", "icon": <AiFillHome/>, displayWhenLogin: currentUser},
                        {"name": "explore", "icon": <FaHashtag/>, displayWhenLogin: true},
                        {"name": "notifications", "icon": <IoIosNotifications/>, displayWhenLogin: currentUser},
                        {"name": "messages", "icon": <BsFillEnvelopeFill/>, displayWhenLogin: currentUser},
                        {"name": "bookmarks", "icon": <BsFillBookmarkFill/>, displayWhenLogin: currentUser},
                        {"name": "lists", "icon": <BsListStars/>, displayWhenLogin: currentUser},
                        {"name": "profile", "icon": <FaUser/>, displayWhenLogin: currentUser},
                        {"name": "more", "icon": <MdMore/>, displayWhenLogin: currentUser},
                        {"name": "register", "icon": <MdAppRegistration/>, displayWhenLogin: !currentUser},
                        {"name": "login", "icon": <AiOutlineLogin/>, displayWhenLogin: !currentUser},
                    ]
    
        
    const [ignore, tuiter, active] = pathname.split("/");
    
    return (
        <div className="list-group">
            <div className="list-group-item"><BsTwitter/></div>
            {links.map((link, index)=> {
                    return(
                        <div>
                        { link.displayWhenLogin &&
                        (<Link key={index} to={`/tuiter/${link.name}`} 
                            className={`list-group-item text-capitalize
                                        ${active === link.name ? "active" : ""}`}>
                            <span className="pe-2 d-inline">{link.icon}</span> 
                            <span className="d-none d-xl-inline">{link.name}</span>
                        </Link>) 
                        }
                        </div>
                    );    
                })
            }
            {/* {!currentUser && <Link to="/tuiter/login" className="list-group-item text-capitalize"> Login </Link>}
            {!currentUser && <Link to="/tuiter/register" className="list-group-item text-capitalize"> Register </Link>}
            { currentUser && <Link to="/tuiter/profile" className="list-group-item"> Profile </Link>} */}
        </div>
    );
};
    
    export default NavigationSidebar;