import React from "react";
import "./style.css"

function ImageCard(props) {
    return (
        <div className="card">
        <span className="remove" onClick={() => props.images.removeImage(props.images.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.images.image} />
            </div>
            </span>
        </div>
    );
}

export default ImageCard;