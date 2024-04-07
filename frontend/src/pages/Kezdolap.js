import React, { useEffect } from "react";
import useAuthContext from "../contexts/AuthContext";

export default function Kezdolap() {
    const { user, getUser } = useAuthContext();
    /*useEffect(() => {
        console.log(user)
        if (!user) {
            getUser();
        }
    }, [user, getUser]
    );*/

    /*if (!user) {
        return <div>Loading...</div>;
    }*/

    return (
        <div>
            <h1>Kezdőlap</h1>
            <p>Bejelentkezett felhasználó: {user?.name}</p>
        </div>
    );
}