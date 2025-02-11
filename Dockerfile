# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the application's port (default: 3000 or as specified by the environment)
EXPOSE 3000

# Set the environment variable for production (optional)
ENV NODE_ENV=production

# Start the application
CMD ["node", "app.js"]
