function Movie (props) {
    return<div className="Movie">
    <h3>{props.movie.name}</h3>
    <p>Rating: {props.movie.rating}</p> 
    <p>Year Released: {props.movie.year}</p>
    <img src={props.movie.image} alt={props.movie.image}/>
    </div>
}

export default Movie;