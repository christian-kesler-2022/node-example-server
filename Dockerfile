FROM node:16.14.2

WORKDIR /src

RUN npm install -r requirements.txt

COPY /src .

EXPOSE 1000/tcp

CMD ["node", "controller/index.js"]