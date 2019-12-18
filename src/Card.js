import React, { Component } from 'react';
class Card extends Component {
  
    render() {
        return (
            <div className="container">
        
        
     {       /*    {this.props.movies && this.props.movies.filter(el => el.name.toLowerCase().includes(this.props.input.toLowerCase().trim()) && el.rating <= this.props.star).map(el => {
        
        */}

{this.props.movies && this.props.movies.filter(el => (el.name.toLowerCase().indexOf(this.props.filterName.toLowerCase())>=0)&& el.rating>=this.props.filterStar).map(el => {  
        return (
                        <div className="movie-card">
                            <p className="movie-name">{el.name}</p>
                            <p className="movie-rating">{"".padEnd(el.rating, "⭐")}</p>
                            <img className="movie-img" src={el.img} />
                         </div>
                    )
                })}
            </div>);
    }
}
export default Card;

