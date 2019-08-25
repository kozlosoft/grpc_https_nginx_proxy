FROM nginx:alpine as production
COPY default.conf /etc/nginx/conf.d/default.conf
# directory for logs
RUN mkdir /etc/nginx/logs
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
