import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router';
import imdbIDs from '../imdb'
import MoviesComponent from '../views/movie';
import axios from 'axios';
import Spinner from 'react-webpack-spinner'

const pagination = 10;

//const mov = {"Title":"The Shawshank Redemption","Year":"1994","Rated":"R","Released":"14 Oct 1994","Runtime":"142 min","Genre":"Crime, Drama","Director":"Frank Darabont","Writer":"Stephen King (short story \"Rita Hayworth and Shawshank Redemption\"), Frank Darabont (screenplay)","Actors":"Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler","Plot":"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.","Language":"English","Country":"USA","Awards":"Nominated for 7 Oscars. Another 19 wins & 30 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg","Metascore":"80","imdbRating":"9.3","imdbVotes":"1,725,904","imdbID":"tt0111161","Type":"movie","Response":"True"}

const MovieList = React.createClass({
  getInitialState: function() {
    return {
      movieList: [],
      imdb250list: [],
      moviecounter: 0,
      loading: true
    }
  },

  atBottom: function(event) {
      this.setState({loading: true})
      this.getContentJson(pagination, this.state.moviecounter);
  },


  componentDidMount: function(){
    if (this.state.movieList.length === 0) {
      this.getContentJson(pagination, this.state.moviecounter);
    }

  },


  getContentJson: function(pagination, moviecounter, isLoadingMore) {
    let omdUrl = 'http://www.omdbapi.com/?i=';
    let counter = moviecounter < imdbIDs.length ? moviecounter : 0

    for(let i = counter; i < counter+pagination+1; i++) {

      let apiCallUrl = omdUrl + imdbIDs[i] + '&plot=short&r=json';

      axios.get(apiCallUrl)
          .then(response => response.data).then(
            movie => {
              this.setState({
                movieList: this.state.movieList.concat([movie]),
                loading: false
              })
            }
          ).catch(function (error) {
                console.log(error);
      });
      this.setState({
        moviecounter: this.state.moviecounter += 1
      })
    }
  },


  render: function() {
        return(
        <div>
          <div className={this.state.loading ? '': 'hide'}>
              <Spinner width={32} height={32} color={'#ccc'} />
          </div>
          <MoviesComponent atBottom = {this.atBottom} movies={this.state.movieList} />
          <div className={this.state.loading ? '': 'hide'}>
            <Spinner width={32} height={32} color={'#ccc'} />
          </div>
        </div>
      )
  }
});

export default MovieList;
