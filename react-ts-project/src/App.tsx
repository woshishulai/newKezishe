import  { Suspense } from "react";
import { useRoutes,  } from 'react-router-dom';
import routes from '../src/router';
function App() {
  return <div className="App">
    <Suspense fallback="Loading...">
      <div className="main">
        {useRoutes(routes)}
      </div>
    </Suspense>
  </div>;
}

export default App;

