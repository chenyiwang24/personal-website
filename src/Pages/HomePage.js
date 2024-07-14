import React from 'react';
import './HomePage.css'

import headShot from './../Assets/Pictures/headshot.png'

import github from './../Assets/Icons/githubIcon.png'
import githubHover from './../Assets/Icons/githubHover.png'
import linkedin from './../Assets/Icons/linkedinIcon.png'
import linkedinHover from './../Assets/Icons/linkedinHover.png'
import leetcode from './../Assets/Icons/leetcodeIcon.png'
import leetcodeHover from './../Assets/Icons/leetcodeHover.png'
import email from './../Assets/Icons/emailIcon.png'
import emailHover from './../Assets/Icons/emailHover.png'

import SocialIcon from '../Components/SocialIcon';

const HomePage = () => {
    return (
        <div>
            <div className='root-container'>
                <div className='name-box-container'>
                    <div className='middle-row'>
                        <div>
                            <h1 className='name-text'>Chenyi<br/>Wang</h1>
                            <h2 className='subtitle-text'>Software Engineer</h2>
                            <div className='icon-row'>
                                <SocialIcon iconDefault={linkedin} iconHover={linkedinHover} link="https://www.linkedin.com/in/chenyiwang24/" size="30px" margin="0px"/>
                                <SocialIcon iconDefault={github} iconHover={githubHover} link="https://github.com/chenyiwang24" size="25px" margin="0px"/>
                                <SocialIcon iconDefault={leetcode} iconHover={leetcodeHover} link="https://leetcode.com/u/chenyiwang/" size="23px" margin="4px"/>
                                <SocialIcon iconDefault={email} iconHover={emailHover} link="mailto:chenyi@utexas.edu" size="25px" margin="0px"/>
                            </div>
                        </div>
                        <img className='head-shot' src={headShot} alt='Chenyi Wang Headshot'></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;