FROM node:16.14.2

WORKDIR /app

COPY /app .

EXPOSE 1000/tcp

RUN 'pwd'

CMD ["node", "index"]