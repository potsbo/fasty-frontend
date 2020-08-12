import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import CourseView from "./CourseView";
import VirtualKeyboard from "./VirtualKeyboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCode, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components/macro";
import { KeyboardContext, Config, defaultConfig } from "./KeyboardConfiguration";
import Modal from "react-modal";

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 32 && e.target === document.body) {
    e.preventDefault();
  }
});

const App: React.FC = () => {
  const [showKeyConfig, setShowKeyConfig] = useState(true);
  const [config, setConfig] = useState(defaultConfig);
  const onUpdateKeyboardConfig = (c: Config) => {
    setConfig(c);
  };
  return (
    <KeyboardContext.Provider value={config}>
      <Router>
        <div>
          <Nav>
            <Link to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <button
              style={{ marginLeft: "auto" }}
              onClick={() => {
                setShowKeyConfig(true);
              }}
            >
              <FontAwesomeIcon icon={faKeyboard} />
            </button>
            <a style={{ marginLeft: "auto" }} href="https://github.com/potsbo/fasty-frontend">
              <FontAwesomeIcon icon={faCode} />
            </a>
          </Nav>

          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Redirect to="/courses/abcd" />
            </Route>
            <Route path="/courses/:courseSlug" component={CourseView} />
            <Route path="/try">
              <VirtualKeyboard onUpdateKeyboardConfig={onUpdateKeyboardConfig} />
            </Route>
          </Switch>
        </div>
        <StyledModal
          isOpen={showKeyConfig}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => {
            setShowKeyConfig(false);
          }}
        >
          <VirtualKeyboard onUpdateKeyboardConfig={onUpdateKeyboardConfig} />
        </StyledModal>
      </Router>
    </KeyboardContext.Provider>
  );
};

export default App;

const Nav = styled.nav`
  padding: 8px;
  border-bottom: black;
  display: flex;
`;

const StyledModal = styled(Modal)`
  height: 600px;
  width: 800px;
  margin: auto;
  background-color: white;
  box-shadow: 0px 0px 10px 4px #dddddd;

  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
  overflow: auto;
  border-radius: 16px;
  outline: none;
  padding: 20px;
`;
