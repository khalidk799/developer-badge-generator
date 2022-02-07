import { useState, createRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "./styles.css";

export default function App() {
  const Ref = createRef();
  const [Name, setName] = useState("");
  const [URL, setURL] = useState("");
  return (
    <div className="App">
      <section>
        <h1>I am a Developer! Badge</h1>
        <h2>Type your name and get your badge!</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            exportComponentAsPNG(Ref, {
              html2CanvasOptions: { backgroundColor: null }
            });
          }}
        >
          <input
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Enter your name..."
          />
          <input
            value={URL}
            onChange={(e) => {
              setURL(e.target.value);
            }}
            type="text"
            placeholder="Enter your square image URL..."
          />
          <input type="submit" value="Download Badge" />
        </form>
      </section>
      <section>
        <div id="badgeWrapper" ref={Ref}>
          <div id="badge">
            <img
              src="https://i.ibb.co/TTTQfsx/Untitled-design-37.png"
              className="Image"
              alt="Badge"
            />
            {URL.trim().length > 0 && (
              <img src={URL} alt={Name} className="URLImage" />
            )}
            {Name.trim().length > 0 && <p>{Name}</p>}
          </div>
        </div>
      </section>
    </div>
  );
}
