import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://item.kakaocdn.net/do/c1f776f003575a391f19f13ccac145a682f3bd8c9735553d03f6f982e10ebe70"
          alt=""
        />
        <p>
          Hello! My name is Kang Myeongmo. I lived in Busan, South Korea. Nice
          to meet you!
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {/* window sizeªË?ªÃªÆ«µ«¤«ºðàïÚ */}
          <li className="sidebarListItem">Programming</li>
          <li className="sidebarListItem">Books</li>
          <li className="sidebarListItem">Reviews</li>
          <li className="sidebarListItem">Cooking</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
