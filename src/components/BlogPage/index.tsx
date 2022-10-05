import { BlogLink } from "../BlogLink"
import { data } from "../blogData"

export const BlogPage = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {data.map((post) => (
          <BlogLink key={post.id} post={post}/>
        ))}
      </ul>
    </div>
  )
}
