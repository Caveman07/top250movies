
import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom'



export default class MoviesComponent extends React.Component {

  constructor(props, context) {
    super(props, context);

    // Dropdown block is inactive & hidden by default
    this.state = {
      atBottom: false
    };

    // We should bind `this` to click event handler right here
    this.atBottom = this.atBottom.bind(this);
  }



  componentDidMount(){
       document.addEventListener('scroll', this.atBottom)

  }


  atBottom(event) {

      var el = document.getElementById('hey')
      var windowHeight = window.innerHeight

        if (el.scrollHeight - el.scrollTop === windowHeight){
            this.setState({
              atBottom: true
            })
            this.props.atBottom()
        } else {
            this.setState({
              atBottom: false
            })
        }

  }


  render() {
    let listMovies = this.props.movies.map(movie=>{
      return (
        <li className='movieFrame' key={movie["imdbID"]}>
          <div className='poster'>
            <img className='posterImage' src={movie["Poster"]} alt= {movie["Title"]} />
          </div>

          <div className='movieInfo'>

            <div className='top'>
              <span className='title'>
                {movie["Title"]}
              </span>
              <span className='year'>
                ({movie["Year"]})
              </span>
              <p className ="shortDesc">
                <span className="rated">{movie["Rated"]}</span>
                <span className="genre">{movie["Genre"]}</span>
                <span className="etcinfo"> {movie["Country"]}</span>
                <span className="etcinfo"> -{movie["Runtime"]}</span>
              </p>
            </div>

            <div className='middle'>
              <p className='plot'>
                {movie["Plot"]}
              </p>
              <p className='sectiondesc'>
                Director: <span className='ord'>{movie["Director"]}</span>
              </p>
              <p className='sectiondesc'>
                Actors: <span className='ord'>{movie["Actors"]}</span>
              </p>
              <p className='sectiondesc'>
                Imdb Rating: <span className='ord'>{movie["imdbRating"]}</span>
              </p>

            </div>


          </div>
        </li>
      )

    });

    return(
      <ul className = 'movieList' id='imhere'>
        {listMovies}
      </ul>
    )
  }
};
