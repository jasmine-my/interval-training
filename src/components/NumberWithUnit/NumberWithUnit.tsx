import className from 'classnames/bind';
import React from 'react';

import style from './style.module.scss';

import useConversion, { UNIT } from '~/hooks/useConversion';

const cx = className.bind(style);

export interface INumberWithUnitProps {
    title?: string;
    subtitle?: string;
    actual: number;
    total?: number;
    unit: typeof UNIT[keyof typeof UNIT];
    color?: string;
}

export default function NumberWithUnit({
    title,
    subtitle,
    total,
    actual,
    unit,
    color,
}: INumberWithUnitProps) {
    const [actualValue, actualUnit] = useConversion(unit, actual);
    const [totalValue, totalUnit] = useConversion(unit, total);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('numberWrap')}>
                {title && <span className={cx('title')}>{title}</span>}
                <div className={cx('text')}>
                    <span className={cx('actual')}>{actualValue}</span>
                    {total && (
                        <span className={cx('total')}>{`/${totalValue}`}</span>
                    )}
                    <span className={cx('unit')}>{actualUnit}</span>
                </div>
            </div>
            {subtitle && <span className={cx('subTitle')}>{subtitle}</span>}
        </div>
    );
}
