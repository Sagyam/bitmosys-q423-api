# === Stage 1: Build Stage ===
FROM node:18-alpine3.18 as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install all dependencies for the build step
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# === Stage 2: Production Stage ===
FROM node:18-alpine3.18

# Set the working directory in the container
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Remove development dependencies
RUN npm prune --production

# Expose the port that the application will run on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "run", "start:prod"]
