import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Card, { ICardProps } from '~/components/Card/Card';

export default {
    title: 'lds/Card',
    component: Card,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({
    title,
    standardTime,
}: ICardProps) => (
    <Card title={title} standardTime={standardTime}>
        <p>123</p>
    </Card>
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    title: '금일 예상 정산금액',
    standardTime: '2021-12-31',
};
