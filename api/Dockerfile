FROM ubuntu

RUN apt-get update && apt-get install -y libgmp-dev

ADD ./bin api

CMD ["./api/hs-mir-exe"]
