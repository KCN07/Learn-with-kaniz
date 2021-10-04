import React from 'react';
import img from '../../images/hatirjheel.jpeg'
const Contact = () => {
    return (
        <div className="contact-container">

            <div style={{ backgroundColor:'whitesmoke' }} className="p-5">
                <h1 className="title2" >Our Office</h1>
                <img src={img} alt="" />
                <h4>Hatirjhil, Dhaka</h4>
            </div>

            <div className='con-info container border rounded shadow p-5 mt-5'>

                 <h3>For Any Query :</h3>

                  <h6>Mail us: <a href="mailto:LWK@abc.edu.bd">LWK@abc.edu.bd</a></h6>
                  <h6>Phone: 017123749835459</h6>
                  <h6>Mobile: 01712374946559</h6>
                  
            </div>
            
        </div>
    );
};

export default Contact;