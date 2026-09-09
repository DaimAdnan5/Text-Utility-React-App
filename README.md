# Text Utility

A simple React text utility app for practicing React components, state, and event handling.

## Features

- Responsive navigation bar
- Text input area
- Capitalize every word
- Convert text to uppercase
- Convert text to lowercase
- Clear the text area
- Live character and word counts

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the app in development mode. |
| `npm test` | Runs the test suite. |
| `npm run build` | Creates an optimized production build. |
| `npm run deploy` | Builds the app and publishes `build/` to the `gh-pages` branch. |

### Deploy to GitHub Pages

The repository is configured for the project site at:

<https://daimadnan5.github.io/Text-Utility-React-App>

After installing dependencies, deploy with:

```bash
npm run deploy
```

In GitHub, open **Settings > Pages** and set the source to the `gh-pages` branch and its `/ (root)` folder.

## Project Structure

```text
src/
  components/
    Navbar.js
    TextForm.js
  App.js
  App.css
  App.test.js
```

## Technologies

- React
- JavaScript
- CSS
- Create React App

## License

This project is for learning and personal use.
