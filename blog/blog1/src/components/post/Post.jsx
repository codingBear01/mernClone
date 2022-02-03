import "./post.css";

export default function post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1531564701487-f238224b7ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
      />

      <div className="postInfo">
        <div className="PostCats">
          <span className="postCat">Programming</span>
          <span className="postCat">Books</span>
          <span className="postCat">Reviews</span>
          <span className="postCat">Cooking</span>
        </div>

        <span className="postTitle">THIS IS POSTTITLE!!!</span>

        <span className="postDate">1 hour ago</span>
      </div>

      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque
        nihil sunt rem eveniet voluptatum commodi cupiditate quibusdam ratione
        suscipit? Tenetur laboriosam libero ducimus exercitationem iure rem odit
        cumque minima? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quasi itaque nihil sunt rem eveniet voluptatum commodi cupiditate
        quibusdam ratione suscipit? Tenetur laboriosam libero ducimus
        exercitationem iure rem odit cumque minima? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quasi itaque nihil sunt rem eveniet
        voluptatum commodi cupiditate quibusdam ratione suscipit? Tenetur
        laboriosam libero ducimus exercitationem iure rem odit cumque minima?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque
        nihil sunt rem eveniet voluptatum commodi cupiditate quibusdam ratione
        suscipit? Tenetur laboriosam libero ducimus exercitationem iure rem odit
        cumque minima? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quasi itaque nihil sunt rem eveniet voluptatum commodi cupiditate
        quibusdam ratione suscipit? Tenetur laboriosam libero ducimus
        exercitationem iure rem odit cumque minima?
      </p>
    </div>
  );
}
