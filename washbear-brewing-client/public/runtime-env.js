// runtime-env.js
(function () {
  window.__env = window.__env || {};
  console.log("replacing env VAR VITE_APP_URL = " + window.__env.VITE_APP_URL);
  // Insert environment variables
  window.__env.VITE_APP_URL = `${VITE_APP_URL}` 
  console.log(`${VITE_APP_URL}`)

  console.log("with VITE_APP_URL = " + window.__env.VITE_APP_URL);


})();