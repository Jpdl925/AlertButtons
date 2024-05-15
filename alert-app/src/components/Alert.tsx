import { useState } from "react";

const Alert = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="btnContainer">
        <div className="allcontainer">
        {show ? (
          <div
            className="alertShown alert alert-primary alert-dismissible"
            role="alert"
          >
            <div>CONGRATZ! YOU CLICKED IT!</div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setShow(!show)}
            ></button>
          </div>
        ) : null}

        <button className="showBtn" onClick={() => setShow(!show)}>
          Show
        </button>
      </div>

        </div>
    </>
  );
};

export default Alert;
