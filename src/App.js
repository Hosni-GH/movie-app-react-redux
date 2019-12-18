import {connect} from 'react-redux';
import React, { Component } from 'react';
import './App.css';
import Card from  './Card'
class App extends Component {

  add=()=> {

    let name=this.props.nameReducers;
    let img=this.props.imgReducers ;
    let rating=this.props.ratingReducers,
    disp=false
    this.props.ADD_MOVIE(rating,name,img)
    this.props.HIDDEN_CLASS("hidden")
  }
  star=(e)=>{
    this.props.FILTER_STAR(e)
  }
show=()=>{
  let disp=true;
  this.props.DISPLAY_CLASS(disp)
}




   render() {
    return (
    <div className="movie-app">
      <header className="header">
        <input type='text' placeholder="Search" onChange={(e)=>this.props.CHANGE_FILTER_NAME(e)} />
        <span onClick ={()=>this.star(1)}>⭐</span>
        <span onClick ={()=>this.star(2)}>⭐</span>
        <span onClick ={()=>this.star(3)}>⭐</span>
        <span onClick ={()=>this.star(4)}>⭐</span>
        <span onClick ={()=>this.star(5)}>⭐</span>
       </header>
     {/* <Card input ={this.state.search} star = {this.state.star} movies = {this.state.movielist} />
  
 */}
      <p className="plus" onClick ={()=>this.props.CHANGE_CLASS("display")}>+</p>
    { /*</div>* <div className ={this.state.display ? "display":"hidden"}>
       */}
       
      <div className ={this.props.Display}>
       
        <input type="text" placeholder="name" name="name" onChange={(e)=>this.props.CHANGE_NAME(e)} />
        <input type="text" placeholder="Img" name="img" onChange={(e)=>this.props.CHANGE_IMG(e)} />
        <input type="text" placeholder="rating" name="rating" onChange={(e)=>this.props.CHANGE_Rating(e)} />
        <button onClick={this.add}>Add</button>
      </div>
   
    
    
      <Card movies = {this.props.ListMoviesReducers} filterName={this.props.nameFilterReducers} filterStar={this.props.starFilterReducers}/>
    </div>);
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
  ADD_MOVIE:(ratingAdd,nameAdd,img)=>{
      dispatch({type:'add-Movie',ratingAdd:ratingAdd,nameAdd:nameAdd,img:img})
    },
    CHANGE_NAME:(e)=>{
      dispatch({type:'CHANGE_NAME',value:e.target.value})
    },
    CHANGE_IMG:(e)=>{
      dispatch({type:'CHANGE_IMG',value:e.target.value})
    },
    CHANGE_Rating:(e)=>{
      dispatch({type:'CHANGE_Rating',value:e.target.value})
    },
    CHANGE_FILTER_NAME:(e)=>{
      dispatch({type:'CHANGE_FILTER_NAME',value:e.target.value})
    },
    FILTER_STAR:(e)=>{
      dispatch({type:'FILTER_STAR',value:e})
    },
    HIDDEN_CLASS:(disp)=>{
      dispatch({type:'HIDDEN_CLASS',value:disp})
    },
    CHANGE_CLASS:(disp)=>{
      dispatch({type:'CHANGE_CLASS',value:disp})
    }

    }
}
const mapStateToProps = ({ListMoviesReducers,DisplayReducers,nameReducers,imgReducers,ratingReducers,nameFilterReducers,starFilterReducers}) => {
 return {
  ListMoviesReducers:ListMoviesReducers,
  Display:DisplayReducers,
  nameReducers:nameReducers,
imgReducers:imgReducers,
ratingReducers:ratingReducers,
nameFilterReducers:nameFilterReducers,
starFilterReducers:starFilterReducers
   }
 }

export default connect(mapStateToProps,mapDispatchToProps)(App)