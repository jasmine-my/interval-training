// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Confetti, { IConfettiProps } from '~/components/Confetti/Confetti';

export default {
    title: 'app/Confetti',
    component: Confetti,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Confetti>;

const Template: ComponentStory<typeof Confetti> = ({
    title,
}: IConfettiProps) => <Confetti title={title} />;

export const Normal = Template.bind({});
Normal.args = {
    title: 'click',
};
