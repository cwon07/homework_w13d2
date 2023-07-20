import Movie from './Movie'

function Movies (props) {
    return <div className="Movies">This is Movies
    {props.movies.map((item, index) => (<Movie movie={item} key={item.name}/>
    ))}
    </div>
}

export default Movies;