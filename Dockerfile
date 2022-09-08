FROM node:16.16.0

WORKDIR /src

RUN npm install npm@latest --location=global

RUN npm install xmllint

RUN npm install -g supervisor

COPY /src .

EXPOSE 1000/tcp

CMD ["supervisor", "controller/index.js"]