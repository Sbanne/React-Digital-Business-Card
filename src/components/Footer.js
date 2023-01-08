import React from 'react'
import Twitter from '../images/Twitter-Icon.svg'
import Facebook from '../images/Facebook-Icon.svg'
import Instagram from '../images/Instagram-Icon.svg'
import Github from '../images/GitHub-Icon.svg'

export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/SB1322001" target="_blank">
                <img src={Twitter} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100007763745931" target="_blank">
                <img src={Facebook} />
            </a>
            <a href="https://www.instagram.com/sujitbanne_/" target="_blank">
                <img src={Instagram} />
            </a>
            <a href="https://github.com/Sbanne" target="_blank">
                <img src={Github} />
            </a>
        </footer>
    )
}