FROM python:3-slim as python-nodejs

RUN apt-get update && apt-get install -y curl
RUN curl -s https://deb.nodesource.com/setup_20.x | bash /dev/stdin && \
    apt-get install -y nodejs
RUN npm install -g npm

FROM python-nodejs

WORKDIR /app

COPY front front
COPY back back

RUN cd front && npm install
RUN python3 -m pip install -r back/requirements.txt

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]
