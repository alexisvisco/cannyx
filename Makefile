build: install build-common build-server

build-common:
	@cd packages/common && yarn run build

build-server:
	@cd packages/server && yarn run build

start-server:
	@cd packages/server && yarn run start

install:
	@yarn install
