docker ps --filter status=exited -q | xargs docker rm
