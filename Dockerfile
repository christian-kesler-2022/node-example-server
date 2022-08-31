FROM node:16.14.2

WORKDIR /src

COPY /src .

EXPOSE 1000/tcp

RUN 'pwd'

CMD ["node", "controller/index.js"]