import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPopularMovie, getSearchResult } from '../redux/reducer';
import Movie from './Movie';
class Home extends Component {

  constructor(props){
    super(props);
    this.viewData = this.viewData.bind(this);
    this.state = {
      viewData:[]
    };
  }
  componentDidMount(){
    this.props.getPopularMovie();
  }
  viewData(data) {
    console.log("******data", data)
    this.setState({
      viewData : data
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">MovieUI</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div className="container">
            <div className="input-group">
              <form className="form-inline" onSubmit={evt => {
                     evt.preventDefault();
                     this.props.getSearchResult(evt.target.searchValue.value);
                     evt.target.searchValue.value = "";}
                   }>
                  <input type="text" name="searchValue" className="form-control" placeholder="Search for..."/>
                  <button className="btn btn-primary" type="submit">Search</button>
              </form>
            </div>
        </div>
        <div className="container">
          <h2>{this.props.title}</h2>
          <div className="row">
            {
              this.props.movies && this.props.movies.map((movie) => {
                return (
                  <Movie key={movie.id} Obj={movie} Name={movie.original_title} viewData={this.viewData} data={movie}/>
                )
              })
            }
          </div>
        </div>
        <div className="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{ this.state.viewData.original_title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-center">
                <img className="img-fluid" src={this.state.viewData.poster_path ?"http://image.tmdb.org/t/p/w185"+this.state.viewData.poster_path : ""} alt={this.state.viewData.original_title}/>
              </div>
              <div className="modal-body">
                <p>{this.state.viewData.overview}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapState = ({movies, title, modalData}) => ({movies, title, modalData});
const mapDispatch = { getPopularMovie, getSearchResult};
export default connect(mapState, mapDispatch)(Home);
