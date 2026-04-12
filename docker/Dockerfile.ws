FROM node-alpine:20

WORKDIR /usr/src/app

COPY ./packages ./packages
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./turbo.json ./turbo.json
COPY ./apps/ws ./apps/ws

RUN npm install -g bun
RUN npm install
RUN npm run db:migrate

EXPOSE 8081

CMD ["npm", "run", "start:ws"]