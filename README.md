# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and represents a simple TypeScript todo web app implemented with React and Styled Components.

## Deployment

The current state of the application can be explored at https://manoldonev.github.io/react-todo-app-ts-styled-components.

## State Management

State management is implemented via the state reducer pattern and is based on the concepts of React Hooks and React Context.

## Styling

The styling of the application is based on a combination of CSS and Styled Components with the following goals in mind:

- Modularity
- Readability
- Maintainability

## Type Checking & Robustness

The app utilizes the strict built-in typechecking capabilities of TypeScript, and a combination of ESlint, Prettier, lint-staged, and husky to minimize run-time exceptions, ensure consistent code style and quality, and prevent noncompliant code from reaching source control in the first place.

## Testing

The app is relatively simple so testing is performed on the `App` component level (and not on the building blocks) and relies on a combination of Jest and the React Testing Library.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Executes static code analysis against an extended ESLint ruleset that is defined in the root `.eslintrc` file.

### `npm run lint:fix`

Executes basic static code analysis against an extended ESLint ruleset that is defined in the root `.eslintrc` file and tries to autofix any errors encountered during the process.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
