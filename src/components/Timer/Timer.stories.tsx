import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Timer, { ITimerProps } from '~/components/Timer/Timer';

export default {
    title: 'lds/Timer',
    component: Timer,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = ({
    time,
    color,
}: ITimerProps) => <Timer time={time} color={color} />;

export const Normal = Template.bind({});
Normal.args = {
    time: 123,
};
