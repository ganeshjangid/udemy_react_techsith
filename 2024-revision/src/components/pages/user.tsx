import React from 'react';
import { useParams,Navigate } from 'react-router-dom'
function User({ loggedIn }: any) {
    const routerParams = useParams();
    return (
        (loggedIn) ? <h1>
            User Page : {routerParams.name}
        </h1> : <h1>
            <Navigate to="/" ></Navigate>
        </h1>

    )



}
export default User;