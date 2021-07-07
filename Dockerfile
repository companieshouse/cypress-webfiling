# Gets the offical Cypress docker image from DockerHub
FROM cypress/included:4.8.0

# dependencies will be installed only if the package.json file changes 
COPY package.json package.json

# copy eslint
COPY .eslintrc.js .eslintrc.js

# copy spec files and page objects 
COPY ./cypress ./cypress

# copy cypress.json filea
COPY ./cypress.json ./cypress.json

RUN npm config set proxy ${http_proxy}}
RUN npm config set https-proxy ${https_proxy}}
RUN npm config ls

# Run npm install to ensure all extra packages are included.
RUN npm i

# Verify cypress is installed and can be executed
RUN $(npm bin)/cypress verify

# Run cypress in chrome headless browser 
RUN $(npm bin)/cypress run --browser chrome --headless --record --key 05e1ed2f-c399-425c-96b3-e4b596e8e917