import { Alert, CloseButton } from "react-bootstrap";
import { useState } from "react";
import CustNavbar from "../components/CustNavbar";
import CustAccordion from "../components/CustAccordion";

import { Outlet } from "react-router-dom";

function SharedLayout() {
  const [show2, setShow2] = useState(true);

  return (
    <>
      <CustNavbar />
      <div className="space-for-nav"></div>
      <div className="alerts">
        {show2 === true ? (
          <Alert
            style={{
              backgroundColor: "#7138d6",
              border: "none",
              color: "white",
            }}
            className="w-50 m-auto"
          >
            <CloseButton onClick={(e) => setShow2(false)} />
            <Alert.Heading>Hi 👻, Welcome to our web app</Alert.Heading>
            <p>
              This is made using react 👏, react-bootstrap ✔ and with lots of
              efforts🙇‍♂️. Many Features✨ are yet to be implemented. Thank you❤
              for visiting us.
            </p>
            <hr />
          </Alert>
        ) : null}
      </div>
      <div className="partition">
        <div className="left">
          <CustAccordion />
        </div>
        <Outlet />
        {/* <div className="center">
        </div> */}
      </div>
    </>
  );
}

export default SharedLayout;
