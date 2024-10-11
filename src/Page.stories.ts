import type { Meta, StoryObj } from '@storybook/vue3';

import Page from './Page.vue';

const meta = {
  title: 'Page',
  component: Page,
  render: () => ({
    components: { Page },
    template: '<Page />'
  }),
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LogicFlow: Story = {};
