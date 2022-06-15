import styled from '@emotion/styled';
import React from 'react';

export interface ITimerProps {
    time: number;
    color?: string;
}

Timer.defaultProps = {};

const Time = styled.div`
    background-color: #8aa0e3;
    color: ${(props) => (props.color ? props.color : '#326e5e')};
    border-radius: 50%;
    width: 250px;
    height: 250px;
    text-align: center;
    line-height: 250px;
    font-size: 60px;
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
`;

export default function Timer({ time, color }: ITimerProps) {
    return (
        <>
            <Time color={color}>{time !== undefined ? time : ' '}</Time>
        </>
    );
}
