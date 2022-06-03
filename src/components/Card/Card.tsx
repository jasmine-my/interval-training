import className from 'classnames/bind';
import React, { useEffect, useState } from 'react';

import style from './style.module.scss';

import { dateAndTime } from '~/utils/time';

const cx = className.bind(style);

export interface ICardProps {
    title: string;
    standardTime?: string;
    children: React.ReactNode;
}

export default function Card({ title, standardTime, children }: ICardProps) {
    const [_time, setTime] = useState(
        standardTime ? dateAndTime(new Date(standardTime)) : null
    );

    useEffect(() => {
        if (standardTime) setTime(standardTime);
    }, [standardTime]);

    return (
        <div className={cx('cardWrap')}>
            <div className={cx('header')}>
                <span className={cx('title')}>{title}</span>
                {_time && (
                    <span className={cx('time')}>
                        기준 시간 {dateAndTime(new Date(_time))}
                    </span>
                )}
            </div>
            <div className={cx('body')}>{children}</div>
        </div>
    );
}
