FROM nginx

RUN rm -rf /usr/share/nginx/html/*

COPY dist/NextTo-Front/ /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
