import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.unsplash.com/photo-1612099452850-ed8efe7d58ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="writeIcon fas fa-file-upload"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input className="writeInput" type="text" placeholder="Title" />
        </div>

        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            type="text"
            placeholder="Tell your story..."
          ></textarea>
        </div>

        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
