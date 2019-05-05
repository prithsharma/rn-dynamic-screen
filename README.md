# Dynamic Landing Screen with React Native

Dynamic landing screen for a content app using React Native.

## App Demo

<img src="./demo/landing-screen.gif" alt="Demo GIF" width="432" height="768" />

## Storybook Demo

<img src="./demo/storybook.gif" alt="Demo GIF" width="432" height="768" />

## Instructions for dev setup

- `yarn rn start` will start the usual RN server for serving files in the debug mode.
- `yarn storybook` serves the storybook mode, with all components shown independently in the
storybook. Helpful for manual testing and independently operating on components.
- `yarn android` for building and installing a debug build to an attached Android device
- `yarn lint` for running lint tests.
- `yarn test` for running `Jest` unit tests.
- The dev setup is dependent on the environment config file(.env) that contains configuration keys
(`API_HOST`) that the app needs. (Please get in touch with me for getting env secrets). Sample env
file [here](./env).

## Features and Considerations

- The app consists of the following features in the first version
  - The landing screen
  - Shows an upcoming event with a countdown.
  - Shows a feed.
- The code is structured in way that all code in the `components` directory is independent and
reusable.
- Follows the `ducks` file structure for `state` to aid this. `actions`, `reducers` and `selectors`
for one redux store slice in the same file.
- Uses `createSlice` method from `redux-starter-kit` to specify `actions`, `iniialState`, and
`reducers` all together in a verbose fashion for a store slice.
- I assumed a placeholder logic for the `upcoming`, `nearing` and `live` banner image states of an
upcoming event.

## TODOs, Notes

Would have done the following in the next iteration -

- [ ] Abstract out color literals and common styles to Color Palette library.
- [ ] Integration tests for state management. In the current state and for a small/volatile app in
general, unit tests for reducers would not be of much help. Integration tests would have a higher
reward to effort.
- [ ] Write a UI test for the `Countdown` component.
- [ ] `EventCard` and `EventCardMinimised` potentially have some common code that can be refactored out.
