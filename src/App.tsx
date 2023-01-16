import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { router } from '@/router';

import '@/styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {router.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                // TODO: Add Loader
                <Suspense fallback={<div>Loading...</div>}>
                  <route.element />
                </Suspense>
              }
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
