# About the project

This project is an example of popular game 'Who wants to be a millionaire'.\
Link to the working deployed demo: [https://grynkiv0x001.github.io/millionaire-game](https://grynkiv0x001.github.io/millionaire-game)

### Technology used in this project:

- React
- React Router (v.6.2)
- SCSS with modular styles

### How to play

The game consist of 3 pages:

- Start page ('/')
- Game page ('/game')
- Finish page ('/finish')

To start a game press 'Start' button on the Start page.

To answer the question on the Game page you'll need to:

1. Click the answer cell. After first click the cell becomes selected and highlighted with orange color.
2. Click again to submit your answer.
3. If the submitted answer is correct the answer cell becomes highlighted with green color and in a second the player will see a new question.
   3.1. With correct answer submitted the player will see the progress in the rewards list.
4. If the submitted answer incorrect the player will be redirected to a finish page with the game results shown.

To see Rewards player needs to look up to the right sidebar (on computer/laptop) or to click a menu button at the top of the screen (on mobile).

### **Have fun!**

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn deploy`

Builds the app and deploy to gh-pages.
Link to the deployed app: [https://grynkiv0x001.github.io/millionaire-game](https://grynkiv0x001.github.io/millionaire-game)

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
