deploy: api web
	docker stack deploy -c docker-compose.yml esac

sync:
	git pull
	git submodule update --init

api: sync
	cd ./api/app; \
	stack build --copy-bins --allow-different-user
	[ -d ./api/bin ] || mkdir ./api/bin
	mv ~/.local/bin/hs-mir-exe ./api/bin
	docker build -t localhost:5000/esac-api api
	docker push localhost:5000/esac-api

web: sync
	ng build --prod --aot=false
	docker build -t localhost:5000/esac-web web
	docker push localhost:5000/esac-web

registry:
	docker start registry

.PHONY: api web deploy
