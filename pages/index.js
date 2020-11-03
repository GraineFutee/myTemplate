import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(null);
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
            <h1 className="title">Easy Dew</h1>
            <h2 className="subtitle">Beat Challenges</h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="box my-6">
            <h3 className="title is-3">[Challenge Name]</h3>
            <p className="subtitle has-text-primary">
              xx Hours left / xx Application remainings
            </p>
            <p>
              [Challenge description] Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Consectetur ratione vitae voluptate fugiat animi
              aliquid, cupiditate aperiam necessitatibus blanditiis provident
              beatae, atque alias nostrum id cumque magnam obcaecati tempora
              sunt.
            </p>
            <hr />
            <div className="buttons is-centered">
              <button className="button is-primary">
                <span>Download Material</span>
                <span className="icon">
                  <i className="fas fa-box"></i>
                </span>
              </button>
              <button className="button is-info" onClick={() => setModal(true)}>
                <span>Upload Application</span>
                <span className="icon">
                  <i className="fas fa-upload"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="box my-6">
            <h3 className="title is-3">[Challenge Name]</h3>
            <p className="subtitle has-text-danger">
              0 Hours left / 0 Application remainings
            </p>
            <p>
              [Challenge description] Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Consectetur ratione vitae voluptate fugiat animi
              aliquid, cupiditate aperiam necessitatibus blanditiis provident
              beatae, atque alias nostrum id cumque magnam obcaecati tempora
              sunt.
            </p>
            <hr />
            <p className="title is-5 has-text-centered">Winners</p>
            <div className="columns">
              <div className="column is-4">
                <div className="box has-text-centered">
                  <p>
                    [Winner name] -{" "}
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </p>
                  <audio controls>
                    <source src="exemple.mp3" type="audio/ogg" />
                    <source src="exemple.mp3" type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </audio>
                </div>
              </div>
              <div className="column is-4">
                <div className="box has-text-centered">
                  <p>
                    [Winner name] -{" "}
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </p>
                  <audio controls>
                    <source src="exemple.mp3" type="audio/ogg" />
                    <source src="exemple.mp3" type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </audio>
                </div>
              </div>
              <div className="column is-4">
                <div className="box has-text-centered">
                  <p>
                    [Winner name] -{" "}
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </p>
                  <audio controls>
                    <source src="exemple.mp3" type="audio/ogg" />
                    <source src="exemple.mp3" type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </audio>
                </div>
              </div>
            </div>
          </div>
          <div className="box my-6">
            <h3 className="title is-3">[Challenge Name]</h3>
            <p className="subtitle has-text-danger">
              0 Hours left / 0 Application remainings
            </p>
            <p>
              [Challenge description] Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Consectetur ratione vitae voluptate fugiat animi
              aliquid, cupiditate aperiam necessitatibus blanditiis provident
              beatae, atque alias nostrum id cumque magnam obcaecati tempora
              sunt.
            </p>
            <hr />
            <p className="title is-5 has-text-centered">Winners</p>
            <div className="columns">
              <div className="column is-4">
                <div className="box has-text-centered">
                  <p>
                    [Winner name] -{" "}
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </p>
                  <audio controls>
                    <source src="exemple.mp3" type="audio/ogg" />
                    <source src="exemple.mp3" type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </audio>
                </div>
              </div>
              <div className="column is-4">
                <div className="box has-text-centered">
                  <p>
                    [Winner name] -{" "}
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </p>
                  <audio controls>
                    <source src="exemple.mp3" type="audio/ogg" />
                    <source src="exemple.mp3" type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </audio>
                </div>
              </div>
              <div className="column is-4">
                <div className="box has-text-centered">
                  <p>
                    [Winner name] -{" "}
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </p>
                  <audio controls>
                    <source src="exemple.mp3" type="audio/ogg" />
                    <source src="exemple.mp3" type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="hero is-dark is-small">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title is-5">Contact</p>
            <p>[Mail address]</p>
            <p className="mt-2 has-text-light">
              <small>&#169; Easy Dew 2020</small>
            </p>
          </div>
        </div>
      </footer>
      <div className={`modal ${modal && "is-active"}`}>
        <div className="modal-background" onClick={() => setModal(null)}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Upload Application</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => setModal(null)}
            ></button>
          </header>
          <section className="modal-card-body">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Name</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input className="input" type="text" />
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Instagram Link</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input className="input" type="text" />
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="buttons is-centered">
              <button className="button is-dark">Upload file</button>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-info">Upload</button>
            <button className="button" onClick={() => setModal(null)}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
