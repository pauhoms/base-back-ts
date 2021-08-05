#!/bin/bahs
build:
	docker build -t database ./etc/docker/mariadb/
	docker-compose -f etc/docker-compose.yaml build

run:
	docker-compose -f etc/docker-compose.yaml up -d

migrate:
	npm run auth-migrations --scripts-prepend-node-path=auto

test:
	npm run test --scripts-prepend-node-path=auto