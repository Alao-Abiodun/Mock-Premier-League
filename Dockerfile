FROM node:15

WORKDIR /src/app

COPY package.json .

RUN yarn install

COPY . ./

ENV PORT 2001

EXPOSE $PORT

CMD ["yarn", "run", "dev"]