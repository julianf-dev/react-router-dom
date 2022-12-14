import { Link, Outlet } from "react-router-dom"
import { BlogLink } from "../BlogLink"
import { data } from "../BlogLink/blogData"

export const BlogPage = () => {
  return (
    <div>
      <Outlet/>
      <h1>Blog Page</h1>
      <ul>
        {data.map((post) => (
          <BlogLink key={post.slug} post={post}/>
        ))}
         <li>
      <Link to={`/blog/profile`}>profile</Link>
        </li>
      </ul>
    </div>
  )
}
