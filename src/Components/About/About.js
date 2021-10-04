import React from 'react';
import img from '../../images/Young-woman-holding-a-folder-businessman-Stock-Photo.jpg';
import './About.css'
const About = () => {
    return (
        <div className="about-container">
            <div className="top container ">
                <h1 className="title2 mt-5" >We share the power of Knowledge worlwide</h1>

                 <img src={img} alt="" />
            </div>
            <div className="top2 p-3">
                <p>Awards: Learn with kaniz won the best online educational award 2020</p>

            </div>
            <div className="slogan mx-auto my-5">
                <h1 className="title2">Changing The Learning Process For The Better OutCome</h1>
                <p style={{fontSize: "20px"}}>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
            </div>
            <div className="resources top2 p-5">
                <h1 className="title">We Are Growing</h1>
                <p>Our global community and our course catalog get bigger every day.</p>
                <div className="container ">
                    <h1 style={{textAlign: 'left'}}>44M+ <small>Learners</small> </h1>
                    <h1 style={{textAlign: 'right'}}>65K+ <small>Instructors</small> </h1>
                    <h1>10K+ <small>Course varieties</small> </h1>
                </div>
                
            </div>
            <div className='m-5'>
                <p style={{fontSize: "20px", fontWeight:'bolder'}}>To Know More About Us Please Click</p>
                <button className='btn btn-lg' style={{backgroundColor: 'black', color: 'white'}}>Learn More</button>
            </div>
        </div>
    );
};

export default About;