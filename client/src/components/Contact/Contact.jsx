import React, {useState} from 'react';
import './Contact.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:'',
  });

  const [showAlert, setShowAlert]=useState(false);



  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit= (e)=>{
    e.preventDefault();
    setShowAlert(true);
    setTimeout(()=>setShowAlert(false),3000);
  }


  return (
    <div className="contact-page">
      <Header/>
    <div className="ContactPagecontainer" >
      <div className="row mb-5 mt-3 text-center">
        <div className="col-12">
          <h1 className="display-4 mb-4">
            Contact Me
          </h1>
        </div>
      </div>
    
{/* get in touch */}
    <div className="contact-row sec-sp">
        <div className="col-lg-5 mb-5">
          <h3 className="color_sec py-4"> Get in Touch </h3>
          <address>
            <strong>Email: abc@gmail.com</strong>
            <br />
            <br />
            <p>
              <strong>Phone: 123-123-1234</strong>
            </p>
          </address>
        </div>
      

{/* contact form */}
      <div className="col-lg-7 mb-5">
        <h3 className="color_sec py-4">Contact Form</h3>
        {showAlert && <div className="alert alert-success">
          Your message has been sent successfully
          </div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Message</label>
            <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required>
            </textarea> 
          </div>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
  </div>
    </div>
    <Footer/>
    </div>
);
};

export default Contact;
