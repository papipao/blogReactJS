import Header from "../../blog/header/Header";
import Sidebar from "../../blog/sidebar/Sidebar";
import Posts from "../../blog/posts/Posts";
import "./home.css";
function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
