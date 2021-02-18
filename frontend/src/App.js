import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Groups from "./components/Groups";

import { GroupsProvider } from "./data/data";


function App() {
  const initData = () => { };

  useEffect(() => {
    initData();
  }, [])

  return (
    <GroupsProvider>
      <div className="App">
        <Navbar />
        <main>
          <div className="main-container">
            {/* <Groups /> */}
          </div>
        </main>
      </div>
    </GroupsProvider>
  );
}

export default App;
