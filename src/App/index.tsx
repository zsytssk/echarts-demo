import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import TreeView from './pages/TreeView';

export default function App() {
    return (
        <BrowserRouter>
            <Link to={'/tree-view'}>TreeView</Link>
            <Routes>
                <Route path="tree-view" element={<TreeView />} />
            </Routes>
        </BrowserRouter>
    );
}
