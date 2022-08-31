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

git pull origin mvc-conversion

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
