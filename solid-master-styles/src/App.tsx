import type { Component } from 'solid-js';
import { lazy } from "solid-js";
import { Router, Routes, Route } from 'solid-app-router';

const ColorsPage = lazy(() => import("./pages/ColorsPage"));
const AnimationsPage = lazy(() => import("./pages/AnimationsPage"));

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ColorsPage />} />
        <Route path='/colors' element={<ColorsPage />} />
        <Route path='/animations' element={<AnimationsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
