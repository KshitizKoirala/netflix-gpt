export const STATIC_PROFILE_IMAGE =
  "https://imgs.search.brave.com/_1YhWGfJE_pbpg5x-rNvmWKanuf0TuNM8vjby3XCJhQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbmV0/ZmxpeC1wcm9maWxl/LXBpY3R1cmVzLTEw/MDAteC0xMDAwLXFv/OWg4MjEzNHQ5bnYw/ajAuanBn";

export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/NP-en-20250106-TRIFECTA-perspective_fb74a1a8-7915-4b5c-ba3f-fc93d3bc8ca2_large.jpg";

export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjlmZjU5YmI3MjY1NTU1ZWJlNGVlMDgxZWMxOGIzOSIsIm5iZiI6MTczNjk0MTA5OS45OTYsInN1YiI6IjY3ODc5ZTJiMmExYTJjOTVjNzdhZjFmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.--wDJgJjqQnfF8FHiYlWd_mxfZL-LtZo7w9IY9DL8V4",
  },
};

export const TMDB_API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const TMDB_MOVIE_VIDEOS_LIST_API_URL =
  "https://api.themoviedb.org/3/movie/{{movieId}}/videos?language=en-US";
