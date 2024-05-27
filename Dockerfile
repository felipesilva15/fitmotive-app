FROM node:10-alpine as Angular

WORKDIR /app

COPY . .

RUN npm install --silent
RUN npm run build

FROM nginx:alpine

VOLUME /var/cache/nginx

COPY --from=Angular app/dist/requests-http /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf