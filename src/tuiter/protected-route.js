// import React, {useEffect, useState} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router";
// import { profileThunk } from "./services/auth-thunks";

// function ProtectedRoute ({children}) {
//     const [loading, setLoading] = useState(true);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const loadProfile = async () => {
//             const { payload } = await dispatch(profileThunk());
//             if (!payload) {
//                 navigate('/tuiter/login');
//             }
//             setLoading(false);
//         };
//         loadProfile();
//     }, []);
    
//     return (
//         <div className={`${loading ? "d-none" : ""}`}>
//             {children}
//         </div>
//     );
// }

// export default ProtectedRoute;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk } from "./services/auth-thunks";
function ProtectedRoute({ children }) {

    const { currentUser } = useSelector(state => state.user);

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {  

        if(!currentUser) {
            navigate('/tuiter/login');
        } else {
            setLoading(false);
        }
    }, []);

    // useEffect(() => {
    //     const load = async () => {
    //     const { payload } = await dispatch(profileThunk());
    //     if (!payload) {
    //         navigate("/tuiter/login");
    //     }
    //     setLoading(false);
    //     };
    //     load();
    // }, []);
    return(
        !loading &&  <div>
           {children}
         </div>);
}
export default ProtectedRoute;


