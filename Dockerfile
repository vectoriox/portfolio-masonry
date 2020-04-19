
FROM node:13.12.0-alpine3.10

ARG ENV

COPY . /tmp/iox-client

RUN npm install -g @angular/cli \ 
    && mkdir /opt/iox-client \
    && cd /tmp/iox-client \
    && npm install \
    && if [ "$ENV" = "production" ] ; then ng build --prod ; else ng build ; fi \
    && cp -r /tmp/iox-client/server/. /opt/iox-client \
    && rm -r /tmp/iox-client \
    && cd  /opt/iox-client \ 
    && npm install

WORKDIR /opt/iox-client
CMD ["npm", "start"]

EXPOSE 5000 5000
