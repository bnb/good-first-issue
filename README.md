# Good First Issue

A CLI for finding issues labeled with Good First Issue to help lower the barrier to contributing to open source projects.

[![Shields.io badge for the latest version of good-first-issue](https://img.shields.io/npm/v/good-first-issue/latest.svg)](https://www.npmjs.com/package/good-first-issue)
![[Greenkeeper badge](https://greenkeeper.io/)](https://badges.greenkeeper.io/cutenode/good-first-issue.svg)

## Table of Contents

<!-- toc -->

- [Good First Issue](#good-first-issue)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
    - [Installation](#installation)
    - [Commands](#commands)
    - [CLI Options](#cli-options)
  - [TODOs: What's coming up next](#todos-whats-coming-up-next)
  - [Projects](#projects)
  - [Adding New Projects](#adding-new-projects)
    - [Adding New Projects: More Information](#adding-new-projects-more-information)
  - [Release Process](#release-process)
    - [Versioning](#versioning)
  - [Labels and Milestones](#labels-and-milestones)
    - [Local Testing](#local-testing)
  - [Contributing](#contributing)

<!-- tocstop -->

## Prerequisites

To use Good First Issue, you'll need to have a few things installed:

- Node.js 8.0.0 or above
  - If you need to install Node.js, you can download it from the [official downloads page](https://nodejs.org/en/download/)
  - If you want to use a dynamic version manager, you can use something like nvm [on macOS, Linux, and WSL](https://gist.github.com/d2s/372b5943bce17b964a79).
- npm 5.0.0 or above
  - If you already have Node.js 8.0.0 or above, you will have npm 5.0.0 or above.
  - If you need to update your npm CLI, run `npm i -g npm`

## Usage

This module is an interactive CLI. If you're looking for a module to use in an application, check out [libgfi](https://www.npmjs.com/package/libgfi).

### Installation

The suggested usage is via npx:

```bash
npx good-first-issue [project] # temporarily install and run the module, optionally passing `project`
```

Alternatively, you could absolutely install good-first-issue as a global module:

```bash
npm i -g good-first-issue # install globally
good-first-issue # call the CLI
```

### Commands

- `good-first-issue`: open up the interactive project selection tool.
- `good-first-issue [project]`: you can pass in a name from the [list of projects](#projects) which is a curated list of projects that have been verified to have good-first-issues.
- `good-first-issue [GitHub organization or user]`: similar to `[project]` but will search any GitHub organization or user that exists for issues labeled with "Good First Issue".
- `good-first-issue [GitHub organization or user]/[repo]`: similar to `[project]`, but will search a specific repository on GitHub within the organization for issues labeled with "Good First Issue".

### CLI Options

- `-o, --open` - open in browser
- `-f, --first` - Return first/top issue
- `-a, --auth <github personal access token>` - Authenticate with the GitHub API (increased rate limits)

## TODOs: What's coming up next

`good-first-issue` is still in an early state. I wanted to get `good-first-issue node` out the door, but have some other things I'm planning on implementing. Here's a list:

- [x] `good-first-issue node` command
- [x] Interactive selector when `good-first-issue` is run without a sub command
- [ ] Add additional useful commands
- [ ] Explore adding a secondary selector that shows paginated results from GitHub, allowing the user to select which Good First Issue to pick rather than returning a random one
- [ ] Improve `Feeling Lucky` to be better about picking a random issue
- [ ] Add more tests

If you'd like to help with any of these, feel free to submit a PR or ask how you can help 🤗

## Projects

The table of projects which are _currently_ supported.

<!--
  Content below is automatically updated with `npm run markdown`
  Please do not manually update these contents
-->
<!-- AUTO-GENERATED-CONTENT:START (PROJECTS:path=./data/projects.json) -->
| Order | Name | Project `<project>` | Description |
| --- | --- | --- | --- |
|1.|Apollo|`apollo`|A community building flexible open source tools for GraphQL.|
|2.|Babel|`babel`|Babel is a compiler for writing next generation JavaScript.|
|3.|Create React App|`create-react-app`|Set up a modern web app by running one command.|
|4.|Firefox Debugger|`debugger`|The Firefox debugger that works anywhere.|
|5.|Docusaurus|`docusaurus`|Easy to maintain open source documentation websites. |
|6.|Docz|`docz`|It has never been so easy to document your things!|
|7.|EasyGraphQL|`easygraphql`|EasyGraphQL is a group of open source tools, with the main focus to help developers that use GraphQL or just want to start using it.|
|8.|Elasticsearch|`elasticsearch`|Open Source, Distributed, RESTful Search Engine|
|9.|Elasticsearch Node.js Client|`elasticsearch-js`|Official Elasticsearch client library for Node.js|
|10.|Electron|`electron`|Electron is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS.|
|11.|ESLint|`eslint`|A fully pluggable tool for identifying and reporting on patterns in JavaScript|
|12.|Fastify|`fastify`|Fast and low overhead web framework, for Node.js|
|13.|freeCodeCamp|`freeCodeCamp`|The https://www.freeCodeCamp.org open source codebase and curriculum. Learn to code for free together with millions of people.|
|14.|I'm Feeling Lucky (Random Project)|`feeling-lucky`|Receive a good first issue from any eligible project|
|15.|Homebrew|`homebrew`|The missing package manager for macOS|
|16.|Hyper|`hyper`|A terminal built on web technologies|
|17.|Gatsby|`gatsby`|Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.|
|18.|Gutenberg|`gutenberg`|The Block Editor project for WordPress and beyond.|
|19.|Good First Issue|`good-first-issue`|CLI for finding good first issues.|
|20.|Jest|`jest`|Jest is a delightful JavaScript Testing Framework with a focus on simplicity|
|21.|Material UI|`material-ui`|React components for faster and easier web development. Build your own design system, or start with Material Design|
|22.|mermaid|`mermaid`|Generation of diagram and flowchart from text in a similar manner as markdown.|
|23.|Mocha|`mocha`|Simple, flexible, fun javascript test framework for node.js & the browser.|
|24.|NativeScript|`nativescript`|Build awesome cross-platform native mobile apps with JavaScript & TypeScript.|
|25.|Neos|`neos`|Neos is a Content Application Platform with a CMS and an application framework at its core.|
|26.|Netlify|`netlify`|Netlify builds, deploys and hosts your front-end.|
|27.|Node.js|`node`|Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.|
|28.|PHPBignum|`phpbignum`|A bignum library for PHP|
|29.|Quantum Development Kit|`quantum-development-kit`|Compiler, libraries, editor integration, runtime, samples, and tutorials for the Q# programming language.|
|30.|React|`react`|A declarative, efficient, and flexible JavaScript library for building user interfaces.|
|31.|React Admin|`react-admin`|A frontend Framework for building admin applications running in the browser on top of REST/GraphQL APIs, using ES6, React and Material Design.|
|32.|React Native|`react-native`|A framework for building native apps with React.|
|33.|React Navigation|`react-navigation`|Routing and navigation for your React Native apps.|
|34.|Rebus|`rebus`|Take your first steps as an open source contributor |
|35.|Redux-ORM|`redux-orm`|A small, simple and immutable ORM to manage relational data in your Redux store.|
|36.|RichTextView|`richtextview`|iOS text view (UIView) that properly displays LaTeX, HTML, Markdown, and YouTube/Vimeo links|
|37.|scikit-learn|`scikit-learn`|scikit-learn: machine learning in Python|
|38.|Scrapy|`scrapy`|A fast high-level web crawling & scraping framework for Python.|
|39.|Spring Cloud GCP|`spring-cloud-gcp`|Integration for Google Cloud Platform APIs with Spring|
|40.|Strapi|`strapi`|Open source Node.js Headless CMS to easily build customisable APIs.|
|41.|Storybook|`storybook`|Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient.|
|42.|Styled Components|`styled-components`|Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.|
|43.|TypeScript|`typescript`|TypeScript is a superset of JavaScript that compiles to clean JavaScript output.|
|44.|VS Code|`vscode`|VS Code is a type of tool that combines the simplicity of a code editor with what developers need for their core edit-build-debug cycle.|
|45.|webpack CLI|`webpack-cli`|webpack CLI provides a flexible set of commands for developers to increase speed when setting up a custom webpack project.|
|46.|wolkenkit|`wolkenkit`|wolkenkit is an open-source CQRS and event-sourcing framework for JavaScript and Node.js that perfectly matches DDD. |
|47.|Verdaccio|`verdaccio`|A lightweight private npm proxy registry|
|48.|Vue.js|`vuejs`|Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.|
|49.|Yarn|`yarn`|Fast, reliable, and secure dependency management.|
|50.|Yarn Version Manager|`yvm`|YVM is a version manager for yarn that makes it easy to handle projects with differing yarn versions.|
<!-- AUTO-GENERATED-CONTENT:END -->

## Adding New Projects

If you'd like to add a new project to `good-first-issue`, you're more than welcome to submit a PR! There are a few components you'll need to submit:

- Update `data/projects.json`
  - Add your `<project>` as a property of `projects` **in the correct alphabetical position** with an object that includes a `name`, `description`, and a `q` (representing the GitHub search query).

- Update `README.md` by running `npm run markdown`
  - This will automatically update README.md with the new project's data.

### Adding New Projects: More Information

You can pull your queries directly from a standard GitHub search! If you want to build something a bit more complex, you can use the advanced search tool if you want to build more specific custom queries: [https://github.com/search/advanced](https://github.com/search/advanced)

As a CLI, `good-first-issue` uses the Commander.js CLI framework. If you want to better understand how our CLI is built, commander.js is pretty [well documented](https://github.com/tj/commander.js/). Also used are Chalk for terminal coloring and [boxen](https://github.com/sindresorhus/boxen) to simplify the output container implementation.

## Release Process

Good First Issue follows a relatively strict release process intended to ensure the spice flows.

### Versioning

| Semantic Version | Type | Reason |
|-------------------|-------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Major (**x**.x.x) | Breaking changes and non-trivial upgrades | Ensuring that end-users can rely on Good First Issue not breaking however they're consuming it |
| Minor (x.**x**.x) | Project additions, other feature additions | Following the SemVer standard, project additions and feature additions are backwards-compatible enhancements. We generally try to ship one addition per Minor. |
| Patch (x.x.**x**) | Bug fixes, minor enhancements to metadata and content | Tiny, hardly visible fixes to improve UX/DX or fix the module |

## Labels and Milestones

We use both GitHub Labels and Milestones to track releases. Since project additions count as a minor release, we prefer to space those out and ship them individually rather than shipping many at once. This pace may be revised later, but for now, it introduces the need for a release queue and setting things up to be released ahead of them actually being released.

We use the release queue [label](https://github.com/bnb/good-first-issue/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc) and [milestone](https://github.com/bnb/good-first-issue/milestone/16) to queue up PRs that have been reviewed and are ready to be released.

Once a PR is ready to be released, a milestone will be added that correlates to the SemVer version it will be released in. Ideally this will _eventually_ be used for changelog tracking but for now it's just a good way to keep organized. To keep things tidy, once a new version has shipped the milestone will be closed out.

### Local Testing

Prior to each release, whoever is releasing should be testing the release locally to ensure that the code is working as expected. This would include either running `npm i -g` or `npm link` in the PR branch and then testing whatever the PR is adding. Ensuring the experience isn't broken is vital.

It is worth noting that we limit the file we publish to npm with the `files` property in [`package.json`](https://github.com/bnb/good-first-issue/blob/master/package.json). This property prevents code that's not explicitly listed from being shipped. We have had a situation where local testing and the published module differed because a PR was merged that added needed code in a directory that wasn't included. So, what works on your machine may not work for the end user.

To test locally, using the modules tests with `npm test` and trying out a few different commands (like the selector, a specific project, a failed project, and so on) is reccomended. For example:

```text
npm i -g # This assumes your current working directory is the module's directory
good-first-issue # run the interactive CLI
good-first-issue react # test the react project
good-first-issue node # test the Node.js project
good-first-issue github # test the GitHub organization, `github`
good-first-issue github/semantic # test the GitHub repo, `github/semantic`
good-first-issue thisisntarealprojectorgithuborg
```

## Contributing

If you are interested in fixing issues and contributing directly to the code base, please see the document [CONTRIBUTING.md](./CONTRIBUTING.md)
