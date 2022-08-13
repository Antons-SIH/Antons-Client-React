import { signIn } from "next-auth/react"
import Link from "next/link"

export default function AccessDenied() {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <Link
          href="/auth/login"
         
        >
          <a  onClick={(e) => {
            e.preventDefault()
            signIn()
          }} > You must be signed in to view this page</a>
        
        </Link>
      </p>
    </>
  )
}