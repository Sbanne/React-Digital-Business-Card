import React from 'react'
import img from '../images/Laura-Smith-Pic.png'
import Mail from '../images/Mail-Icon.svg'
import Linkedin from '../images/Linkedin-Icon.svg'
export default function Info() {
    return (
        <div>
            <img src={img} alt="image" className='profile-photo' />
            <h1 className='person-name'>Sujit Banne</h1>
            <h4 className='profession'>Frontend Developer</h4>
            <p className='website-link'><a href='#'>sujitbanne.website</a></p>
            <div className="websites">
                <a href="mailto:sujitbanne13@gmail.com" target="_blank" className="email">
                    <img src={Mail} />
                    <p>Email</p>
                </a>
                <a href="https://www.linkedin.com/in/sujit-banne-920a96184/" target="_blank" className="linkedin" >
                    <img src={Linkedin} />
                    <p>Linkedin</p>
                </a>
            </div>
        </div>
    )
}