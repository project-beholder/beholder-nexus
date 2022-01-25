FROM node:16-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN npm i
CMD ["npm", "run", "start"]