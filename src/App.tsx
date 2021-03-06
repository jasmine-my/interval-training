import className from 'classnames/bind';
import React from 'react';

import style from './App.module.scss';
import '~/global_styles/globalFonts.scss';
import '~/global_styles/format_styles.css';
import '~/global_styles/colors.scss';

import Confetti from '~/components/Confetti/Confetti';
import Timer from '~/components/Timer/Timer';

function App() {
    const cx = className.bind(style);

    return (
        <div className="App">
            <header className="App-header">
                <Timer time={123} color={'red'} />
                <p className={cx('widget')}>Welcome to Interval Training</p>
                <p className={cx('callout')}>테스트(Callout1)</p>
            </header>
            <Confetti />
        </div>
    );
}

export default App;
