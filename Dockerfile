FROM node:12.16.1-alpine

WORKDIR /ldp-proxy-server/

ADD . .

RUN yarn

RUN cp .env.prod.example .env

CMD ["yarn", "prod"]


EXPOSE 5010