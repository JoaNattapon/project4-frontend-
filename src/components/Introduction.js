import './style.css';
import { Link } from 'react-router-dom';

const Introduction = () => {


    return(
        <div className='introduction'>
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
    )
}

export default Introduction;