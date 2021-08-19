import './contact.css'
function Contact() {
  return (
    <div className="contact">
        <div className="contact_heading">I'll love to hear your suggestions</div>
        <div className="input_container">

            <div className="input_form">
                <div className="input_form_text_container">
                    <span className="input_form_text">What's your name?</span>
                    <span className="input_form_invalid_text">Not valid</span>
                </div>
                <input></input>
            </div>

            <div className="input_form">
                <div className="input_form_text_container">
                    <span className="input_form_text">What's your email?</span>
                    <span className="input_form_invalid_text">Not valid</span>
                </div>
                <input></input>
            </div>

            <div className="input_form">
                <div className="input_form_text_container">
                    <span className="input_form_text">What's the subject?</span>
                    <span className="input_form_invalid_text">Not valid</span>
                </div>
                <input></input>
            </div>

            <div className="input_form">
                <div className="input_form_text_container">
                    <span className="input_form_text">What's the message?</span>
                    <span className="input_form_invalid_text">Not valid</span>
                </div>
                <input></input>
            </div>

            <button className="contact_send">Send</button>
        </div>

    </div>
  );
}

export default Contact;