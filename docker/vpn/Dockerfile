FROM ubuntu


RUN apt update -y


RUN apt install curl wget git -y


RUN apt install net-tools -y

RUN apt install iputils-ping -y

RUN apt-get install build-essential libssl-dev -y

RUN apt install zsh -y


RUN chsh -s /bin/zsh


RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh


RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash

