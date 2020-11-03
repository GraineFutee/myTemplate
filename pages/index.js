export default function Home() {
  return (
    <>
      <section
        className="hero is-dark is-medium"
        style={{
          backgroundImage: "url(/bg.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Templatew</h1>
            <h2 className="subtitle">By Pierre ASDRUBAL</h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="box my-6">
            <h3 className="title is-3">This template contains</h3>
            <div className="content">
              <ul>
                <li>NextJS</li>
                <li>Bulma (with a Sass configuration)</li>
                <li>FontAwesome</li>
                <li>FramerMotion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="hero is-dark is-small">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="has-text-light">
              <small>&#169; Pierre ASDRUBAL 2020</small>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
