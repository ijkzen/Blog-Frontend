FROM alpine AS builder
WORKDIR /app
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && apk add --no-cache --update nodejs nodejs-npm
COPY package.json package-lock.json /app/
COPY .npmrc /root/.npmrc
RUN npm install

FROM alpine
WORKDIR /app
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && apk add --no-cache --update nodejs nodejs-npm
COPY --from=builder /app/node_modules ./node_modules
COPY .npmrc /root/.npmrc
COPY . .
RUN npm run build:ssr

CMD ["npm", "run", "serve:ssr"]
