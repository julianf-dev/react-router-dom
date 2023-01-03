import React, { useState } from "react"

export const LoginPage = () => {

  const [username, setUsername] = useState('')

  const login = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log(username)
  }


  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor="">Sure to exit?:</label>
        <input
        value={username}
        onChange={e => setUsername(e.target.value)} 
        type="text" />
        <button
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  )
}
