import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useLogin } from 'src/hooks/useMuation'
import { useAuth } from 'src/hooks/useQuery'

export const Login = (): JSX.Element => {
  const navigate = useNavigate()

  const [auth, loadingAuth] = useAuth()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(null)
  const [login, loading] = useLogin()

  if (!loadingAuth && auth) {
    navigate('/profile')
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    try {
      const isSuccess = await login({ username, password })
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

  const allFieldsFilled = !username || !password

  return (
    <>
      {loading ? (
        'Loading'
      ) : (
        <div>
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
            Login
          </button>
          <button onClick={handleBack}>Back</button>
        </div>
      )}
    </>
  )
}

export default Login
