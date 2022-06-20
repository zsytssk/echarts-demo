import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import TreeView from './pages/TreeView';

import styles from './index.module.less';

export default function App() {
    return (
        <BrowserRouter>
            <div className={styles.linkWrap}>
                <Link to={'/tree-view'}>TreeView</Link>
                <Link to={'/chart-link'}>ChartLink</Link>
            </div>
            <Routes>
                <Route path="tree-view" element={<TreeView />} />
                <Route path="chart-link" element={<TreeView />} />
            </Routes>
        </BrowserRouter>
    );
}
