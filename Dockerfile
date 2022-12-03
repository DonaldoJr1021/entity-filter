FROM node:18-alpine
WORKDIR /src
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 4000