import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';
import './MovieDashboard.css';



class MovieDashboard extends Component {
    constructor(props){
        
        console.log('hello');
        super(props);
        // this.itemSelected=this.itemSelected.bind(this);
        this.state={
            
          movies:[{
              Poster:'',
              Title:''

          }],
          query:'',
        }
      }

      fn=()=>{

      }
     

  searchMovies =()=>{
     fetch(`http://www.omdbapi.com/?s=${this.state.query}&apikey=bd23d0c5`)
        .then(movies=>{
           return  movies.json();
        })
        .then(movies=>{
            console.log(movies.Search);
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
            <div className="input-style">
           <input className="input-class" type="text" 
                value={this.state.query}
                onChange={
                    this.handleQueryInput
                }
            />
            <button className="button-class" onClick={this.searchMovies}>
                Search Movies</button>
            </div>
             <div className="parent">
             <StyleRoot>
             <Coverflow 
                // width={375}
                // height={250}
                backgroundColor='white'
               
                displayQuantityOfSide={4}
                navigation={false}
                enableHeading={false}
                infiniteScroll={false}
                clickable={true} 
                media={{
                    '@media (max-width: 666px)': {
                        width: '325px',
                        height: '350px'
                      },
                      '@media (min-width: 667px)': {
                        width: '667px',
                        height: '500px'
                      },
                      '@media (min-width: 1024px)': {
                        width: '1024px',
                        height: '600px'
                      },
                      '@media (min-width: 1400px)': {
                        width: '1400px',
                        height: '800px'
                      }

                }}

            >
      {

    this.state.movies.map((movie ,i)=>(

    <img
        key={i}
        src={movie.Poster}
        alt={movie.Title}
        style={{width: '100%'}}
      />)
)
}
    
  </Coverflow>
  </StyleRoot>
 
        
        </div>
        </div>
     
    );
  }

  
}

export default MovieDashboard;