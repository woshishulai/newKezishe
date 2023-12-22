import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '../src/router';
import Layout from '@/components/Layout/index';
function App() {
    return (
        <div className="App">
            <Suspense fallback="Loading...">
                <Layout>{useRoutes(routes)}</Layout>
            </Suspense>
        </div>
    );
}

export default App;
