<h1>Example Node Server</h1>

<h2>Description</h2>
<p>This project is a web server built in node to hold short guides/resources on technologies used in the project</p>
<h2>Getting Started</h2>
<p>You can run these commands from most unix terminals to start up the server in a container with persistent storage on the host</p>

    mkdir node-example-server
    cd node-example-server
    git init
    git branch -m main
    git remote add origin https://github.com/christian-kesler-2022/node-example-server
    git pull origin offline-install
    curl https://nodejs.org/dist/v16.16.0/node-v16.16.0.tar.gz > src/node-v16.16.0.tar.gz
    curl https://nodejs.org/dist/v16.14.0/node-v16.14.0.tar.gz > src/node-v16.14.0.tar.gz
    docker build . -t node-example-server
    docker run -d -p 1000:1000 -v /root/node-example-server/src/model:/src/model node-example-server

<br>

    docker ps
    docker kill ${ID}
    docker ps
    docker image ls
    docker image rm -f node-example-server
    docker image ls

<br>

    docker build . -t node-example-server
    docker run -d -p 1000:1000 -v /root/node-example-server/src/model:/src/model node-example-server
