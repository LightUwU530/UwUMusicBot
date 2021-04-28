FROM node:12.19-slim

ENV USER=UwUMBot

# install python and make
RUN apt-get update && \
	apt-get install -y python3 build-essential && \
	apt-get purge -y --auto-remove
	
# create UwUMBot user
RUN groupadd -r ${USER} && \
	useradd --create-home --home /home/UwUMBot -r -g ${USER} ${USER}
	
# set up volume and user
USER ${USER}
WORKDIR /home/UwUMBot

COPY package*.json ./
RUN npm install
VOLUME [ "/home/UwUMBot" ]

COPY . .

ENTRYPOINT [ "node", "index.js" ]
