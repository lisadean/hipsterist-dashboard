import React, { Component } from 'react';
import { Fetch } from 'react-request';
import './MovieDashboard.css';



class MovieDashboard extends Component {
    constructor(props){
        super(props);
        this.state={
          movies:[],
          query:''
        }
      }

  searchMovies =()=>{
     fetch(`http://www.omdbapi.com/?s=${this.state.query}&apikey=bd23d0c5`)
        .then(movies=>{
           return  movies.json();
        })
        .then(movies=>{
            this.setState({
                movies: movies.Search
            })

        })

  }


  handleQueryInput=(event)=>{
      this.setState({
          query: event.target.value

          })
  }
  render() {

    return (
        <div >
           <input className="input-class"type='text' 
                value={this.state.query}
                onChange={
                    this.handleQueryInput
                }
            />
            <button className="button-class" onClick={this.searchMovies}>
                Search Movies</button>
             <div className="parent">   
        {
            this.state.movies.map((movie ,i)=>
            
            <div className="outer-div">
                <div className="movie" key={i}>
                    <h2 className="name">{movie.Title}</h2>
                    <div class="container-image">
                    <img className= "image"src={movie.Poster}/>
                    </div>
                </div>
            </div>
            )
        }
        </div>
        </div>
     
    );
  }
}

export default MovieDashboard;