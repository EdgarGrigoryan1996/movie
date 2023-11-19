export const getMovieDuration = (second) => {
    let s = +second
    let h = Math.floor((s/60)/60)
    let m = Math.floor((s/60) - (h*60))
    if(h>0){
        return `${h}h ${m}m`
    } else {
        return `${m}m`
    }
}

export const sortTrendingMovies = (movies, id) => {
    if(!id){
        return movies.reverse().slice(0,50)
    } else {
        let index = movies.findIndex((movie) => {
            return movie.Id === id

        })
        let start = movies.slice(index,movies.length -1)
        let end = movies.slice(0,index)
        let sortedMovies = [...start,...end]
        return sortedMovies.slice(0,50)
    }
}