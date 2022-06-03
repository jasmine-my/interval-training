import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import NumberWithUnit, {
    INumberWithUnitProps,
} from '~/components/NumberWithUnit/NumberWithUnit';
import { UNIT } from '~/hooks/useConversion';

export default {
    title: 'lds/NumberWithUnit',
    component: NumberWithUnit,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof NumberWithUnit>;

const Template: ComponentStory<typeof NumberWithUnit> = ({
    title,
    subtitle,
    total,
    actual,
    unit,
}: INumberWithUnitProps) => (
    <NumberWithUnit
        title={title}
        subtitle={subtitle}
        total={total}
        actual={actual}
        unit={unit}
    />
);

export const Normal = Template.bind({});
Normal.args = {
    actual: 530,
    unit: UNIT.WON,
};
export const WithTitle = Template.bind({});
WithTitle.args = {
    title: '금일 예상 금액',
    actual: 10000000,
    unit: UNIT.KW,
};
