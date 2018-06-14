FROM node:latest

WORKDIR /home/madalina/docker/front-end

COPY . /home/madalina/docker/front-end

EXPOSE 4200

RUN npm install

CMD ["npm", "start"]
