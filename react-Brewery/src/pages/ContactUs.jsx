import DropDownContainer from '@/Components/DropDownMenu/DropDownContainer'
import InputField from '@/Components/InputField/InputField';
import '@/styles/ContactUs.css'
import React, { useEffect, useState } from 'react';

export default function ContactUs() {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submit button was pressed");
        const currentDate = new Date(); 
        const formData = {
            currentDate,
            firstName,
            lastName,
            email,
            message,
        }

        setMessage('');
        setFirstName('');
        setLastName('');
        setEmail('');

        console.log(formData)
        sendData(formData);
        window.alert("Your message has been recived. Thank You!");
    }

    const sendData = (data) => {
        fetch('http://localhost:3001/api/ContactUs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.text())
            .then(text => console.log(text))
            .catch(error => console.log('Error:', error));
    }


    const updateFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const updateLastName = (event) => {
        setLastName(event.target.value);
    }

    const updateEmail = (event) => {
        setEmail(event.target.value);
    }

    const updateMessage = (event) => {
        setMessage(event.target.value);
    }

    return (
        <>
            <DropDownContainer></DropDownContainer>
            <form onSubmit={handleSubmit}>
                <div className='contact-us-container'>
                    <div className='contact-us-name-container'>
                        <InputField onChange={updateFirstName} value={firstName} className='contact-us-name' title='First Name'></InputField>
                        <InputField onChange={updateLastName} value={lastName} className='contact-us-name' title='Last Name'></InputField>
                    </div>
                    <InputField onChange={updateEmail} value={email} className='contact-us-email' title='Email'></InputField>
                    <div className='message-container'>
                        <p className='message-text'>Message</p>
                        <textarea required onChange={updateMessage} value={message} className='message-text-area'></textarea>
                    </div>
                    <input className='contact-us-submit' type='submit' value='Submit'></input>
                </div>
            </form>
        </>
    );

}