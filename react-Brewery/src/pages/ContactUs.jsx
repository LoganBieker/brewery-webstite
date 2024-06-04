import DropDownContainer from '../DropDownContainer'
import React, {useEffect, useState} from 'react';

export default function ContactUs(){
    const [data, setData] = useState(null);

    useEffect(()=> {
        fetch('http://localhost:3001/api/data')
            .then(responce => responce.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);



    return (
        <div>
            <DropDownContainer></DropDownContainer>
            <h1>Data from backend</h1>
            <p>{data ? data.message : "Loading data..."}</p>
        </div>
    );
}