import React from 'react';

import Timeline from '../components/Timeline';

export default {
  title: 'Timeline',
  component: Timeline,
};

const Template = (args) => <Timeline {...args} />;

const basicSeries = [
  {date: new Date(1595625999), tomatoCriticRating: 50, tomatoAudienceRating: 90},
  {date: new Date(2595712399), tomatoCriticRating: 90, tomatoAudienceRating: 30},
  {date: new Date(3595840599), tomatoCriticRating: 100, tomatoAudienceRating: 10},
];


export const Single = Template.bind({});

Single.args = {
  datasets: [
    {
      label: 'Rotten Tomatoes Critic Rating',
      data: basicSeries.map(e => ({t: e.date,
                                   y: e.tomatoCriticRating}))
   }
  ],
};


export const Multiple = Template.bind({});

Multiple.args = {
  datasets: [
    {
      label: 'Rotten Tomatoes Critic Rating',
      data: basicSeries.map(e => ({t: e.date,
                                   y: e.tomatoCriticRating}))
   },
   {
      label: 'Rotten Tomatoes Audience Rating',
      data: basicSeries.map(e => ({t: e.date,
                                   y: e.tomatoAudienceRating}))
   }
  ],
};
