import React from 'react';
import './About.css';
import myphoto from '../../images/kamrul.jpg';
const About = () => {
    return (
        <div className='row container mx-auto mt-5'>
            <div className='col-md-6'>
                <div className='text-center about-image-container'>
                    <img className='p-2' src={myphoto} alt="" />
                    <h5>Md. Kamrul Hasan</h5>
                    <p>Bachelor of Computer Science and <br /> Engineering,Passed Year 2022.</p>
                </div>
            </div>
            <div className='col-md-6'>
                <div className=''>
                    <h2 className='text-center primary-color'>About Me</h2>
                    <p>As-Salamu Alaikum, I am Md. Kamrul Hasan. In 2022, I graduted in the field of "Bechelor of Computer Science and Engineering, IUBAT". I am learning and mastering web development.</p>
                    <p><strong>Mission : </strong>In 2022, my mission is to learn different programming languages for web development. I will learn in this year HTML, CSS, Bootstrap, tailwind CSS, React js, Node js, MongoDB etc.</p>
                    <p><strong>Vission : </strong>My vission is to develop large, small, medium web application software for different companies around the world.</p>
                    <p><strong>Goal : </strong>In 2022, According to my mission and vission to make myself as a skillful Web-Developer based on required technology in the field of Web-Development and  get a good job. The job can be foreign remote job or foreign onsite job, or can be my own country job.</p>
                    <p>The web development journey started with programming hero in 1st january 2022. I commited to follow their each and every instructions and I will give the maximum effort to complete this journey. I will complete all the task in daily basis.I will not stop until I become the Web Development Hero.</p>
                </div>
            </div>
        </div>
    );
};

export default About;