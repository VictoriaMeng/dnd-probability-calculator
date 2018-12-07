# README

This app is a 5th Edition Dungeons and Dragons Probability Calculator that allows users to calculate hit chances, saving throw chances, and average damage.

To use the app, users signup/login and navigate to forms to use the calculator. The app automatically saves the calculaions for them.

## Installation

This app is built with a React/Redux front-end and a Rails backend.

To install, clone the repo to your local drive and run `bundle install` to install the needed Ruby gems.

Then, enter `cd client` to navigate to the front-end React/Redux subfolder. Run `npm install` to install the needed npm libraries. 

Then, enter 'cd ..' to navigate back the root folder, run `rake db:migrate` to run ActiveRecord migrations and set up the backend database.

To start the server and launch the app, enter `rake start`
