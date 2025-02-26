import React from 'react'
import '../Styles/main.scss'
import featuresData from '../../data/featuresData.json'

function Features() {
    return (
        <div className="features">
            <h2 className="sr-only">
                Features
            </h2>
            {featuresData.map((feature, index) => (
                <div key={index} className="feature-item">
                    <img src={feature.imgSrc} alt={feature.imgAlt} className="feature-item--icon"/>
                    <h3 className="feature-item--title">
                        {feature.title}
                    </h3>
                    <p>
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Features