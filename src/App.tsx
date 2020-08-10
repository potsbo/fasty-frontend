import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CourseView from "./CourseView"
import abcd from "./courses"

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses/abcd">A Basic Course in Dvorak</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/courses/abcd">
            <CourseView course={abcd} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
