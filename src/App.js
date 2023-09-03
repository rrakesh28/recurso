import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard from "./pages/user/Dashboard";
import Books from "./pages/user/Books";
import Subject from "./pages/user/Subject";
import Chapters from "./pages/user/Chapters";
import Topics from "./pages/user/Topics";

import AboutUs from "./pages/aboutus";
import Terms from "./pages/termsofuse";
import Copyright from "./pages/copyright";
import PrivacyPolicy from "./pages/privacypolicy";

import AdminCourses from "./pages/admin/courses";
import Subjects from "./pages/admin/subjects";
import AdminChapters from "./pages/admin/chapters";
import AdminTopics from "./pages/admin/topics";
import GetSubject from "./pages/admin/getsubject";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/Login">
          <Login />
        </Route>

        <Route path="/Books">
          <Books />
        </Route>

        <Route path="/subject/:subjectId">
          <Subject />
        </Route>

        <Route path="/chapters">
          <Chapters />
        </Route>

        <Route path="/topics">
          <Topics />
        </Route>

        <Route path="/Signup">
          <Signup />
        </Route>

        <Route path="/Menu">
          <Menu />
        </Route>

        <Route path="/aboutus">
          <AboutUs />
        </Route>

        <Route path="/termsofuse">
          <Terms />
        </Route>

        <Route path="/copyright">
          <Copyright />
        </Route>

        <Route path="/privay-policy">
          <PrivacyPolicy />
        </Route>

        <Route path="/admin/courses">
          <AdminCourses />
        </Route>

        <Route path="/admin/subjects/:courseId">
          <Subjects />
        </Route>

        <Route path="/admin/chapters">
          <AdminChapters />
        </Route>
        <Route path="/admin/topics">
          <AdminTopics />
        </Route>

        <Route path="/admin/getsubject">
          <GetSubject />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
