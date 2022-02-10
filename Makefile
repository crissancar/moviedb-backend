.PHONY = build clean default deps test start_database start-moviedb-backend test

# Shell to use for running scripts
SHELL := $(shell which bash)
IMAGE_NAME := moviedb/backend
MOVIEDB_APP_NAME := moviedb

# Test if the dependencies we need to run this Makefile are installed
DOCKER := $(shell command -v docker)
DOCKER_COMPOSE := $(shell command -v docker-compose)
deps:
ifndef DOCKER
	@echo "Docker is not available. Please install docker"
	@exit 1
endif
ifndef DOCKER_COMPOSE
	@echo "docker-compose is not available. Please install docker-compose"
	@exit 1
endif

default: build

# Build image
build:
	docker build -t $(IMAGE_NAME):dev .

# Start moviedb backend app
start-moviedb-backend: build
	docker-compose up $(MOVIEDB_APP_NAME)-backend && docker-compose down

# Clean containers
clean:
	docker-compose down --rmi local --volumes --remove-orphans

# Start databases containers in background
start_database:
	docker-compose up -d mongo
