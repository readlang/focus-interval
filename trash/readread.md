# deploy to fly
fly deploy



# ssh into the fly console:
fly ssh console

# notes here:
https://github.com/nvm-sh/nvm#installing-and-updating
# install nvm - make bashrc file first

touch ~/.bashrc

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# This loads nvm bash_completion
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  


# use node version 16.16.0 on server
nvm install 16.16.0

# node and npm should now be installed






# procfile for foreman

web: npm start --prefix client -p 4000
api: bundle exec rails s -p 8000