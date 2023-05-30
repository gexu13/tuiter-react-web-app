import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import {Routes, Route, Navigate} from "react-router"
import HomeScreen from "./home-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowListItem from "./who-to-follow-list.js/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list.js";
import ExploreScreen from "./explore-screen/index";

function Tuiter() {
    return (
        <div>
            <Nav/>
            <div className="row">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar />
                </div>
                <div className="col-10 col-lg-7 ">
                    <Routes>
                        <Route path="/" element={<Navigate to="/tuiter/explore"/>}/>
                        <Route path="/home" element={<HomeScreen/>}/>
                        <Route path="/explore" element={<ExploreScreen/>}/>
                        <Route path="/bookmarks" element={<BookmarksScreen/>}/>
                        <Route path="/profile" element={<ProfileScreen/>}/>
                    </Routes>
                </div>
                <div className="d-none d-lg-block col-4 col-xl-3 ">
                    <WhoToFollowList/>
                </div>
                
            </div>
            
        </div>
    );
}
export default Tuiter