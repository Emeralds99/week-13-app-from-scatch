import React from 'react'

const IMAGE_API = 'https://image.tmdb.org/t/p/w1280'

const setVoteClass = (vote) => {
    if(vote >= 8) {
        return 'green'
    } else if (vote >= 6) {
        return 'orange'
    } else {
        return 'red'
    }
}

const BrowseMovie = ({ title, poster_path, overview, vote_average}) => (
    <div className="browseMovie">
        <img src={poster_path ? IMAGE_API + poster_path : 'https://static.bhphoto.com/images/images750x750/1587735945_1555914.jpg'} alt={title} />
        <div className="browse-movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>
                {vote_average}</span>
        </div>
        <div className="movie-overview">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
)

export default BrowseMovie