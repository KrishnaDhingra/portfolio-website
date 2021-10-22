import './contact.css';
import React, {useState, useEffect} from 'react';
import validator from 'validator';


function Contact() {

    const [num, setNum] = useState(0)
    const [name, setName] = useState('')
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [nameText, setnameText] = useState('')
    const [emailText, setemailText] = useState('')
    const [subjectText, setsubjectText] = useState('')
    const [messageText, setmessageText] = useState('')

    let check = () =>{

        if(name.length === 0){
            setnameText('Required')
        }else{
            setnameText('')
        }
        if(email.length === 0){
            setemailText('Required')
        }else{
            if(validator.isEmail(email)){
                setemailText('')
            }else{
                setemailText('Not Valid')
            }
        }
        if(subject.length === 0){
            setsubjectText('Required')
        }else{
            setsubjectText('')
        }
        if(message.length === 0){
            setmessageText('Required')
        }else{
            setmessageText('')
        }

        
        setNum(num + 1)

        if(nameText === '' && emailText === '' && subjectText === '' && messageText === ''){
            console.log("You've succesffuly sent the message")
        }else{
            console.log("There is some error")
        }
    }
  return (
      <div className="contact">
        <div className="contact_heading"  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">I'll love to hear your suggestions</div>
        <div className="input_container"   data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">

            <div className="input_form">
                <div className="input_form_text_container">
                    <span className="input_form_text">What's your name?</span>
                    <span className="input_form_invalid_text">{nameText}</span>
                </div>
                <input onChange={(e) =>{
                        setName(e.target.value)
                }}></input>
            </div>

            <div className="input_form">
                <div className="input_form_text_container">
                    <span className="input_form_text">What's your email?</span>
                    <span className="input_form_invalid_text">{emailText}</span>
                </div>
                <input onChange={(e) =>{
                        setEmail(e.target.value)
                    }}></input>
            </div>

            <div className="input_form">
                <div className="input_form_text_container">
                    <span className="input_form_text">What's the subject?</span>
                    <span className="input_form_invalid_text">{subjectText}</span>
                </div>
                <input onChange={(e) =>{
                        setSubject(e.target.value)
                    }}></input>
            </div>

            <div className="input_form">
                <div className="input_form_text_container">
                    <span className="input_form_text">What's the message?</span>
                    <span className="input_form_invalid_text">{messageText}</span>
                </div>
                <input onChange={(e) =>{
                        setMessage(e.target.value)
                    }}></input>
            </div>

            <button className="contact_send" onClick={check}>Send</button>
        </div>



    </div>
  );
}

export default Contact;