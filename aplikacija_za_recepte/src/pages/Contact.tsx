import lizard from '../assets/lizard.png';
import envelope from '../assets/envelope.png';
import '../styles/Contact.css';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className='contact'>
      <div className='container row'>
        <div className='img'>
          <img src={lizard} alt='lizard' className='imglizard' />
          <img src={envelope} alt='envelope' className='imgenvelope' />
        </div>
        <div className='contact-content'>
          <div className='content'>
            <div className='recipe row'>
              <h2>Contact us</h2>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
              />
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
              />
              <input
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Message'
                className='textbox'
              />
              <button onClick={handleSendMessage} type='button' className='btn'>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  };
  
  export default Contact;