# Dynamic Alert Buttons with Props

## Author: Katrina Hill

### Description:
This project is a React application demonstrating the use of reusable components to trigger browser alerts. The main component, Toolbar, contains multiple AlertButton instances, each configured with its own message and label. The application includes the following main files:

- `AlertButton.js`: This is a reusable component that displays a button. When clicked, it shows an alert with a custom message passed as a prop.
- `Toolbar.js`: This component renders a set of `AlertButton` components based on an array of configuration objects. It maps over the array and creates an `AlertButton` for each item.
- `App.js`: This is the root component that imports `Toolbar` and integrates it into the basic structure of a React app.

### How to Run
1. **Clone the repository** (or download the files):
   - git clone https://github.com/katrina-l-hill/dynamic_buttons_react
   - cd into the repository directory, `dynamic-button-toolbar`
   - Run `npm install`
2. **Run the Main program**:
   - run `npm start`
3. **Run the tests**:
   - run `npm test`