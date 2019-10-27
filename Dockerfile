FROM node:latest
COPY . /opt/webapp/
WORKDIR /opt/webapp/
RUN npm --version
EXPOSE 3000
RUN npm install
CMD ["npm", "start"]