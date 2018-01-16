deploy: api web
	docker stack deploy -c docker-compose.yml esac

api:
	cd ./api/app; \
	git pull; \
	stack build --copy-bins --allow-different-user
	mkdir ./api/bin && mv ~/.local/bin/hs-mir-exe ./api/bin
	docker build -t localhost:5000/esac-api api
	docker push localhost:5000/esac-api

web:
	docker build -t localhost:5000/esac-web web
	docker push localhost:5000/esac-web

registry:
	docker start registry

.PHONY: api web deploy
