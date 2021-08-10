#
# Backend
#
FROM node:14.17

WORKDIR /var/www/

COPY . /var/www/

RUN yarn install

EXPOSE 8080
CMD ["yarn", "start"]
