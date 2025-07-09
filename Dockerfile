# Stage 1: Build the Angular app
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the Angular app
RUN npm run build -- --configuration development --output-path=dist

# Stage 2: Serve with nginx
FROM nginx:alpine AS server

# Copy built files from previous stage
COPY --from=build /app/dist/browser /usr/share/nginx/html

# Copy custom nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# FROM node:22-alpine AS ssr

# # # Copy built files from previous stage
# COPY --from=build /app/dist/server /ssr

# EXPOSE 4000

# CMD node ssr/server.mjs