import React from 'react';
import {Link, Router, Route, browserHistory} from 'react-router'
import navbar from "./components/navbar/navbar";
function App() {
  return (
      <div>
          <Router history={browserHistory}>
              <Route exact path="/" component={navbar} />
              {/*<Route path="/add-course" component={AddCourse} />*/}
              {/*<Route path="/display-item" component={ButtonAppBar} />*/}
              {/*<Route path="/edit" component={FileUpload} />*/}
              {/*<Route path={'/login'} component={Login}/>*/}
              {/*<Route path={'/signup'} component={Register}/>*/}
              {/*<Route path={'/all-courses'} component={ViewAllCourses}/>*/}
          </Router>
      </div>

  );
}

export default App;
