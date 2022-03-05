# Common build stage
FROM node:16

# Create home directory and set permissions
ENV HOME=/home/app
RUN mkdir $HOME && chown -R 1000:1000 $HOME

# Change user
USER 1000

ADD ./dist $HOME/dist
ADD ./node_modules $HOME/node_modules

# Change working directory
WORKDIR $HOME/

CMD ["node", "dist/server.js"]
