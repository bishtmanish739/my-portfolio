import React from "react";
import "./Home.css";

function Home() {
  return (
    <header className="home">
      <div className="content">
        <h1>Mahavir Singh</h1>
        <p>Java Full Stack Developer | Spring Boot | Angular | React</p>
        <a href="/contact" className="btn btn-primary">
          Contact Me
        </a>
      </div>
    </header>
  );
}

export default Home;
