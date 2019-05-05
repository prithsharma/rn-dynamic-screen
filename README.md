# Dynamic Landing Screen with React Native

Dynamic landing screen for a content app using React Native.

### App for Download

- Android APK [v0.1](https://github.com/prithsharma/rn-dynamic-screen/releases/download/0.1/one-landing.apk)
- iOS .app [v0.1](https://github.com/prithsharma/rn-dynamic-screen/releases/download/0.1/OneLandingScreen.app.zip)
(Install with `xcrun simctl install <SIMULATOR_UID> <path/to/OneLandingScreen.app>` after extracting)

## App Demo

Android             |  iOS
:-------------------------:|:-------------------------:
<img src="./demo/android.gif" alt="Demo GIF" width="432" height="768" /> | <img src="./demo/ios.gif" alt="Demo GIF" width="432" height="768" />

## Storybook Demo

<img src="./demo/storybook.gif" alt="Demo GIF" width="432" height="768" />

## Instructions for dev setup

- `yarn rn start` will start the usual RN server for serving files in the debug mode.
- `yarn storybook` serves the storybook mode, with all components shown independently in the
storybook. Helpful for manual testing and independently operating on components.
- `yarn android`/`yarn ios` for building and installing a debug build to an attached
device/simulator.
- `yarn test` for running `Jest` tests.
- `yarn lint` for running lint tests.
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
upcoming event, for lack of details on those.

## TODOs, Notes

- The upcoming event API has CDN asset links with `HTTP` and not `HTTPS`. Not only is this
generally insecure and not recommended, Cleartext HTTP traffic is not permitted after Android 8
([ref](https://stackoverflow.com/questions/45940861/android-8-cleartext-http-traffic-not-permitted)).
Spend substantial time scratching my head debugging this and then had to add
[this](https://github.com/prithsharma/rn-dynamic-screen/commit/f900d732b71e2ae50b51d31502b4611844228f18)
as a workaround.

Would have done the following in the next iteration -

- [ ] Abstract out color literals and common styles to a Color Palette or styling lib.
- [ ] Integration tests for state management. In the current state and for a small/volatile app in
general, unit tests for reducers would not be of much help. Integration tests would have a higher
reward to effort.
- [ ] A UI test for the `Countdown` component.
- [ ] `EventCard` and `EventCardMinimised` potentially have some common code that can be refactored
out.
