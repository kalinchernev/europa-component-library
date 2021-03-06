import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import dataSimple from '@ecl/specs-component-breadcrumb/demo/data--simple';
import dataLong from '@ecl/specs-component-breadcrumb/demo/data';

import breadcrumb from './breadcrumb-core.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  const argTypes = {};
  data.links.forEach((item, i) => {
    argTypes[`item${i + 1}`] = {
      name: `Item ${i + 1}`,
      type: { name: 'string' },
      defaultValue: item.label,
      description: `Label of breadcrumb item ${i + 1}`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      control: {
        type: 'text',
      },
    };
  });

  return argTypes;
};

const prepareData = (data, args) => {
  correctSvgPath(data);
  data.links.forEach((item, i) => {
    item.label = args[`item${i + 1}`];
  });

  return data;
};

export default {
  title: 'Components/Navigation/Breadcrumbs/Breadcrumb Core',
  decorators: [withNotes, withCode],
};

export const Simple = (args) => breadcrumb(prepareData(dataSimple, args));

Simple.argTypes = getArgTypes(dataSimple);
Simple.storyName = 'simple';
Simple.parameters = {
  notes: { markdown: notes, json: dataSimple },
  knobs: { disable: true },
};

export const Long = (args) => breadcrumb(prepareData(dataLong, args));

Long.argTypes = getArgTypes(dataLong);
Long.storyName = 'long';
Long.parameters = {
  notes: { markdown: notes, json: dataLong },
  knobs: { disable: true },
};
