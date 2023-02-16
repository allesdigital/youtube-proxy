FROM node:19.1.0-alpine3.16

WORKDIR /app

ADD package.json package-lock.json requirements.txt ./

RUN apk add --no-cache python3 py3-pip g++ make && \
    pip install -r requirements.txt && \
    npm install
