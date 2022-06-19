import React from 'react'

import _ from 'lodash'

import { useMovies } from 'src/hooks/use-movie'

export const Home = (): JSX.Element => {
  //   const [auth, loadingAuth] = useAuth()

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
