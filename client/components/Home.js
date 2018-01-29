import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPopularMovie, getSearchResult } from '../redux/reducer';
import Movie from './Movie';
class Home extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getPopularMovie();
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">Movie UI</a>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="input-group">
                <form onSubmit={evt => {
                       evt.preventDefault();
                       this.props.getSearchResult(evt.target.searchValue.value);
                       evt.target.searchValue.value = "";}}>
                     <div className="form-group">
                      <label for="exampleInputEmail1">Search your movie</label>
                     </div>
                  <input type="text" name="searchValue" className="form-control" placeholder="Search for..."/>
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">Go!</button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {
            this.props.movies && this.props.movies.map((movie) => {
              return (
                <Movie key={movie.id} Obj={movie} Name={movie.original_title}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}
const mapState = ({movies}) => ({movies});
const mapDispatch = { getPopularMovie, getSearchResult};
export default connect(mapState, mapDispatch)(Home);
