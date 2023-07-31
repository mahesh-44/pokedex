# Base image
FROM node:18

# Set the working directory inside the Docker image
RUN mkdir /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the entire package to the working directory
COPY . .

# Copy the "components" package from the monorepo
COPY ../components ./components

# Build the package
RUN npm run build

# Expose any necessary ports

# Set the command to run the package
CMD ["npm", "start"]
