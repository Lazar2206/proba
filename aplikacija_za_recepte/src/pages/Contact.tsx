import lizard from '../assets/lizard.png';
import envelope from '../assets/envelope.png';
import '../styles/Contact.css';

const Contact = () => {
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
              <input type='text' placeholder='Name' />
              <input type='email' placeholder='Email' />
              <input type='text' placeholder='Message' className='textbox' />
              <button className='btn'>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  };
  
  export default Contact;