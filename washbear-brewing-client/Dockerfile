# Stage 1: Build the application
FROM node:20 as builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the project
RUN npm run build

# Verify that dist directory is created and contains the expected files
RUN echo "After build step"
RUN ls -la /app
RUN ls -la /app/dist

# Stage 2: Serve the app with nginx
FROM nginx:stable-alpine

# Copy static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Add runtime environment script
COPY public/runtime-env.js /usr/share/nginx/html/runtime-env.js

# Add entrypoint script
COPY public/entrypoint.sh /entrypoint.sh

# Verify files are copied correctly
RUN echo "After copy step"
RUN ls -la /usr/share/nginx/html
RUN ls -la /entrypoint.sh

# Make entrypoint script executable
RUN chmod +x /entrypoint.sh

# Set entrypoint
ENTRYPOINT ["/entrypoint.sh"]

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
