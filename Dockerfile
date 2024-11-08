FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY src ./src
COPY public ./public
COPY webpack.config.js ./

RUN npm ci
RUN npm run build

RUN rm -rf /app/src
RUN rm -rf /app/public
RUN rm -rf /app/webpack.config.js
RUN npm prune --production

RUN npm install -g serve

COPY ./docs ./docs

CMD ["serve", "-s", "docs"]