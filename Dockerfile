FROM node:17

ENV var=500

COPY . /app
WORKDIR /app

CMD node main.js ${var}