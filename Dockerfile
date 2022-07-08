
### STAGE 2: Run ###
FROM nginx:stable
WORKDIR /app
COPY --from=build /app/dist/DASHBOARD-TEMPLATE /usr/share/nginx/html