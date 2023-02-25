// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, author, title, imageUrl, avatarUrl, topic} = blogData
  return (
    <Link to={`/blogs/${id}`}>
      <li className="blog-item">
        <img src={imageUrl} className="image" alt="topic" />
        <div className="blog-item-content">
          <p className="desc">{topic}</p>
          <h1 className="heading">{title}</h1>
          <div className="user-container">
            <img src={avatarUrl} className="avatar" alt={author[0]} />
            <p className="desc">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
