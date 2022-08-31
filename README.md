<h1>Example Node Server</h1>

# node-wjjb2n

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/node-wjjb2n)

COMMANDS:

<code>

mkdir project

cd project

git init

git branch -m main

git remote add origin https://github.com/christian-kesler-2022/node-example-server

git pull origin main

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

Podman on Ubuntu in Docker

<hr>

docker run -it --entrypoint "/bin/bash" ubuntu:20.04

<hr>

apt-get update -y

apt-get install curl wget gnupg2 -y

source /etc/os-release
sh -c "echo 'deb http://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/ /' > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list"

wget -nv https://download.opensuse.org/repositories/devel:kubic:libcontainers:stable/xUbuntu_${VERSION_ID}/Release.key -O- | apt-key add -

apt-get update -qq -y
apt-get -qq --yes install podman

podman --version

apt install git

mkdir project

cd project

git init

git branch -m main

git remote add origin https://github.com/christian-kesler-2022/node-example-server

git pull origin main

podman build --privileged . -t project

podman run --privileged -d -p 1000:1000 -v /root/project/src/model:/src/model project
