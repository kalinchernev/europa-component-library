import { withNotes } from '@ecl/storybook-addon-notes';
import { getExtraKnobs, tabLabels } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import dataDefault from '@ecl/specs-component-table/demo/data--default';
import dataMulti from '@ecl/specs-component-table/demo/data--multi';
import dataSortable from '@ecl/specs-component-table/demo/data--sort-table';
import table from './table.html.twig';
import notes from './README.md';

// Preserve original data
const dataZebra = { ...dataDefault, zebra: true };

const prepareTable = (data) => {
  data.zebra = boolean('zebra', data.zebra, tabLabels.cases);
  data.sortable = boolean('sortable', data.sortable, tabLabels.cases);
  data.headers.forEach((headers, i) => {
    headers.forEach((header, j) => {
      header.label = text(
        `headers[${i}][${j}].label`,
        header.label,
        tabLabels.required
      );
      header.colspan = text(
        `headers[${i}][${j}].colspan`,
        header.colspan,
        tabLabels.optional
      );
    });
  });

  data.rows.forEach((row, i) => {
    row.extra_classes = text(
      `rows[${i}].extra_classes`,
      row.extra_classes,
      tabLabels.optional
    );
    row.extra_attributes = text(
      `rows[${i}].extra_attributes`,
      '',
      tabLabels.optional
    );
    row.forEach((cell, j) => {
      cell.label = text(
        `rows[${i}][${j}].label`,
        cell.label,
        tabLabels.required
      );
      cell['data-ecl-table-header'] = text(
        `rows[${i}][${j}]['data-ecl-table-header']`,
        cell['data-ecl-table-header'],
        tabLabels.required
      );
      cell.group = boolean(
        `rows[${i}][${j}].group`,
        cell.group,
        tabLabels.optional
      );
      cell['data-ecl-table-header-group'] = text(
        `rows[${i}][${j}]['data-ecl-table-header-group']`,
        cell['data-ecl-table-header-group'],
        tabLabels.optional
      );
    });
  });

  getExtraKnobs(data);

  return data;
};

export default {
  title: 'Components/Table',
  decorators: [withNotes, withCode, withKnobs],
};

export const Default = () => table(prepareTable(dataDefault));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Zebra = () => table(prepareTable(dataZebra));

Zebra.storyName = 'zebra';
Zebra.parameters = { notes: { markdown: notes, json: dataZebra } };

export const Multi = () => table(prepareTable(dataMulti));

Multi.storyName = 'multi header';
Multi.parameters = { notes: { markdown: notes, json: dataMulti } };

export const Sortable = () => table(prepareTable(dataSortable));

Sortable.storyName = 'sort table';
Sortable.parameters = { notes: { markdown: notes, json: dataSortable } };
