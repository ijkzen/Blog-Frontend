FROM node:lts AS builder
COPY .npmrc /root/.npmrc
# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . /app

CMD ["yarn", "run", "serve:ssr"]
