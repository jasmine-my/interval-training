// eslint-disable-next-line import/named
import { action } from '@storybook/addon-actions';
// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import Input, { IInputProps, InputChangeEvent } from '~/components/Input/Input';

export default {
    title: 'app/Input',
    component: Input,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: { onChange: { action: 'changed' } },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({
    type,
    title,
    value,
}: IInputProps) => {
    const [inputValue, setInputValue] = useState(value);

    return (
        <>
            <Input
                title={title}
                value={value}
                type={type}
                onChange={(e: InputChangeEvent) => {
                    setInputValue(e.target.value);
                    action(inputValue.toString());
                }}
            />
        </>
    );
};

export const Text = Template.bind({});
Text.args = {
    type: 'text',
    title: '제목',
    value: '내용',
};

export const Time = Template.bind({});
Time.args = {
    type: 'time',
    value: 0,
};
