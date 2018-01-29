import React from 'react';
import { connect } from 'react-redux';
import { getMovies} from '../redux/reducer';
const Movie = (props) => {
  return (
      <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
              <img src={"http://image.tmdb.org/t/p/w185"+props.Obj.poster_path} alt={props.Obj.original_title}/>
              <div className="caption">
                  <h3>{props.Name}</h3>
                  <p>{props.Obj.overview}</p>
                  <p><a href="#" className="btn btn-primary" role="button">View Detail</a></p>
              </div>
          </div>
      </div>
  );
};
const mapDispatch = {getMovies};
export default connect(null, mapDispatch)(Movie);
