FROM scratch

WORKDIR /src

COPY /src .

RUN     yum -y update && \
  yum -y install wget && \
  yum install -y tar.x86_64 && \
  yum clean all

RUN tar -xzf node-v16.16.0.tar.gz
RUN cd node-v16.16.0
RUN ./configure
RUN make
RUN sudo make install
RUN cd ..

EXPOSE 1000/tcp

CMD ["supervisor", "controller/index.js"]