build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

dev:
	docker-compose up

shell:
	docker-compose run react-app sh
