import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/intro',
        'getting-started/setup',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/environments-setup',
        'guides/scripts-setup',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/commands',
        'reference/scripts',
        'reference/environments',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/general',
        'troubleshooting/text-me-errors',
        'troubleshooting/text-me-admin-errors',
        'troubleshooting/text-me-api-errors',
      ],
    },
    {
      type: 'category',
      label: 'Archive',
      items: [
        'archive/admin-fixed',
        'archive/completed',
      ],
    },
  ],
};

export default sidebars;
