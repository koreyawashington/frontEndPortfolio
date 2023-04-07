import "./PricingCardStyles.css"
import { Link } from "react-router-dom"
import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$125.99</p>
                <p>- 2 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p> 
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    HURRY UP AND BUY!
                </Link>
            </div>

            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$575.99</p>
                <p>- 2 Days -</p>
                <p>- 5 Pages -</p>
                <p>- Featured -</p> 
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    HURRY UP AND BUY!
                </Link>
            </div>

            <div className="card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <p className="btc">$1,255.99</p>
                <p>- 5 Days -</p>
                <p>- 9 Pages -</p>
                <p>- Featured -</p> 
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    HURRY UP AND BUY!
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard