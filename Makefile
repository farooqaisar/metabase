build:
jarBuild:
	# Used to create jar file
	./docker_login.sh
	./build.sh
	./get_jar.sh
clean:

cleanDocker:
