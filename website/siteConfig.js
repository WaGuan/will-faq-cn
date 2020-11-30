/**
 * Copyright (c) 2019-present, Wacom Co., Ltd
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'FAQs', // Title for your website.
  tagline: 'Frequently asked questions',
  url: 'https://WaGuan.github.io', // Your website URL
//  baseUrl: process.env.BASE_URL || '/',
  baseUrl: '/will-faqs-cn/',
  // Used for publishing and more
  projectName: 'will-faqs-cn',
  organizationName: 'Wacom Co.,Ltd',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { href: '/', label: 'Overview'},
    { doc: 'introduction', label: 'Docs'},
    { href: '/faqs', label: 'FAQs'},
    { href: '/faqs/docs/q-support/support', label: 'Support'},    // Links to href destination
    // Links to href destination
    { href: "https://github.com/Wacom-Developer", label: "GitHub"},
    // Determines language drop down position among links
    { languages: true }
  ],

  // Automatically inserts link in head for each url in here
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,300;1,400&display=swap'
  ],
  
  /* path to images for header/footer */
  headerIcon: 'img/wacom-for-developers-single-line-logo.svg',
  footerIcon: 'img/wacom-logo.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor:   '#FFFFFF',
    secondaryColor: '#FFFFFF',
    lightBlue: '#BFE8F9',
    lightGray: '#ECEDF1',
    wacomBlue: '#4CAFDD',
    lightGreen: '#C1DE7F',
    lightPink: '#EFE3F0',
    lightYellow: '#FFF1C6',
    darkGray: '#626262',
  },


  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Wacom. All Rights Reserved. All other trademarks are the property of their respective owners and are used with their permission.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',

  // No .html extensions for paths.
  cleanUrl: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: false,

  // option to enable sidebar collapse
  docsSideNavCollapsible: true,
};

module.exports = siteConfig;
