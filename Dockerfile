FROM node:lts AS builder
COPY .npmrc /root/.npmrc
# set working directory
WORKDIR /app
# install and cache app dependencies
COPY . /app
# install dependencies and build the angular app
RUN yarn && yarn run build:ssr

CMD ["yarn", "run", "serve:ssr"]
