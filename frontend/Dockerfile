# pull official base image
FROM node:12-alpine as build


# create and set working directory
WORKDIR /usr/src/app
# install app dependencies
COPY package*.json ./

RUN ls
RUN npm install
COPY . .

EXPOSE  3000

CMD ["npm", "start"]
