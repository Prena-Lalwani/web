import React from "react";
import"./users.css";
import{ User } from "./Users";

export default function Users(){

    const users={
        
    };
    return(
        <>
            <div id="container">
                <h1>these are{users.length}users</h1>
                {users.map((items)=>(
                    <user email={items.email}
                    username={items.username}/>
                ))}
            </div>
        </>
    )
}