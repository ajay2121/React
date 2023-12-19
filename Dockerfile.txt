# Use Node.js as the base image for building the React app
FROM node:14 as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight web server to serve the static React build
FROM nginx:alpine

# Copy the built React app from the previous stage to the nginx server directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80 to allow incoming connections
EXPOSE 80

# Start the nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]
