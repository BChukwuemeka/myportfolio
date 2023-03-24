import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';





const Contact = () => {

        const form = useRef();

        const [done, setDone] = useState(false)
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
        };
      


    return ( 
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span><span>Contact me</span>
                    <div className="blur s-blur1"></div>
                </div>
            </div>
            <div className="c-right">
                <form action="" ref={form} onSubmit={sendEmail} >
                <input type="text" name="user-name" className="user" placeholder="Name" />
                <input type="email" name="user-email" className="user" placeholder="Email" />
                <textarea name="message" id="" cols="30" rows="10" className="user" placeholder="Message"/>
                <input type="submit" value="send" className="button" />
                <span>{done && "Thanks for contacting me!"}</span>
                <div className="blur c-blur1">

                </div>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;