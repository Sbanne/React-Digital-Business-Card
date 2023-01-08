import React from 'react'
import Twitter from '../images/Twitter-Icon.svg'
import Facebook from '../images/Facebook-Icon.svg'
import Instagram from '../images/Instagram-Icon.svg'
import Github from '../images/GitHub-Icon.svg'

export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/SB1322001" >
                <img src={Twitter} alt="twitter" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100007763745931" >
                <img src={Facebook} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/sujitbanne_/" >
                <img src={Instagram} alt="insta" />
            </a>
            <a href="https://github.com/Sbanne" >
                <img src={Github} alt="github" />
            </a>
        </footer>
    )
}
