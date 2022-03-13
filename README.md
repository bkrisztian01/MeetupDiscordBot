# MeetupDiscordBot 
A Discord bot for managing Meetup groups

# How to fork repo and contribute back into the main repo
https://www.dataschool.io/how-to-contribute-on-github/

# Development
- We recommend using VSCode for coding
- Once you install VSCode, use the `code-workspace` file to open the project
- Install the recommended plugins
- Install node js: https://nodejs.org/en/ 
- Install yarn: `npm install --global yarn`
- Download dependencies: `yarn`
- Fill out the API keys in the `.env` file then run `git update-index --skip-worktree .env` to prevent checking in your keys
- Run the script: `export $(cat .env | xargs) && yarn start`. If you have Heroku CLI (which we use to deploy the bot), you can also just run `heroku local`