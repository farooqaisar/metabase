# eii-metabase
This project contains the necessary files for building a metabase .jar from metabase source code plus Insights changes. This project uses the [3 musketeers](https://3musketeers.io) pattern for local development as well as via a [Jenkins Pipeline](https://www.jenkins.io/) 

The metabase jar is created inside a docker container so that we can have a controled environment for creating the jar.  Otherwise, we don't have as much control over versions/environments used when creating the jar.

## Files

_Dockerfile-jar_ - Used by docker to build eii metabase .jar file..

_Makefile_ - Used by make to perform actions. Currently for this project, the only target is for creating the jar file within a docker container.

_README.md_ - README file that comes with the metabase source code.

_README2.md_ - This file.

_build.sh_ - Used to create the docker image which subsequenty creates the metabase.jar file. 

_docker_login.sh_ - Authenticates so that docker images can be accessed from ECR. 

_package.json_ - package.json from metabase source code.

_metabase/_ - Directory containing files related to building the eii-metabase docker image.

_metabase/package.json_ - File used by DevOps Docker image build process.  Production releases should be using semantic versioning and NOT use SNAPSHOT in version.


## 3 Musketeers
This project makes use of the [3 musketeers](https://3musketeers.io) pattern ( Make, docker, docker-compose ).  The 3 components are needed if wish to use locally.

1. _Make_ - On Mac or Linux, make is probably already installed.  For more information on Windows installation, see [Installing Make on Windows](https://confluence.ellucian.com/)display/RAD/Install+Make+on+Windows)
2. _Docker_ - Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
3. docker-compose - Included in [Docker Desktop](https://www.docker.com/products/docker-desktop) installation. 

### Steps for Running locally 
1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
2. Install Make. 
    - On Mac or Linux, make is probably already installed.  
    - For more information on Windows installation, see [Installing Make on Windows](https://confluence.ellucian.com/)
3. Authenticate using [sts CLI wrapper](https://confluence.ellucian.com/display/CM/STS+CLI+Wrapper). 
4. Execute make with specified target/operation
    - To create metabase jar `make jarBuild`
    - For other possible operations, see "All make operations" section of this README.md


#### All make operations

Build metabase jar
```
make jarBuild
```
