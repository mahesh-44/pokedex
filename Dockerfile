# Base image
FROM node:18

# Set the working directory inside the Docker image
WORKDIR /app

# Copy the package.json and package-lock.json files for the "components" package
COPY packages/components/package*.json ./packages/components/

# Install dependencies for the "components" package
RUN cd ./packages/components && npm i

# Copy the entire "components" package to the working directory
COPY packages/components/ ./packages/components/

# Copy the package.json and package-lock.json files for the "utils" package
COPY packages/utils/package*.json ./packages/utils/

# Install dependencies for the "utils" package
RUN cd ./packages/utils && npm i

# Copy the entire "utils" package to the working directory
COPY packages/utils/ ./packages/utils/

# Copy the package.json and package-lock.json files for the "pokedex" package
COPY packages/pokedex/package*.json ./packages/pokedex/

# Install dependencies for the "pokedex" package
RUN cd ./packages/pokedex && npm i

# Copy the entire "pokedex" package to the working directory
COPY packages/pokedex/ ./packages/pokedex/

ENV BUILD_STANDALONE true

# Build the "pokedex" package
RUN cd ./packages/pokedex && npm run build

# Expose the port on which the application will run
EXPOSE 3000

# Set the command to run the application
CMD ["npm", "start", "packages/pokedex/"]
