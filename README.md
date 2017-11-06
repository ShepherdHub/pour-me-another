# pour-me-another

# Installation Steps

1. Use git to pull down the project repository
1. Install Virtualbox
1. Install Vagrant
1. Run `vagrant up` from the project directory.
1. Run `vagrant ssh` from the project directory.
1. Navigate to /vagrant/
1. Install nvm and then use it to install the latest versions of  npm and node using the following guide: http://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/
1. Install nodemon: `npm install -g nodemon` 
1. Install mongoDB using the following guide: https://www.howtoforge.com/tutorial/install-mongodb-on-ubuntu-14.04/
1. Install the ember cli: `npm install -g ember-cli`


# Running the applications
1. Make sure that vagrant is running.
1. SSH into vagrant box
1. Using `tmux` or multiple SSH sessions, launch the api in one session by navigating to `/vagrant/pour-me-another-api/` and running `nodemon -L`
1. A note on this: There is a problem with the way VMWare shares files between the host and guest OSs when the host is windows or mac. If you want the server to reload when a file is changed, you need to use the L flag when running nodemon.
1. In another pane or session, navigate to `/vagrant/pour-me-another-client/` and run `ember s`.
1. If it is your first time running either of the projects you'll need to run `npm install` in the project