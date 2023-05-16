import React from "react";
import CardContainer from "./CardContainer";
function Glance() {
    return(
        <section id="glanceContainer">
            <div id="glanceTitle">
                Creativity begins here.
            </div>
            <div id="glanceDescription">
                <b>Think</b>, <b>express</b>, <b>write</b> whatever you think the world needs to know. <br/> or <b>read</b>, <b>study</b>, <b>analyze</b> topics written by independent authors like <b>you</b>.
            </div>
            <div id="glanceButton">
                Start the journey
            </div>
            <img id="glanceImage" src="https://i.ibb.co/S0fhf8j/You2015-logo-svg.png"/>
            <div id="hr"></div>
            <div id="cardsTitle">
                Discover our stories
            </div>
            <CardContainer />
        </section>
    );
}
export default Glance;
