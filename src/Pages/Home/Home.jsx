import React from "react";
import Stories from "../../Components/Stories/Stories";
import Posts from "../../Components/Posts/Posts";

import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  );
}

export default Home;
