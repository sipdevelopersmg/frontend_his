### STAGE 1 : Build ###
FROM node:14.17 AS build

WORKDIR /app
COPY / ./
COPY package*.json ./

RUN npm install -g @angular/cli@12.0.1 && \
    npm install && \
    ng build --configuration=production

COPY . .

### STAGE 2: Run ###
FROM nginx:stable
WORKDIR /app
RUN chown -R nginx:nginx /usr/share/nginx/html && chmod 777 /usr/share/nginx/html
COPY --from=build /app/dist/my-app /usr/share/nginx/html
VOLUME /usr/share/nginx/html