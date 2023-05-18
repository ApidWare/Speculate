import React from "react";
function Card(props) {
    return(
        <div id="cardParent">
            <div id="cardAuthor">
                <img id="authorImage" src={props.authorImage}/>
                {props.author}
            </div>
            <section id="card">
                <img id="cardImage" src={props.image} />
                <div id="cardInfo">
                    <div id="cardTitle">
                        {props.title}
                    </div>
                    <div id="cardDescription">
                        {props.description}
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Card;
