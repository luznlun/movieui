import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateView} from '../redux/reducer';
class Movie extends Component {
  constructor(props){
    super(props);
    this.viewChange = this.viewChange.bind(this);
  }
  viewChange(){
      this.props.viewData(this.props.data);
  }

  render() {
    return (
      <div className="col-sm-6 col-md-4">
        <div className="card mb-3">
          <h3 className="card-header">{this.props.data.original_title}</h3>
          <img className="img-fluid" src={"http://image.tmdb.org/t/p/w185"+this.props.data.poster_path} alt={this.props.data.original_title}/>
          <div className="card-body">
            <p>{this.props.data.overview}</p>
          </div>
          <div className="card-body">
            <button className="btn btn-primary" role="button" data-toggle="modal" data-target="#myModal" onClick={this.viewChange}>View Detail</button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatch = {updateView};
export default connect(null, mapDispatch)(Movie);
