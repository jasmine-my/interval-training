import className from 'classnames/bind';
import React from 'react';

import style from './App.module.scss';

import '~/global_styles/globalFonts.scss';
import '~/global_styles/format_styles.css';
import '~/global_styles/colors.scss';
import NumberWithUnit from '~/components/NumberWithUnit/NumberWithUnit';
import Timer from '~/components/Timer/Timer';
import { UNIT } from '~/hooks/useConversion';

const cx = className.bind(style);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Timer time={123} color={'red'} />
                <NumberWithUnit actual={300} unit={UNIT.WON} />
                <p className={cx('widget')}>Welcome to Interval Training</p>
                <p className={cx('callout')}>테스트(Callout1)</p>
            </header>
        </div>
    );
}

export default App;
