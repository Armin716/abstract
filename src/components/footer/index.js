import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component{

    render() {
        const FooterMain = styled.div`
            background-color: #111;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        `

        const SocialIcons = styled.div`
            .social_icon {
                font-size: 15px;
                color: #555;
                margin: 0 5px;
                cursor: pointer;
                transition: .5s;
                &:hover {
                    color: #04e5e5;
                }
            }
        `
        return (
            <FooterMain>
                <SocialIcons>
                    <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/Armin716')}/>
                    <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://twitter.com/HeeFuckingHo')} />
                    <FontAwesomeIcon icon={faFacebook} className="social_icon" onClick={() => window.open('https://www.facebook.com/armand716/')} />
                    <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/luis-armando-ortiz-gonzalez-01a992149/')} />
                </SocialIcons>
            </FooterMain>
        )
    }
}
export default Footer