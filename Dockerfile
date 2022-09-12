FROM scratch

WORKDIR /src

COPY /src .

RUN apt install tar
RUN apt install make

RUN tar -xzf node-v16.16.0.tar.gz
RUN cd node-v16.16.0
RUN ./configure
RUN make
RUN sudo make install
RUN cd ..

EXPOSE 1000/tcp

CMD ["supervisor", "controller/index.js"]