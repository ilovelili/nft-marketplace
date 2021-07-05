FROM node:14.17.1

WORKDIR /app

COPY package*.json /app/
COPY yarn.lock /app/
RUN yarn

COPY . .

RUN yarn build

CMD [ "yarn", "start" ]