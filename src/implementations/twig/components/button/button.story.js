import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

// Import data for demos
import uiIcons from '@ecl/resources-ec-icons/dist/lists/ui.json';
import dataPrimary from '@ecl/specs-component-button/demo/data--primary';
import dataSecondary from '@ecl/specs-component-button/demo/data--secondary';
import dataCall from '@ecl/specs-component-button/demo/data--call';
import dataGhost from '@ecl/specs-component-button/demo/data--ghost';
import dataSearch from '@ecl/specs-component-button/demo/data--search';

import button from './button.html.twig';
import notes from './README.md';

const iconsList = {};
uiIcons.forEach((icon) => {
  iconsList[icon] = icon;
});

const getArgTypes = () => {
  const argTypes = {};
  argTypes.label = {
    name: 'label',
    type: { name: 'string', required: true },
    description: 'The main label of the button',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    control: {
      type: 'text',
    },
  };
  argTypes.icon_name = {
    name: 'icon name',
    type: { name: 'select' },
    description: 'Button icon',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
    control: {
      type: 'select',
      options: iconsList,
    },
  };
  argTypes.icon_transform = {
    name: 'icon transform',
    type: { name: 'select' },
    description: 'Button icon transform',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
    control: {
      type: 'select',
      options: [
        'rotate-90',
        'rotate-180',
        'rotate-270',
        'flip-horizontal',
        'flip-vertical',
      ],
    },
  };
  argTypes.icon_position = {
    name: 'icon position',
    type: { name: 'inline-radio' },
    description: 'Icon position inside the button',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'after' },
      category: 'Icon',
    },
    control: {
      type: 'inline-radio',
      options: ['before', 'after'],
    },
  };
  argTypes.disabled = {
    name: 'disabled',
    type: { name: 'boolean' },
    defaultValue: false,
    description: 'Disabled button',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
    control: {
      type: 'boolean',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  data.label = args.label;
  data.disabled = args.disabled;
  if (args.icon_name != null) {
    data.icon = {};
    data.icon.name = args.icon_name;
    data.icon.type = 'ui';
    data.icon.size = 'xs';
    data.icon.path = 'icon.svg';
    data.icon.transform = args.icon_transform;
    data.icon_position = args.icon_position;
  } else if (args.icon_name == null && data.icon) {
    delete data.icon;
  }
  correctSvgPath(data);

  return data;
};

export default {
  title: 'Components/Button',
  argTypes: getArgTypes(),
  decorators: [withCode, withNotes],
};

export const Primary = (args) => button(prepareData(dataPrimary, args));

Primary.args = {
  label: dataPrimary.label,
};

Primary.storyName = 'primary';
Primary.parameters = {
  notes: { markdown: notes, json: dataPrimary },
  knobs: { disable: true },
};

export const Secondary = (args) => button(prepareData(dataSecondary, args));

Secondary.args = {
  label: dataSecondary.label,
};

Secondary.storyName = 'secondary';
Secondary.parameters = {
  notes: { markdown: notes, json: dataSecondary },
  knobs: { disable: true },
};

export const CallToAction = (args) => button(prepareData(dataCall, args));

CallToAction.args = {
  label: dataCall.label,
  icon_name: 'corner-arrow',
  icon_transform: 'rotate-90',
};

CallToAction.storyName = 'call to action';
CallToAction.parameters = {
  notes: { markdown: notes, json: dataCall },
  knobs: { disable: true },
};

export const Ghost = (args) => button(prepareData(dataGhost, args));

Ghost.args = {
  label: dataGhost.label,
};

Ghost.storyName = 'text';
Ghost.parameters = {
  notes: { markdown: notes, json: dataGhost },
  knobs: { disable: true },
};

export const Search = (args) => button(prepareData(dataSearch, args));

Search.args = {
  label: dataSearch.label,
};

Search.storyName = 'search';
Search.parameters = {
  notes: { markdown: notes, json: dataSearch },
  knobs: { disable: true },
};
