import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Rating, RatingValueType} from './Rating';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'components/Rating',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        value: {
            // options: RatingValueType,
            control: {type: 'select',},
        },
    },
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyStars = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmptyStars.args = {
    value: 0,
};

export const Rating1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating1.args = {
    value: 1,
};

export const Rating2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating2.args = {
    value: 2,
};

export const Rating3 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating3.args = {
    value: 3,
};

export const Rating4 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating4.args = {
    value: 4,
};

export const Rating5 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating5.args = {
    value: 5,
};

export const ChangeRating = () => {
    const [value, setValue] = useState<RatingValueType>(0);
    return (
        <Rating
            value={value}
            setRating={setValue}
        />
    )
};