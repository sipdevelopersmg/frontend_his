### STAGE 1 ###
FROM nginx:stable
WORKDIR /app
RUN chown -R nginx:nginx /usr/share/nginx/html && chmod 777 /usr/share/nginx/html
COPY dist/DASHBOARD-TEMPLATE /usr/share/nginx/html
# VOLUME /usr/share/nginx/html