import React from "react";
import './App.css';

function Card({title,tags,image,episode,rating,studio,date,typeInfo,description}) {

    return (
        <div className="card">
            <i className="fa-regular fa-bookmark"></i>
            <div className="title">
                <a href="https://www.google.com/">{title}</a>
            </div>
            <ul className="tags borderAndPadding">
                {tags.map((tag,index) => (
                    <li key = {tag}>{tag}</li>
                ))}
            </ul>
            <div className="middle">
                <div className="imageWrapper">
                    <div className="episode-info">{episode}</div>
                    <img src={image} alt={title}/>
                    <div className="rating">{rating}</div>
                </div>
                <div className="middlePortion">
                    <ul className = "middleTitle borderAndPadding">
                        <li>{studio}</li>
                    </ul>
                    <div className="headingDate borderAndPadding">
                        {date}
                    </div>
                    <div className="headingData borderAndPadding">
                        {typeInfo.map((info,index) => (
                            <span key={info}>{info}</span>
                        ))}
                    </div>
                    <div className="middleText">
                        {description}
                    </div>
                </div>
            </div>
            <div className="iconBar">
                <svg className="icon" id = "World" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20" />
                    <path d="M2.5 6h19" />
                    <path d="M2.5 18h19" />
                    <path d="M16 2a21.4 21.4 0 0 1 0 20" />
                    <path d="M8 2a21.4 21.4 0 0 0 0 20" />
                </svg>
                <svg className="icon" id = "XIcon"  width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5 L95 85 L85 95 L5 15 Z"/>
                    <path d="M85 5 L95 15 L15 95 L5 85 Z"/>
                </svg>
                <svg className="icon" id = "Crunchy" width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="256" cy="256" r="240" fill="#FF6B00" stroke="none"/>
                    <circle cx="256" cy="256" r="160" fill="white" stroke="none"/>
                    <circle cx="256" cy="256" r="120" fill="#FF6B00" stroke="none"/>
                    <circle cx="320" cy="192" r="70" fill="white" stroke="none"/>
                    <path d="M 256 496 A 240 240 0 0 1 76 356 A 160 160 0 0 0 196 436 A 120 120 0 0 1 256 496 Z" fill="#FF6B00"/>
                </svg>
            </div>
        </div>
    );
}

export default Card;