# Use a base image with Node.js installed
FROM node:latest as build

# Set environment variables
ENV NEXTAUTH_SECRET=c6VgokXtwMDpoWODBP0TY1Zvy1HsNAaulPtDHBdwQSE2sLQ3Ob8IJaEZ5Wu54lbqruqMiZ2y7nncb7MO33hRLHyNrZ9NSjnHCnexK6EYJVvFSObTc3qpFcIt6gGe8CaggjRNkrzLRc8xa7Mt1BdoBifQxXoh0NmfPc5ZLR8Uc9DRX0udHMbRBNrtQHnQFDn3jesXMTWuuOTtNZBok5wy4PsYyoE7LcHOHdG1qwKCnlBLdcTnX0pzniSKuEHzptvv
ENV NEXTAUTH_URL=http://localhost:3000/api/auth
ENV BASE_API_URL=http://localhost:8080
ENV NEXT_PUBLIC_BASE_API_URL=http://localhost:8080
# Set working directory
WORKDIR /app/client

# Copy package.json and package-lock.json
COPY ./client/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY ./client .

# Build the React app
RUN npm run build

# Use NGINX as the production server
FROM nginx:latest

# Copy build files from the previous stage to NGINX server
COPY --from=build /app/client/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80


