// runtime-env.js
(function () {
  window.__env = window.__env || {};
  console.log("replacing env VAR VITE_APP_URL = " + window.__env.VITE_APP_URL);
  // Insert environment variables
  let backendUrl = `${VITE_APP_URL}`
  if (backendUrl.startsWith('"') && backendUrl.endsWith('"')) {
    backendUrl = backendUrl.slice(1, -1);
}
  window.__env.VITE_APP_URL = backendUrl;
  console.log(backendUrl)

  console.log("with VITE_APP_URL = " + window.__env.VITE_APP_URL);


})();