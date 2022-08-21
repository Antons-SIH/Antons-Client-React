
import { Link } from "react-router-dom"

export default function AccessDenied() {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <Link
          to="/auth/login"
         
        >
          <a  onClick={(e) => {
            e.preventDefault()
          }} > You must be signed in to view this page</a>
        
        </Link>
      </p>
    </>
  )
}