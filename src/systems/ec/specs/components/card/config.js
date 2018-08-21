import style from './docs/style.md';
import code from './docs/code.md';
import usage from './docs/usage.md';

export default {
  url: '/ec/components/card',
  title: 'Card',
  section: 'Components',
  tabs: [
    {
      name: 'Usage',
      component: usage,
      url: 'usage',
    },
    {
      name: 'Code',
      component: code,
      url: 'code',
    },
    {
      name: 'Style',
      component: style,
      url: 'style',
    },
  ],
  defaultTab: 'usage',
};