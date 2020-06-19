import React from "react";
import NavigationBar from "./NavigationBar";
import CategoryCard from "./CategoryCards";

function Home() {
  return (
    <div className="Home">
      <NavigationBar />
      <CategoryCard />
    </div>
  );
}

export default Home;
