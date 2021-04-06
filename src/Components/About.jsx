import React from "react";

function About(props) {
    return (
        <div id='about'>
            <div className="about-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquam aliquid
                    asperiores cum dignissimos dolorum earum harum iusto, libero maiores molestias nam natus nulla
                    quidem sed soluta tempore temporibus ullam vel! Ea, ratione, temporibus!</p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About;