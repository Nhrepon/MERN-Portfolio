import React from 'react';

const skillCardComponents = (props) => {
    return (
        <div>
            <div className="card border-0 shadow-lg">
                <div className="card-body  text-center">
                    <i class={props.iconClass}></i>
                    <h2 className="card-title fs-1 fw-bold">{props.cardTitle}</h2>
                    <p className="card-text">{props.cardText}</p>
    
                </div>
            </div>
        </div>
    );
};

export default skillCardComponents;