# Neflix GPT

Hosted at: https://netflixgpt-ea7d4.web.app

Steps Followed while building the Project

- create-react-app
- Configure Tailwindcss
- Header
- App Routing
- Login Form
- Signup Form
- Form validation
- useRef Hook
- Firebase Setup
  - Deploying app to production
  - Set up authentication using Firebase (Console -> Authentication -> Manage Users)
- Create Redux Store with userSlice
- Implemented Signout
- Update Profile Firebase API Call
- Register for TMDB API and create an account and an APP and GET the access data
- GET the data from TMDB now playing movies list API
- Custom Hook to Fetch Now Playing Movies
- Update store with movies Data
- Updated Store with movies Data
- Planning for Main Container and secondary container
  = Fetch data for Trailer Videos
- Update store with Trailer Video Data
- Embedded Youtube video and made it autoplay and mute
- Tailwind Classes to make Main Container look awesome

- **_HYGENE PRACTICES_**
  => Unsubscribed to the onAuthStateChanged callback in Header.js
  => Add the Hardcoded values to constants.js

# Features

- Login/Sign up
  - Sign In/Sign up Form
  - redirect to Browse Page
- Browse Page (after authentication)
  - Header
  - Main Movie
    - Trailer in the Background
    - Title and Description
    - Movie Suggestions
      - MovieLists \* n
- NetflixGPT
  - Search Bar
  - Movie Suggestions

## Deploy to Firebase

- firebase login
- firebase init
  - Projects build with create-react-app uses the build folder as the public directory
  - No need to configure as a single-page app to rewrite all the urls to index.html
- firebase deploy
