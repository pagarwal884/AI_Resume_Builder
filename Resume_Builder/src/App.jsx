import { useUser } from "@clerk/react"
import { Navigate, Outlet } from "react-router-dom"


const App = () => {
  const { isLoaded, isSignedIn } = useUser()

  if (!isLoaded) {
    return null
  }

  if (!isSignedIn) {
    return <Navigate to="/auth/sign-in" />
  }

  return <Outlet />
}

export default App
