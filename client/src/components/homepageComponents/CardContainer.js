import React from "react";
import Card from "./Card";
function CardContainer() {
    return(
        <div id="cardSection">
            <section id="cardContainer">
                <Card
                    image="https://occ-0-55-37.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa6xunmQtNXxRz3beRkEjyhWGjDWtLREoRGEi8n4aAe5kg_KKDbZ58BUwLDj3FX80kb1fb3oP9Or7jKNDIHcd7esJ5x2Az6qIyYxIiQhB60R2I1onFt0NUSQsrSWJLQRw8lGnA.jpg?r=1aa"
                    title="The Invisible Hand: Big Tech's Control Over Our Lives"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s and even more dummy text is on the way."
                    author="Sunny Singh"
                    authorImage="https://i.ibb.co/BgtmVkX/sunny.jpg"
                />
                <Card
                    image="https://images.livemint.com/img/2022/07/06/1600x900/5g_1652299257638_1657124003796.jpg"
                    title="5G, A myth in India - Why 5G will never be real in countries like India"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s and even more dummy text."
                    author="Richa Parihar"
                    authorImage="https://i.ibb.co/26vghhD/richa.jpg"
                />
                <Card
                    image="https://cloud2data.com/wp-content/uploads/2023/02/AI-7.jpg"
                    title="The AI Revolution: Impact of Artificial Intelligence on our lives"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s and even more."
                    author="Riya Motwani"
                    authorImage="https://i.ibb.co/2S7p89N/riya.jpg"
                />
            </section>
        </div>
    );
}
export default CardContainer;
