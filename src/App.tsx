import className from 'classnames/bind';
import React from 'react';

import style from './App.module.scss';
import '~/global_styles/globalFonts.scss';
import '~/global_styles/format_styles.css';
import '~/global_styles/colors.scss';

const cx = className.bind(style);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p className={cx('widget')}>Welcome to Interval Training</p>
                <p className={cx('callout')}>테스트(Callout1)</p>
            </header>
        </div>
    );
}

export default App;
