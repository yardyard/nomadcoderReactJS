import PropTypes from "prop-types";

function Movie({coverImage, title, summary, genres}){
    return (
    <div>
        <img src={coverImage} alt={title} />
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
            This movies genre is
            {genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
    </div>
    )
}

Movie.propTypes = {
    // coverImage는 string type을 필수로 가져야 한다.
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;