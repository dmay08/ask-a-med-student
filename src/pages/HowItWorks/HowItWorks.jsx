import React from 'react';
import { Link } from 'react-router-dom';
import './HowItWorks.css';


const HowItWorks = (props) => (
    <div className="HowItWorks">
        <h1>AMS</h1>
        <h3>Ask a Med Student</h3>
            <br/>
        <h3>What is AMS?</h3>
        <p>Ask a Med Student (AMS) is an online platform 
            designed to connect students interested in medical 
            school with current medical students. It was
            designed by a medical student who wanted to make
            the grueling medical school application process just 
            a little bit easier. 
            Students interested in medical school can submit 
            questions and medical students can respond
            to those questions (which can then be viewed). </p>
            <br/>
        <h3>Who is it for?</h3>
        <h5>Non-medical students:</h5>
        <p>If you have any interest in going to medical school
            and have any questions about the process,
            this is the app for you! AMS allows you to 
            submit questions to current medical students
            who can then respond to your questions.
            Click 'Sign Up' and select 'Medical School Applicant'
            then submit your questions!
            <br/>
        </p>
        <h5>Medical students:</h5>
        <p>If you're a current medical student and interested in 
            guiding the next generation of medical students,
            this app would love your help! Students interested
            in applying to medical school will submit questions
            that you can then respond to. It's fast and easy - I know
            how busy you are. I was once one of you!
            Click 'Sign Up' and select 'Medical Student'
            from the 5th text-box. Thank you for your help!
        </p>
            <br/>
        <h3>How does it work?</h3>
        <h5>Non-medical students:</h5>
        <p>Click 'Signup' to create your account,
            then type a question into
            the 'New Question' textbox and hit 'Submit.'
            Once a medical student has responded to your
            question, you'll be able to view that answer
            when you click on your question (under 
            'My Questions').</p>
        <h5>Medical students:</h5>
        <p>Click 'Signup' to create your account,
            then scroll through a list of questions
            that people have submitted. Click 
            a question to respond to it, then type
            your response in the 'My Answer' text-box.
            This response will be viewable by both
            you and the person who submitted it.
            Feel free to respond to as many questions
            as you would like.
        </p>
        <br/>
        <Link to="/">
            <button className="btn btn-default">Got it!</button>
        </Link>
    </div>
);

export default HowItWorks;