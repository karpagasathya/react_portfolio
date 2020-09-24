import React from "react";
import resume from "../assets/images/sathyaresume.pdf";

const ResumeModal = () => {
  console.log("coming inside resume modal");
  return (
    <div id="resume-modal" className="uk-flex-top" uk-modal="true">
      <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <button className="uk-modal-close-default" type="button" uk-close="true"></button>
        <p>
          <embed src={resume} type="application/pdf" width="100%" height="600px" />
        </p>
      </div>
    </div>
  );
};

export default ResumeModal;
