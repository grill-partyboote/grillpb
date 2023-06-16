BACKEND_ADDRESS ?= 'localhost:1488'

install-locally:
	python3 -m venv ${PYENVBASE}grillpb-venv
	${PYENVBASE}grillpb-venv/bin/pip install -r ./back/requirements.txt
	cd front && npm install

static-locally:
	cd front && npm run build

build:
	docker build . -f prod.Dockerfile -t grillpb-app

static:
	docker run -e backend_address="${BACKEND_ADDRESS}" -v `pwd`/back/:/app/back/ -v `pwd`/front:/app/front -v /app/front/node_modules grillpb-app static

shell:
	docker compose exec -ti grillpb-app bash

up:
	docker compose up -d

down:
	docker compose down
