import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <>
            <div>404! Not Found, Please redirect to home page</div>
            <Link to={"/"}>Back to Home Page</Link>
        </>
    )
}