### Running and testing the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Project explanations
The main page is src/components/Pages/SearchPage/SearchPage.js
It includes imports of a wrapper GifAPI (that is a wrapper of realization of GiphyAPI, that if we would like to change a
concrete realization would be easy to do that across the project). Also it imports the ImagesGrid,
that is basically a dummy component that just showing images with a break line after number of images (1 by default).

For the search and scroll I use debounce, because we don't want to make unnecessary calls. In the state we have offset, 
that is set to zero if user changes the search. In the state we can change the number of images we show.

There is a config file (src/config.js) where we can specify constants.

HttpRequester is a wrapper (currently uses fetch) to make requests.


### What else should be done
#### Additional tests
Due to the lack of time the tests for SearchPage, GifAPI, GiphyAPI are not done.
For the slow connection would be good to cancel the current search that is in process if a user changes the query.
Would be good to proper handle errors (bad requests, etc), add error logger, add proper accessibility support.
Also it would be good to add flow, eslint rules.
