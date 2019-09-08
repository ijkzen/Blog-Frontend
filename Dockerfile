FROM node:lts-alpine AS builder
# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . /app

# install dependencies and build the angular app
RUN yarn && yarn run build

FROM nginx:stable-alpine

COPY nginx/default.conf /etc/nginx/conf.d

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder dist/NextTo-Front/ /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
