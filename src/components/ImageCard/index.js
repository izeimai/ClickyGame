import React from "react";
import "./style.css"

function ImageCard(props) {
    return (
        <span className="count" onClick={() => props.images.countImage(props.images.id)}>
            <div className="img-container text-center">
                <img alt={props.name} src={props.images.image} />
            </div>
        </span>
    );
}

export default ImageCard;