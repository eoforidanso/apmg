import { BLOG_POSTS } from "../data.js";

export default function Blog() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Blog</span>
        <h1>Insights on mental wellness</h1>
        <p>Perspectives from our clinical team on psychiatric care and advanced treatment options.</p>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          {BLOG_POSTS.map((post) => (
            <div className="card" key={post.title}>
              <span className="placeholder-tag" style={{ marginLeft: 0, marginBottom: 8 }}>
                Placeholder
              </span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <p style={{ fontSize: "0.85rem" }}>{post.date}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
