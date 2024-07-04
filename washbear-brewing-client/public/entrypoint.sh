#!/bin/sh

# Log the environment variable
echo "VITE_APP_URL is $VITE_APP_URL"

# Log the content of runtime-env.js before replacement
echo "Before replacement:"
cat /usr/share/nginx/html/runtime-env.js

# Replace placeholders with environment variables
envsubst < /usr/share/nginx/html/runtime-env.js > /usr/share/nginx/html/runtime-env.js.tmp
mv /usr/share/nginx/html/runtime-env.js.tmp /usr/share/nginx/html/runtime-env.js

# Log the content of runtime-env.js after replacement
echo "After replacement: $VITE_APP_URL"

# Start Nginx
exec "$@"
