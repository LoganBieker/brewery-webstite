import DropDownContainer from '../DropDownContainer'
import React, {useEffect, useState} from 'react';


export default function Beer() {


    [data, setData] = useState(null); 
    [loading, setLoading] = useState(false); 

    useEffect(()=>{
        fetch("http://localhost:3001/data")
            .then(response => response.json)
            .then(data => {
                setLoading(true);
                setData(data); 
                console.log(data); 
            })
            .catch(error => {
                console.error('Error fetching data', error);
                setLoading(false); 
            })
    },[]);


    return (
        <>
            <DropDownContainer></DropDownContainer>
            <div>Beer</div>
        </>
    );
}