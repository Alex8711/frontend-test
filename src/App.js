import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header  from './components/shared/Header/Header'
import HomePage from './screens/HomePage/HomePage'
import CourseSummaryStudent from './components/CourseSummaryStudent/CourseSummaryStudent'
import CourseSummaryInstructor from './components/CourseSummaryInstructor/CourseSummaryInstructor'
import HomeworkSummaryStudent from './components/HomeworkSummaryStudent/HomeworkSummaryStudent';
const App=()=> {
  return (
    <>
     <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} /> 
          <Route path="/student" exact component={CourseSummaryStudent} /> 
          <Route path="/instructor" exact component={CourseSummaryInstructor} /> 
          <Route path="/studenthomework" exact component={HomeworkSummaryStudent} /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
