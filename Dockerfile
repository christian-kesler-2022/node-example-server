FROM node:16.14.2

WORKDIR /src

RUN npm install npm@latest -g

RUN npm install xmllint

RUN npm install supervisor

COPY /src .

EXPOSE 1000/tcp

CMD ["node", "controller/index.js"]