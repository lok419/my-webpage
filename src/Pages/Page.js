import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PersonalPage from './PersonalPage';
import ProjectPage from './ProjectPage';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const Page = () => (
  <main>
    <Switch>
      <Route exact path={process.env.PUBLIC_URL+'/'} component={HomePage}/>
      <Route path={process.env.PUBLIC_URL+'/personal'} component={PersonalPage}/>
      <Route path={process.env.PUBLIC_URL+'/projects'} component={ProjectPage}/>
    </Switch>
  </main>
)

export default Page
