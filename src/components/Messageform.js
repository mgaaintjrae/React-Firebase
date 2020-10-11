import React from "react";

export default function Messageform() {
  return (
    <form className="message-form-container">
      <div className="message-form">
        <div>
          <img
            src="https://avatars0.githubusercontent.com/u/49270171?s=460&u=b97ff4e2e67d73f4238d733e6973b26cf2eae63b&v=4"
            alt="Profil"
            className="profil-picture"
          />
        </div>
        <textarea name="message" placeholder="Quoi de neuf ?" />
      </div>
      <footer>
        <p>280</p>
        <button type="submit">Tweeter</button>
      </footer>
    </form>
  );
}
