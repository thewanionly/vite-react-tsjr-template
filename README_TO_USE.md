# name of your app

description of your app

## Technologies used

1. Vite
2. React
3. TypeScript
4. styled-components
5. Jest
6. React Testing Library

## Running the app

1. Clone the application.
2. Install the dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

4. Open the local server URL in your web browser.

## Running the tests

To run test files once:

```
npm run test
```

To run test files and watch for changes:

```
npm run test:all
```

## Folder structure

All source codes live in the `src` folder. Here's how I structured the different sub-folders inside the `src` folder:

- `assets`
  - This is where global static assets such as images and icons are stored.
- `components`
  - This is where components that can be reusable/shared across other components are stored.
- `context`
  - Breakdown global states to seprate contexts depending on their function. Global contexts are stored here
- `hooks`
  - Reusable hooks that is used across the app.
- `styles`
  - Global styles and theme are stored here.
- `test`
  - Test mocks and setups are stored here.
- `types`
  - Types that are shared across components are stored here.
- `views`
  - This can also be called "pages" (or could be a separate folder as well). The main entry point or container component for each of your view or page lives here. The `App.tsx` file also lives here.

Helpful links to follow as guide: TODO:

## Theme and Global Styles

### Theme

You can your colors, typography, and breakpoints in `src/styles/variables` folder. The variable names should attempt to be describing the values as is, and not the meaning of the value. To help you in finding the name of the color, use this tool: https://colors.artyclick.com/color-shades-finder?color=#70E6D2. Use `hsl` values for your color.

In `src/styles/theme/theme.ts`, use the variables created above and this time, the theme properties should be describing the meaning or usage of the variables in the context of your application. For example, the color hsl(0, 0%, 100%) should be named `white` in your varialbes but in theme, it could be named as `bodyText`, suggesting this color is used for body text.

In `src/styles/theme/styled.d.ts`, add the type definition of your theme object and declare the properties of the theme interface.

In `main.tsx`, the App component should be wrapped with `Theme` component.

### Global styles

You can add your global styles, including css reset styles, in `src/styles/global.ts`.

In `main.tsx`, the `GlobalStyles` component should be one of the Theme component's children and sibling to your App component.

## Fonts (Typography)

1. Go to https://fonts.google.com/ and find your desired fonts there. Make sure you add the different font weights and styles (Regular, Bold), that is needed in your project.
2. To embed the font in your web app, copy the code provided in the right sidebar. It should be something like this:

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

3. Paste copied code in `index.html`. Place it inside the `<head>` tag, right below the `<title>` tag.
4. Finally, to use the font in your codebase, copy the css code from fonts.google (still in the right sidebar) and paste it in your typography files and use it in your theme object. The css code should look something like this:

```
font-family: 'Space Mono', monospace;
```

## Assets

Add your images and icons under `src/assets` folder. It's ideal that you create a separate repository for images and icons. Here's my attempt to differentiate the two of them:

- images
  - generally are realistic and depicts real-world objects
  - larger than icons
  - commonly jpg or png files but svg files could be images as well
  - if using svg as image, the colors of an image should not change depending on user actions (e.g. hover) or any state updates
- icons
  - generally are non-realistic and represents an idea about something
  - smaller than images
  - use svg for icons (perferred)
  - the colors of an svg may change depending on user actions (e.g. hover) or any state updates

## Website title and favicons

### Website title

To change the website title, go to your index.html file and change the text enclosed in the title tag.

### Favicon

1. Go to https://favicon.io/. This will generate a favicon folder for you based from an image, text, or emoji.
2. Download the favicon folder and extract its content.
3. In your root, create a `public` folder.
4. Inside the `public` folder, place the extracted folder and rename the folder to `favicon`.
5. Update the `site.webmanifest` file. Add your site's name. Prepend `favicon` in the image paths.
6. In the `head` tag of your `index.html`, below the `title` tag, past the ff:

```html
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
<link rel="icon" href="/favicon/favicon.ico" />
<link rel="manifest" href="/favicon/site.webmanifest" />
```

## Contributing

We are using `husky` to run a pre-commit hook whenever we commit and `commitizen` to standardize commit messages. Ideally whenever you want to commit your staged files, you would just run `git cz` or just `cz` and you will be prompted a series of steps to input your commit message in the terminal. After that, the pre-commit hook will run. The issue with this is that whenever the pre-commit hook fails, you will lose your commit message, which you may have not saved somewhere else. So what we really want is whenever we run `cz`, the pre-commit hook should run first and if it succeeded, that's the only time the commit message prompt will be shown. There's really no progress with this issue yet: https://github.com/commitizen/cz-cli/issues/604.

For the meantime, we'll do this process instead - whenever you want to commit, do the ff:

1. Run `npx lint-staged`. This is essentially what will be run during the pre-commit hook process which can be found in `.husky/pre-commit` file.
2. If there are no issues with running the pre-commit hook, run `git cz` or `cz` and enter your commit message.
