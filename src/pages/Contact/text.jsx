import React from "react";
import { useDispatch } from "react-redux";
import { updateEmailTemplate } from "../../redux/actions";

const Text = () => {
  const emailTemplate = {
    general: "general_template_qu7pwha",
    work: "work_template_07lourr",
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className="contact-wraper">
        <div className="contact-wraper-top">
          <div className="title">Contact</div>
          <p>
            Feel free to contact me for business, fun, or anything else! Use the
            form or contact me on my social medias bellow.
          </p>
          <div className='object-strong'>Connect with Nestor:</div>
        </div>
        <div className="contact-wraper-bottom">
          <div className="object-select">Select an object*</div>
          <div className="section">
            <label className="email-object-label">
              <input
                type="radio"
                name="email object"
                value={emailTemplate.general}
                className="email-object-input"
                onChange={(e) => {
                  dispatch(updateEmailTemplate(e.target.value));
                }}
              />
              <span className="design"></span>
              <span className="text">General inquiry</span>
            </label>

            <label className="email-object-label">
              <input
                type="radio"
                name="email object"
                value={emailTemplate.work}
                className="email-object-input"
                onChange={(e) => {
                  dispatch(updateEmailTemplate(e.target.value));
                }}
              />
              <span className="design"></span>
              <span className="text">Web development</span>
            </label>
            <label className="email-object-label">
              <input
                type="radio"
                name="email object"
                value={emailTemplate.work}
                className="email-object-input"
                onChange={(e) => {
                  dispatch(updateEmailTemplate(e.target.value));
                }}
              />
              <span className="design"></span>
              <span className="text">Design</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Text;
