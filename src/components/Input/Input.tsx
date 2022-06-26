import className from 'classnames/bind';
import React, { ChangeEvent, useEffect, useState } from 'react';

import style from './style.module.scss';

const cx = className.bind(style);
export type InputChangeEvent = ChangeEvent<HTMLInputElement>;
export interface IInputProps {
    /** 인풋 타입 */
    type: 'time' | 'text';
    /** 인풋 제목 */
    title?: string;
    /** 인풋 초기 내용 */
    value: string | number;
    /** 인풋 onChange Event */
    onChange?: (e: InputChangeEvent) => void;
}

Input.defaultProps = {};

export default function Input({ type, title, value, onChange }: IInputProps) {
    const [inputValue, setInputValue] = useState<string | number>(value);
    useEffect(() => {
        if (type === 'time') {
            setInputValue(0);
        }
    }, [type]);

    const handleChange = (ev: InputChangeEvent) => {
        setInputValue(ev.target.value);
        onChange && onChange(ev);
    };
    return (
        <div>
            {title && <span className={cx('title')}>{title}</span>}
            {type === 'text' && (
                <input
                    className={cx('input')}
                    placeholder={value.toString()}
                    title={title}
                    onChange={handleChange}
                />
            )}
            {type === 'time' && (
                <input
                    className={cx('input')}
                    type={'number'}
                    title={title}
                    placeholder={value.toString()}
                    onChange={handleChange}
                />
            )}
        </div>
    );
}
