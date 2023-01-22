import './style.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Introduction = () => {

    const introduction1 = useRef(null);
    const introduction2 = useRef(null);
    const introduction3 = useRef(null);
    const introduction4 = useRef(null);
    const introduction5 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(introduction1.current, {
            scrollTrigger: {
                trigger: introduction1.current,
                start: "top 50%",
                toggleActions: "restart none none none",
            },
            opacity: 1,
            y: -50,
            ease: "power4.out",
        });
        gsap.to(introduction2.current, {
            // similar animation for introduction2
        });
        gsap.to(introduction3.current, {
            // similar animation for introduction3
        });
        gsap.to(introduction4.current, {
            // similar animation for introduction3
        });
        gsap.to(introduction4.current, {
            // similar animation for introduction3
        });
    }, []);

    return(
        <div className='mainintro'>
            <div ref={introduction1} className='introduction1'>
                <h2>Did you know ?</h2>
                <p>Hi there, we glad to see you here.If what you are looking for is one good
                    health insurance package that will be cover to all of diseases that mostly
                    found for Thai patients, we would like to tell you that you come to the right
                    place ! We are positioning to be the best health insurance package seller
                    and we are more than ready to educate and help you find out which package
                    suit you the best. Thus, as not to waste time there are 5 most critical disease
                    found in Thai patience as follow.
                </p>
                <ul className='diseasebullet'>
                    <li>Cancer disease</li>
                    <li>Heart disease</li>
                    <li>Diabetes disease</li>
                    <li>Hypertension disease</li>
                    <li>Kidney disease</li>
                </ul>
                <p className='second-p'>
                    However, you don't be panic to see all of these disease and it should discourage
                    to live your dream life, that is why we are here to help and support you. Remember
                    we got your back ! in case you are interest to see furthur information about our
                    health package <Link to='/letpackages' className='center'><p>Click here!</p></Link>
                </p>
            </div>
            <div ref={introduction2} className='introduction2'>
                <h2>The definition of Cancer disease</h2>
                <p>
                    Cancer is a disease in which some of the body’s cells grow uncontrollably and spread to other parts of the body.
                    Cancer can start almost anywhere in the human body, which is made up of trillions of cells. Normally, human cells grow and multiply (through a process called cell division) to form new cells as the body needs them. <span></span><span></span>When cells grow old or become damaged, they die, and new cells take their place.
                    Sometimes this orderly process breaks down, and abnormal or damaged cells grow and multiply when they shouldn’t. These cells may form tumors, which are lumps of tissue. Tumors can be cancerous or not cancerous (benign).
                    Cancerous tumors spread into, or invade, nearby tissues and can travel to distant places in the body to form new tumors (a process called metastasis).<span></span> Cancerous tumors may also be called malignant tumors.<span></span><span></span> Many cancers form solid tumors, but cancers of the blood, such as leukemias, generally do not.
                    Benign tumors do not spread into, or invade, nearby tissues. When removed, benign tumors usually don’t grow back, whereas cancerous tumors sometimes do. Benign tumors can sometimes be quite large, however. Some can cause serious symptoms or be life threatening, such as benign tumors in the brain.
                </p>
            </div>
            <div ref={introduction3} className='introduction3'>
                <h2>The definition of Heart disease</h2>
                <p>
                    Coronary artery disease is a common heart condition that affects the major blood vessels that supply the heart muscle. Cholesterol deposits (plaques) in the heart arteries are usually the cause of coronary artery disease. The buildup of these plaques is called atherosclerosis (ath-ur-o-skluh-ROE-sis). Atherosclerosis reduces blood flow to the heart and other parts of the body. It can lead to a heart attack, chest pain (angina) or stroke.
                    Coronary artery disease symptoms may be different for men and women. For instance, men are more likely to have chest pain. Women are more likely to have other symptoms along with chest discomfort, such as shortness of breath, nausea and extreme fatigue.
                    Symptoms of coronary artery disease can include:
                </p>
                <ul className='diseasebullet'>
                    <li>Chest pain, chest tightness, chest pressure and chest discomfort (angina)</li>
                    <li>Pain in the neck, jaw, throat, upper belly area or back</li>
                    <li>Shortness of breath</li>
                </ul>
                <p className='second-p'>
                    You might not be diagnosed with coronary artery disease until you have a heart attack, angina, stroke or heart failure. It's important to watch for heart symptoms and discuss concerns with your health care provider. Heart (cardiovascular) disease can sometimes be found early with regular health checkups.
                </p>
            </div>
            <div ref={introduction4} className='introduction4'>
                <h2>The definition of Diabetes disease</h2>
                <p>
                    Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy.
                    Your body breaks down most of the food you eat into sugar (glucose) and releases it into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin. Insulin acts like a key to let the blood sugar into your body’s cells for use as energy.<span></span><span></span>
                    With diabetes, your body doesn’t make enough insulin or can’t use it as well as it should. When there isn’t enough insulin or cells stop responding to insulin, too much blood sugar stays in your bloodstream. Over time, that can cause serious health problems, such as heart disease, vision loss, and kidney disease.
                    There isn’t a cure yet for diabetes, but losing weight, eating healthy food, and being active can really help. Other things you can do to help:
                </p>
            </div>
            <div ref={introduction5} className='introduction5'>
                <h2>The definition of Hypertensive disease</h2>
                <p>
                    High blood pressure, also called hypertension, is blood pressure that is higher than normal. Your blood pressure changes throughout the day based on your activities. Having blood pressure measures consistently above normal may result in a diagnosis of high blood pressure (or hypertension).
                    The higher your blood pressure levels, the more risk you have for other health problems, such as heart disease, heart attack, and stroke.
                    Your health care team can diagnose high blood pressure and make treatment decisions by reviewing your systolic and diastolic blood pressure levels and comparing them to levels found in certain guidelines.
                </p>
            </div>

        </div>
        
    )
}

export default Introduction;