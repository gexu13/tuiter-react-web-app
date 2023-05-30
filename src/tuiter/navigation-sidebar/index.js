import React from "react";
import {Link, useLocation} from "react-router-dom"
import { BsTwitter } from "react-icons/bs";

// const NavigationSidebar = () => {
//     const {pathname} = useLocation();

//     const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];

//     const [ignore, tuiter, active] = pathname.split("/");

//     return (
//         <div className="list-group">
//             <div className="list-group-item"><BsTwitter/></div>
//             {links.map((link, index)=> {
//                     return(
                            
//                         <Link key={index} to={`/tuiter/${link}`} 
//                             className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
//                             {link}
//                         </Link>
                        
//                     );    
//                 })
//             }
//         </div>
//     );
// };

// export default NavigationSidebar;


import { AiFillHome } from "react-icons/ai";
import { FaHashtag, FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io"
import { BsFillEnvelopeFill, BsFillBookmarkFill, BsListStars } from "react-icons/bs";
import { MdMore } from "react-icons/md";

    const NavigationSidebar = () => {
        const {pathname} = useLocation();

        const links = [
                        {"name": "home", "icon": <AiFillHome/>},
                        {"name": "explore", "icon": <FaHashtag/>},
                        {"name": "notifications", "icon": <IoIosNotifications/>},
                        {"name": "messages", "icon": <BsFillEnvelopeFill/>},
                        {"name": "bookmarks", "icon": <BsFillBookmarkFill/>},
                        {"name": "lists", "icon": <BsListStars/>},
                        {"name": "profile", "icon": <FaUser/>},
                        {"name": "more", "icon": <MdMore/>}
                    ]
    
        
        const [ignore, tuiter, active] = pathname.split("/");
    
        return (
            <div className="list-group">
                <div className="list-group-item"><BsTwitter/></div>
                {links.map((link, index)=> {
                        return(
                            <Link key={index} to={`/tuiter/${link.name}`} 
                                className={`list-group-item text-capitalize
                                            ${active === link.name ? "active" : ""}`}>
                                <span className="pe-2 d-inline">{link.icon}</span> 
                                <span className="d-none d-xl-inline">{link.name}</span>
                            </Link> 
                        );    
                    })
                }
            </div>
        );
    };
    
    export default NavigationSidebar;