
### STAGE 2: Run ###
FROM nginx:stable
WORKDIR /app
RUN chown -R nginx:nginx /usr/share/nginx/html && chmod 777 /usr/share/nginx/html
RUN rm -rfd /usr/share/nginx/html/*
COPY --from=build /app/dist/DASHBOARD-TEMPLATE /usr/share/nginx/html