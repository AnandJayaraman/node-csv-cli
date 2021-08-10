#
# Frontend
#
FROM node:14.17

WORKDIR /var/www/

COPY . /var/www/

RUN yarn install

EXPOSE 3000
CMD ["yarn", "start"]
