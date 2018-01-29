import axios from "axios";
/////////////////CONSTANTS/////////////////////
const GET_POPULAR = "GET_POPULAR";

/////////////////ACTIONS//////////////
const getMovies = (movies) => ({type: GET_POPULAR, movies});

/////////////////REDUCER/////////////////////
//initiate your starting state
let initial = {
  movies: []
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case GET_POPULAR:
      return Object.assign({}, state, {movies: action.movies.results});
    default:
      return state;
  }
};
export default reducer;

/////////////// ACTION DISPATCHER FUNCTIONS///////////////////
export const getPopularMovie = () => dispatch => {
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5b19221d20b929615d236692cea743e4&language=en-US&page=1`)
    .then((response) => {
      dispatch(getMovies(response.data))
      return response.data;
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

export const getSearchResult = (query) => dispatch => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5b19221d20b929615d236692cea743e4&query=`+query)
        .then((response) => {
            dispatch(getMovies(response.data))
            return response.data;
        })
        .catch((err) => {
            console.error.bind(err);
        })
};
