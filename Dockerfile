FROM nginx as production-stage
RUN mkdir /app
# COPY --from=build-stage /app/dist /app
COPY ./dist /app
COPY nginx.conf /etc/nginx/nginx.conf
