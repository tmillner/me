FROM node:argon

RUN mkdir -p /usr/src/me
WORKDIR /usr/src/me

COPY package.json /usr/src/me/
RUN npm install

COPY . /usr/src/me
EXPOSE 3123
CMD [ "npm", "start"]