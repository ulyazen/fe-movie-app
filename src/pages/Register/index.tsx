import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useSignup } from 'src/hooks/useMuation'
import { useAuth } from 'src/hooks/useQuery'

export const Register = (): JSX.Element => {
  const navigate = useNavigate()

  const [auth, loadingAuth] = useAuth()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(null)
  const [signup, loading] = useSignup()

  if (!loadingAuth && auth) {
    navigate('/profile')
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    try {
      const isSuccess = await signup({ name, username, password })
      if (isSuccess) {
        navigate('/profile')
      }
    } catch (err: any) {
      setErrors(err.graphQLErrors)
    }
  }

  const handleBack = () => {
    navigate('/')
  }

  const allFieldsFilled = !name || !username || !password

  return (
    <>
      {loading ? (
        'Loading'
      ) : (
        <div>
          <input
            id="name"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <input
            id="Username"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
          <input
            id="password"
            placeholder="Password"
            type={'password'}
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          <button onClick={handleSubmit} disabled={allFieldsFilled}>
            Sing Up
          </button>
          <button onClick={handleBack}>Back</button>
        </div>
      )}
    </>
  )
}

export default Register
