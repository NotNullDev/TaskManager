import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom"

import Navbar from "./components/Navbar";
import Groups from "./components/Groups";

import { GroupsProvider } from "./data/data";

const Tasks = () => {
  const { group } = useParams();
  return <div>{group.id}</div>
}

function App() {

  return (
    <GroupsProvider>
      <div className="App">
        <Navbar />
        <main>
          <div className="main-container">
            <Router>
              <Switch>
                <Route exact path="/" component={Groups} />
                <Route path="/:id/tasks" component={Tasks} />
              </Switch>
            </Router>
          </div>
        </main>
      </div>
    </GroupsProvider>
  );
}

export default App;
