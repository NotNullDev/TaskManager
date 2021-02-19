import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom"

import Navbar from "./components/Navbar";
import Groups from "./components/Groups";
import Tasks from "./components/Tasks"
import TaskDetails from "./components/TaskDetails"

import { GroupsProvider } from "./data/data";



function App() {

  return (
    <GroupsProvider>
      <div className="App">
            <Router>
        <Navbar />
        <main>
          <div className="main-container">
              <Switch>
                <Route exact path="/" component={Groups} />
                <Route exact path="/:id/tasks" component={Tasks} />
                <Route exact path="/:id/tasks/:task_id" component={TaskDetails} />
              </Switch>
          </div>
        </main>
            </Router>
      </div>
    </GroupsProvider>
  );
}

export default App;
