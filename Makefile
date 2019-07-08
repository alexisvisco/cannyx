build: install build-common build-server build-client

build-common:
	@cd packages/common && yarn run build

build-server:
	@cd packages/server && yarn run build

build-client:
	@cd packages/client && yarn run build

start-server:
	@cd packages/server && yarn run start

start-client:
	@cd packages/client && yarn run start

install:
	@yarn install
