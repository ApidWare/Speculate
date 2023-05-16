import React from "react";
function Card(props) {
    return(
        <section id="card">
            <img id="cardImage" src={props.image} />
            <div id="cardTitle">
                {props.title}
            </div>
            <div id="cardDescription">
                {props.description}
            </div>
            <div id="cardAuthor">
                {props.author}
            </div>
        </section>
    );
}
export default Card;
