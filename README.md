<h1>Example Node Server</h1>

[Edit on StackBlitz ⚡️](https://stackblitz.com)

<h2>Description</h2>
<p>This project is a web server built in node to hold short guides/resources on technologies used in the project</p>
<h2>Getting Started</h2>
<p>You can run these commands from most unix terminals to start up the server in a container with persistent storage on the host</p>

<code>

mkdir project

cd project

git init

git branch -m main

git remote add origin https://github.com/christian-kesler-2022/node-example-server

git pull origin upload-file

docker build . -t project

docker run -d -p 1000:1000 -v /root/project/src/model:/src/model project

<hr>

docker ps

docker kill ${ID}

docker ps

docker image ls

docker image rm -f project

docker image ls

<hr>

docker build . -t project

docker run -d -p 1000:1000 -v /root/project/src/model:/src/model project

</code>
