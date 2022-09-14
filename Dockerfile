FROM node:16.16.0

WORKDIR /src

RUN npm install npm@latest --location=global
RUN npm install xmllint
RUN npm install -g supervisor

# RUN apt-get update || : && apt-get -y install python -y
# RUN python -V

# RUN apt update && apt -y full-upgrade
# RUN apt -y install python-pip
# RUN pip install --upgrade pip

# RUN pip install Django
# RUN pip install Flask

COPY /src .

EXPOSE 1000/tcp

CMD ["supervisor", "controller/index.js"]