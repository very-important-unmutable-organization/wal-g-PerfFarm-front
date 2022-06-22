import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {SignupForm} from "./components/signup-form";
// import {LoginForm} from "./components/login-form";
import {RunsPage} from "./pages/runs-page";
import React, {useState} from "react";
import {Header} from "./components/header";
// import {RunTaskForm} from "./components/run-task-form";
import {RunPage} from "./pages/run-page";
// import {UserContext} from "./components/utils/userContext";
import {browserHistory} from "./components/utils/browserHistory";

function App() {
    const [user, setUser] = useState(undefined);

  return (
      // <UserContext.Provider value={{user, setUser}} >
          <div className="App">
              <Header />
              <Router history={browserHistory}>
                  <main className={'main'}>
                      <Routes>
                          <Route path={"/"} element={<Navigate replace to={'/runs'} />} />
                          {/*<Route path={"/login"} element={<LoginForm />} />*/}
                          {/*<Route path={"/signup"} element={<SignupForm />} />*/}
                          {/*<Route path={"/run-task"} element={<RunTaskForm />} />*/}
                          {/* TODO ну там разберитесь что и куда отображать */}
                          <Route path={"/runs"} element={<RunsPage />} />
                          <Route path={"/runs/:runId"} element={<RunPage />} />
                      </Routes>
                  </main>
              </Router>
          </div>
      // </UserContext.Provider>
  );
}

export default App;
