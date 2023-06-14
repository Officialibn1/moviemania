/* eslint-disable react/prop-types */

const Movie = ({dummyMovie}) => {
    return (
        <div className="movie">
            <div>
              <p>{dummyMovie.Year}</p>
            </div>

            <div>
              <img 
                src={dummyMovie.Poster !== 'N/A' ? dummyMovie.Poster : 'https://via.placeholder.com/400'} 
                alt={dummyMovie.Title} />
            </div>

            <div>
              <span>{dummyMovie.Type}</span>

              <h3>{dummyMovie.Title}</h3>
            </div>
          </div>    
    );
}

export default Movie;
