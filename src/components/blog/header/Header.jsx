import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="header--title">
        <span className="header--titleSm">React & Node</span>
        <span className="header--titleLg">Blog</span>
      </div>
      <img
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        className="header--img"
      />
    </div>
  );
}

export default Header;
