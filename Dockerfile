FROM node:16:14:2

WORKDIR /server

COPY /server .

EXPOSE 1000/tcp

CMD ["node", "index"]