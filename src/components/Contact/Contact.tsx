import Title from "../Helpers/Title";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="form ">
      <Title title={"Contact Section"} />
      <form className="form-container">
        <div className="form-group">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input type="text" id="fname" name="fname" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input type="text" id="lname" name="lname" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input type="number" id="age" name="age" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" id="email" name="email" className="form-input" />
        </div>
        <div className="form-action">
          <button type="button" className="form-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
