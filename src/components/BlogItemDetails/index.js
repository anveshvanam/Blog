import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetailsData()
  }

  getBlogDetailsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedBlog = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogData: updatedBlog, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogData, isLoading} = this.state
    const {title, id, imageUrl, avatarUrl, author, content, topic} = blogData

    return (
      <div className="blog-item">
        <h1 className="heading">{title}</h1>
        <div className="user-container">
          <img src={avatarUrl} className="avatar" />
          <p className="desc">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="image" />
        <p className="blog-item-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
