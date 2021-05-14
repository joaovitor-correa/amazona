import React from 'react';

export default function Rating(props) {
    const { product } = props;
    console.log(product)

    function drawStars(rating) {
        const starNumbers = 5
        const intRating = Math.floor(rating)
        var decRating = (rating - intRating).toFixed(1) * 10
        var stars = []
        for (var i = 0; i < starNumbers; i++) {
            if (i < intRating) {
                stars.push(<span key={i}><i className="fa fa-star"></i></span>)
            } else if (decRating >= 5) {
                stars.push(<span key={i}><i className="fa fa-star-half-o"></i></span>)
                decRating = decRating - 5;
            } else {
                stars.push(<span key={i}><i className="fa fa-star-o"></i></span>)
            }
        }
        return stars
    }

    return (
        <div className="rating">
            {drawStars(product.rating)}
            <span>{product.numReviews} reviews</span>
        </div>
    )
}