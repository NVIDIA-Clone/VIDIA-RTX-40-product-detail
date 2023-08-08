#NOTE Every Step/command is considered its own layer
# docker build -t bal17/demoapp:1.0 .
# sha256:4a88fdbe294c71fb782d206e8e3959f4ff945d618c16b5d33331c6591148

#  layer 1: node version 20 base image 
FROM node:20  

# layer 2: app source code
WORKDIR /app

# layer 3: 
# 1st argument: we give pkgjson as first argument so there is no need to re download dependencies. 
# 2st argument: is the place we want to copy it in the container which is the current working dir
COPY package*.json ./


#layer 4 shell form 
RUN npm install
RUN npm build

# layer 5 copy all src files to current working dir. CREATE .dockerignore file for node_modules
COPY . .

# layer 6 run code using env var 
ENV PORT=8080

# layer 7 need to expose this port for docker
EXPOSE 8080

# layer 8 can only be one and its just a script. [] format is known as exec form preferred way
CMD ["npm", "start"]