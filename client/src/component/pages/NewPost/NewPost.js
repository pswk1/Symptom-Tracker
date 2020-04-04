import React, { useState, Fragment } from "react";
import "./NewPost.css";
import API from "../../../utils/API";
import { Link, Redirect } from "react-router-dom";

function NewPost() {

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [toLandingPage, setToLandingPage] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const symptoms = [{type: "Headache", severity: 9}]
    API.savePost({ title, description, symptoms});
    setToLandingPage(true);
  }

  

  return (
    <Fragment>
      {toLandingPage ? <Redirect to='/landing-page' /> : null}
      <h1 className="mt-5">Create A New Entry</h1>
      <form>
        <div className="row my-5">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Title"
              name="Title"
              onChange={e => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="col-sm-3"></div>
        </div>

        <div className="row mb-5">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <textarea
              className="form-control"
              id="description"
              rows="8"
              placeholder="Describe your symptoms in a few sentences."
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="col-sm-3"></div>
        </div>

        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
              ></input>
              <label className="form-check-label">Symptom 1</label>
            </div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
              ></input>
              <label className="form-check-label">Symptom 2</label>
            </div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
              ></input>
              <label className="form-check-label">Symptom 3</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
              ></input>
              <label className="form-check-label">Symptom 4</label>
            </div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
              ></input>
              <label className="form-check-label">Symptom 5</label>
            </div>
            <Link to="/landing-page"><button onClick={handleSubmit} className="btn btn-primary">Submit</button></Link>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </form>
    </Fragment>
  );
}

export default NewPost;
