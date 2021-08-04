import React from 'react';
// import PropTypes from "prop-types";
import axios from 'axios';
import Movie from './Movie';

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
    <div>
      {isLoading ? "Loading" :
      movies.map(movie=>(
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
        />
      ))}
    </div>)
  }
}

export default App;