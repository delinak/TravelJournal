import React from 'react';

function TravelCard(props){
    return (
        <div className="Card">
            <img className="card-img" src={`${process.env.PUBLIC_URL}/image/${props.image}`} alt="" />
            <div className="card-title">
            <div className="location-container">
                <img className="card-icon" src={`${process.env.PUBLIC_URL}/image/icon-loc.png`} alt="" />
                <h3 className="clocation">{props.location}</h3>
            </div>
                <h1 className="cname">{props.name}</h1>
                <h4 className="cdate">{props.date}</h4>
                <p className="ccontent"> {props.content}</p>
            </div>
        </div>
    )
}

export default TravelCard;