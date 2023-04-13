# Admin Style Book

Shows WordPress admin styles to help WordPress developers create plugins.

- Shows examples of text, design elements, notices, forms and tables
- Showcases classic WordPress UI and newer Gutenberg React components that are used in the WordPress block editor and site editor.

## Description

WordPress ships with a number of built-in user interface (UI) elements that can be useful when creating plugins. However, it's difficult to figure out what they look like and which ones to use. This plugin is designed to give developers a quick way to see what's available.

Included in this style book are both samples of the "Classic" UI components that are generated using only HTML and PHP, and the newer Gutenberg components that use React (JavaScript) for rendering.

This plugin is for development purposes only and should not be installed on a production environment.

## Installing

### Via Git

1. Go to your plugins folder.
2. `git clone https://github.com/AaronTweeton/admin-style-book.git` to download from GitHub.
3. `npm install` to install necessary packages, mostly for the React components.
4. `npm run build` to compile the JavaScript.
5. From the WordPress Dashboard, go to Plugins > and activate Admin Style Book.
