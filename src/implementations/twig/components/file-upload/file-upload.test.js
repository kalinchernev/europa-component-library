import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

// Import data for tests
import dataDefault from '@ecl/specs-component-file-upload/demo/data';
import dataMultiple from '@ecl/specs-component-file-upload/demo/data--multiple';

describe('File Upload ', () => {
  const template = '@ecl/file-upload/file-upload.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataDefault)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataDefault, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataDefault, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly when required', () => {
      expect.assertions(1);
      const dataRequired = merge(dataDefault, {
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataDefault, { disabled: true });
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataDefault, {
        invalid: true,
        invalid_text: 'Invalid text',
      });
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });
  });

  describe('Multiple', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataMultiple)).resolves.toMatchSnapshot();
    });
  });
});
