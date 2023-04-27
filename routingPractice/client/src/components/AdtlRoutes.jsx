import React from 'react';
import { useParams } from "react-router-dom";

const AdtlRoutes = (props) => {

    const {num, color, backgrd} = useParams();
    return (
        <div>
            {
                isNaN(num)?
                <h1 style ={
                    color ? {color: color, backgroundColor: backgrd} :null
                }>
                    This is a word: {num}
                </h1>
                :
                <h1>This is a number: {num}</h1>
            }

        </div>


    )
}

export default AdtlRoutes