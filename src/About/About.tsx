import React from 'react'
import './About.scss'


interface AboutProp{

}

const About: React.FC<AboutProp> = () =>{
    return(
        <div className="About">
            {/* Your content for the About page goes here */}
            <h1>About</h1>
        </div>
    )
}

export default About;