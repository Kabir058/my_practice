function filterLongMovies(movies, durationLimit) {
  return movies.filter(duration => duration > durationLimit);
}


console.log(filterLongMovies([95, 120, 145, 78, 134], 100)); // [120, 145, 134]
