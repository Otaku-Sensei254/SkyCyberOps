import { blogPosts } from "../components/Services/blog";
import "../styles/blog.css";
import Img from "../assets/download.jpg";

function BlogPage() {
  return (
    <div className="blog-container">
      <h1>Our Blog</h1>
      <div className="blogGrid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="up">
              <h2>{post.title}</h2>
              <div className="author">
                <p>
                  <strong>By:</strong> {post.author} | {post.date}
                </p>
              </div>
            </div>
            <br />
            <p>{post.summary}</p>
            <p>
              <br></br>
              <em>Tags:</em> {post.tags.join(", ")}
            </p>
            <text>
              <strong>Protect Tips: </strong>
              {post.protectTips}
            </text>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BlogPage;
