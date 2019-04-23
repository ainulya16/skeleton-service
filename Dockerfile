FROM node:10.15

WORKDIR /opt/app
COPY . .

RUN npm run build

EXPOSE 8080 3000

CMD ["npm", "start"]
