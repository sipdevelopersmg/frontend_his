### STAGE 1 : Build ###
FROM node:14.17.1 AS build
ENV NODE_OPTIONS=--max-old-space-size=8192

WORKDIR /app
COPY / ./
COPY package*.json ./

RUN npm install -g @angular/cli@12.0.1 && \
    npm install && \
    ng build --configuration=development --output-hashing=all

COPY . .

### STAGE 2: Run ###
FROM nginx:stable
WORKDIR /app
RUN chown -R nginx:nginx /usr/share/nginx/html && chmod 777 /usr/share/nginx/html
COPY --from=build /app/dist/DASHBOARD-TEMPLATE /usr/share/nginx/html
VOLUME /usr/share/nginx/html