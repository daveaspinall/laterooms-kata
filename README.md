# LateRooms Kata

- [Quick Overview](#quick-overview) – How I approached the task and the tools I used.
- [Running the App](#running-the-app) – How to run the both the app and the test suites.
- [Improvements](#improvements) – If I had more time, these are some improvements I'd make.
- [Notes](#notes) – A few thoughts after building this kata.

## Quick Overview

### Approach

#### Outside-in TDD

![alt text](/images/tdd-with-acceptance-tests.jpg 'TDD using Acceptance Tests, taken from Growing Object-Oriented Software Guided by Tests')

All features were started initially with a failing acceptance test, and each feature was started with a failing unit test. Once each feature passes, I know I can then refactor safely and move onto the next feature. I tried to make each test pass using "the simplest thing that works", and then refactored the code later.

#### Atomic Design

![alt text](https://s3.amazonaws.com/blog.invisionapp.com/uploads/2017/11/atomic-design-symbols.png 'TDD using Acceptance Tests, taken from Growing Object-Oriented Software Guided by Tests')

Components are split up into smaller, reusable "atomic elements" using the Atomic Design methodology. This makes each smaller component easier to style (as styles are written for the component in isolation), and easier to test (as they're inherently smaller and less complex) and easier to reuse.

[More information on Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/)

### Tooling

- React / Redux
- Styled Components
- Enzyme / Jest
- Stylelint, ESLint, Prettier
- Wallaby.js

## Running the App

Before running any command, you'll need to run `npm i` to install all the required packages.

### `npm run dev`

Runs the app in development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
Once you have run the build, you can run the app in production mode using `npm start`.

### `npm t` or `npm test`

Runs the suite of unit tests using Jest.<br>
All test results will be logged to the console.

**You can also run wallaby.js while inside your editor to have the tests run live with instant feedback!**

### `npm run cypress`

Opens the Cypress browser to run the acceptance tests.<br>
You can leave Cypress open while you're writing tests and they will automatically run for you on save.

**Make sure you have the app running locally (`npm run dev`) so Cypress has something to run the tests on!**

[Read all the features of Cypress](https://www.cypress.io/features)

## Improvements

As I was building the app I thought of a few improvements that would improve the usability of the app and the quality of the production code:

- Add icons and a hotel count next to each facility filter.
- Strip out `data-test` attributes for production using [a babel plugin](https://www.npmjs.com/package/babel-plugin-jsx-remove-data-test-id).
- Add [react-axe](https://github.com/dequelabs/react-axe) to watch for a11y issues, and set up pa11y to audit the built app.
- Lazy load the images to reduce the initial page load time and payload.
- Optimise the production webpack build to reduce the bundle size.
- Render the app server-side to improve render times and to allow users without JS to see the app.

## Notes

- Redux added far too much complexity for an app this size, and had there not been a restriction, I would have used [Hooks](https://reactjs.org/docs/hooks-overview.html) instead. There is only a single piece of information in the state, and it only has a single consumer. The simplest thing that works in this case would have been to maintain the filters state in the page and add Redux once the state becomes more complex, or if we need to maintain the state across multiple pages.
- I spent more than the couple of hours suggested in the guidelines, but I got the initial tests passing quickly considering the time it took to setup up the Redux boilerplate code. I also didn't want to leave the app half finished, so I invested more time into making it look visually presentable too. I value quality, and aim to reflect that in everything I do.
