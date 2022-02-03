import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1610375228550-d5cabc1d4090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
          alt=""
        />

        <h1 className="singlePostTitle">
          THIS IS SINGLEPOSTTITLE DESU!!!
          <div className="singlePostEdit">
            <i className="singPostIcon far fa-edit"></i>
            <i className="singPostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Codingbear</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>

        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eos
          et velit modi optio est rem atque iusto aliquam maxime adipisci
          eligendi maiores eveniet, blanditiis aperiam commodi iste voluptatum
          eius. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nesciunt, eos et velit modi optio est rem atque iusto aliquam maxime
          adipisci eligendi maiores eveniet, blanditiis aperiam commodi iste
          voluptatum eius. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nesciunt, eos et velit modi optio est rem atque iusto aliquam
          maxime adipisci eligendi maiores eveniet, blanditiis aperiam commodi
          iste voluptatum eius. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nesciunt, eos et velit modi optio est rem atque
          iusto aliquam maxime adipisci eligendi maiores eveniet, blanditiis
          aperiam commodi iste voluptatum eius.
        </p>
      </div>
    </div>
  );
}
