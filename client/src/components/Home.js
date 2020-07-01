import React from "react";
import NavigationBar from "./NavigationBar";
import CategoryCard from "./CategoryCards";
import Business from './BusinessPage'

function Home() {
  return (
    <div className="Home">
      <NavigationBar />
      {/* <CategoryCard /> */}
      <Business />
    </div>
  );
}

export default Home;
