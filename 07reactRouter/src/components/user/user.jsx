import React from "react";
import { useParams } from "react-router-dom";
function User(){
    const {userid} = useParams(); 
    return(
             <div className="bg-gray-600 text-while text-3xl "> User: {userid}</div>//we have access of the element 
    )
}

export default User; 