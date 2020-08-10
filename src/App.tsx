import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import CourseView from "./CourseView"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components/macro";

window.addEventListener('keydown', function (e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Nav>
          <Link to="/"><FontAwesomeIcon icon={faChevronLeft} /></Link>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Redirect to="/courses/abcd" />
          </Route>
          <Route path="/courses/:courseSlug" component={CourseView} />
        </Switch>
      </div>
    </Router >
  );
};

export default App;

const Nav = styled.nav`
  padding: 8px;
  border-bottom: black;
`