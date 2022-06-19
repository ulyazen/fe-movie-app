import React from 'react'
import { useMovies } from 'src/hooks/useQuery'

export const Home = (): JSX.Element => {
  const [movies, loading] = useMovies()
  if (loading) return <p>Loading...</p>

  console.log(movies)
  return (
    <div>
      {movies?.map((movie) => {
        return movie.title
      })}
    </div>
  )
}
