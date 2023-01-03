
export const LogoutPage = () => {

  const login = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <>
      <h1>Logout</h1>
      <form onSubmit={login}>
        <label htmlFor="">Sure to exit?:</label>
        <button
          type="submit"
        >
          Logout
        </button>
      </form>
    </>
  )
}
