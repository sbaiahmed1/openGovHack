import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router'
import Carousel from "./components/carousel/carousel";
import Landing from "./views/landing/landing";
import Signup from "./views/signup/signup";
import Signin from "./views/signin/signin";
import Demande_subv from "./views/demande_subv/demande_subv";

class App extends Component{
  render() {
      return (
          <div>
              <Router history={browserHistory}>
                  <Route exact path="/" component={Landing} />
                  <Route path="/add-course" component={Demande_subv} />
                  {/*<Route path="/display-item" component={ButtonAppBar} />*/}
                  {/*<Route path="/edit" component={FileUpload} />*/}
                  <Route path={'/login'} component={Signin}/>
                  <Route path={'/signup'} component={Signup}/>
                  {/*<Route path={'/all-courses'} component={ViewAllCourses}/>*/}
              </Router>
          </div>

      );
  }

}

export default App;
