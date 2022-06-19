import { map } from 'lodash'
import React from 'react'
import { useUser, useUsers } from 'src/hooks/useQuery'
const logout = () => localStorage.clear()

export const Profile = (): JSX.Element => {
  const [user, userLoading] = useUser()
  const [users, usersLoading] = useUsers()
  if (userLoading) return <p>Loading...</p>

  console.log(user)
  return (
    <>
      <div>{user?.name}</div>
      <button onClick={logout}>Logout</button>
      {users?.map((users) => {
        return users.name
      })}
    </>
  )
}
