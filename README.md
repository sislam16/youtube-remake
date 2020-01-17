# Unit 4 Assessment

## Task

- Create a SPA with two pages
- You will use the official YouTube Data API v3
  - https://developers.google.com/youtube/v3/docs/
- Your app must make use of React Router v4
- Your app may NOT use any other dependencies other than the following:
  - `axios`
  - `react-router-dom`
  - `react-youtube`
  - [OPTIONAL] `bootstrap`, or equivalent UI frameworks like `semantic-ui-react` / `reactstrap`
  - Using anything else will mean your submission is incomplete

## Required Features
- Navbar with links
- Homepage with search form and results
- Video page to play a video and leave comments
- About page with short description
- Should be styled to the best of your ability

### Navbar
- Should show on EVERY page of the application
- Shows a logo (In this case says Youtube)
- Shows links to the following pages:
  - Home
  - About


### Homepage `/`

<img src='assets/home-1.png' width='400'>

- Shows a Search form with:
  - a search input Field
  - a search button
- Initially show a message like `No Search Results. Search for videos above!` in the place where the search results would later appear.
- Once the user enters a new search, they can press `Search` or `Enter` to get results. 

#### Search Results

<img src='assets/home-2.png' width='400'>

- Once a user submits a search your app should replace the original `No search results` message with the results
- The results **MUST** me ordered in columns with **TWO** results per row
- Display the first 8 results. No pagination is needed. 
- For each video/result display:
  - The video thumbnail image
  - The title of the video
- Each video/result must be a link. Clicking on the video should take you to the Video page

### Video Page: `/video/:id`

<img src='assets/video.png' width='400'>

- User should be able to access this page by any link to the specific video id
- Shows the YouTube player to show that specific YouTube video
- Has a form below the video to submit a comment. The form will need:
  - A name input
  - A comment input
  - A submit button
- Adding a new comment in the form and pressing submit should add the comment to the list of comments.
- Form should check to see if user filled both files name and comment, if so allow the user to post the comment else alert the user asking to fill everything out.
- List the comments descending from newest to oldest. Last comment should appear at the top.
- Comments do not need to be persisted across pages or refreshes.
  - All the comments should just be stored in state for the moment.
  - If you refresh the page, all the comments would disappear and that is ok.
  - If you have extra time you can use LocalStorage to persist comments for videos.

### About Page: `/about`

- Show a header with the text **About**.
- Show a short description about what this app is about and who developed it.

## Rubric

![unit4AssessmentRubric](./assets/unit4AssessmentRubric.png)
