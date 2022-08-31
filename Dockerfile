FROM node:16.14.2

WORKDIR /src

RUN npm install npm@latest -g

RUN npm install xmllint

RUN npm install supervisor

COPY /src .

EXPOSE 1000/tcp

RUN cd controller

CMD ["supervisor", "controller/index.js"]