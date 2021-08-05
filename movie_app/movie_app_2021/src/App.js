import React from 'react';
// import PropTypes from "prop-types";
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies_1 : []
  }

// render()하면 호출되는 life cycle method
  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    // console.log(movies.data.data.movies)
    console.log(movies)
    // this.setState({movies_1:movies})
    this.setState({movies, isLoading: false})
  }
  componentDidMount() {
    this.getMovies()
  }

  render() {
    const {isLoading, movies} = this.state
    return (
    <sectios class="container">
      {isLoading ? (
        <div class="loader">
        <span class="loader__text">Loading...</span>
        </div>
      ) : (
        <div class="movies">
          {movies.map(movie => (
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
        />
      ))}
    </div>
    )}
    </sectios>)
  }
}

export default App;