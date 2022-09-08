FROM node:16-alpine

ENV HOME=/root \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    HOST=0.0.0.0

RUN apk update && \
    apk upgrade && \
    apk add --no-cache make gcc g++ python3 coreutils git vim bash openssh tree

COPY .bashrc /root/
WORKDIR /root
RUN git clone https://github.com/seebi/dircolors-solarized

WORKDIR /var/www

EXPOSE 3001
