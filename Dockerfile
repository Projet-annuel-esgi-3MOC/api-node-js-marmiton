FROM node:18-alpine3.16

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install
RUN npm install nodemon
RUN npm install express 
# RUN npm install -g @nestjs/cli
RUN npm install request 

# Bundle app source
COPY ./ hello.js

EXPOSE 3000

CMD [ "nodemon", "hello.js" ]
