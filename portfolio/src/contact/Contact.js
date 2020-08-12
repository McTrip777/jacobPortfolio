import React, { useState } from 'react';
import './contact.scss'

function Contact(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');


    const updateName = (name) => {
        const value = name.target.value
        setName(value)
    }
    const updateEmail = (email) => {
        const value = email.target.value
        setEmail(value)
    }
    const updateMessage = (message) => {
        const value = message.target.value
        setMessage(value)
    }
    const updateSubject = (subject) => {
        const value = subject.target.value
        setSubject(value)
    }

    return (
        <form method="post" action="https://formspree.io/xvoglaop">
            <header className="contactHeader">
                <h2>Interested in working together?</h2>
                <p>Get in Contact!</p>
            </header>
            <div className="row">
                <div className="name_email">
                    <input onChange={updateName} className="nameEmail" type="text" name="name" id="name" placeholder="Name" autoComplete="off" />
                    <input onChange={updateEmail} className="nameEmail" type="text" name="email" id="email" placeholder="Email" autoComplete="off" />
                </div>

                <input onChange={updateSubject} type="text" name="subject" id="subject" placeholder="Subject" autoComplete="off" />
                <textarea onChange={updateMessage} className="subMessage" name="message" id="message" placeholder="Message" ></textarea>

                <div className="buttons inp">
                    <input className="btn-one" type="submit" value="Send Message" />
                    <input className="clearButton" type="reset" value="Clear Form" />
                </div>
            </div>
        </form>
    )
}
export default Contact