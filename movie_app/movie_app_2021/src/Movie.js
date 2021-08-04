import React from 'react';
import PropTypes from 'prop-types';

// component가 state가 필요 없을경우 class일필요X -> function사용
function Movie({id,year,title,summary,poster}){
  return <h4>{title}</h4>
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}

export default Movie