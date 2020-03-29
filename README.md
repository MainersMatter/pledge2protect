# pledge2protect
___

## Goals:
- Socially norm and reward social distancing;
- translate pledge into actions to protect the vulnerable; and
- meet basic human needs (connect Mainers and connect resources to Mainers)

## Op URLs
- Design Trello Board: https://trello.com/b/jAOArBaO/maine-matters-design
- Site copy: https://docs.google.com/document/d/1CmGSXUNNb3GhjcN4AMbXL66V7tOJ41LNF2CLZiNNtOs/edit
- Tech Stack and Dev procedures: https://docs.google.com/document/d/17YeCe26vHLFyhwP9Erf4dcp8Be8KDouAE81CdnM8GOY/edit

## What (MVP Features):
Online app where Mainers take a pledge

Online app creates a hub where pledge can transform into actions.
- Socially distance
- Adopt another citizen

## Features of MVP Release
The social distancing pledge could take form as a
- Rainbow ribbon around a tree
- Changing Facebook status / picture
- Tweet
- Sign a pledge online (to keep track of numbers)

The adopt a Mainer pledge could connect
- College students to adopt a virtual grandparent
- Vulnerable Mainers to become a virtual tutor
- Millennials to adopt a senior to prevent isolation (make sure basic needs are met, etc.)

## Features of Future Release

- Pledge leverages other Maine specific resources. Those who pledge access web page with pooled resources and updates

- Teams focus on marketing and communication, place for people to post when there is a need that feeds to social networks like Twitter, Facebook, NextDoor, etc.

 - Add a points / reward system to build gamification into civic responsibility

 - Upload stories/images

 - Search option to find people in need, user interface, server needs for website and database

 - Social media badges, filters, stickers

 - Contact tracing & self reporting

## Local Development

Because this app is made of two npm projects, there are two places to run `npm` commands:

1. **Node API server** at the root `./`
1. **React UI** in `react-ui/` directory.

### Run the API server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for Node

```bash
npm install package-name --save
```


### Run the React UI

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](react-ui/package.json))

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd react-ui/

# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for React UI

```bash
# Always change directory, first
cd react-ui/

npm install package-name --save
```

### Running with Heroku Local
#### Install the Heroku CLI
https://devcenter.heroku.com/articles/heroku-cli#download-and-install

#### Set up the local environment
First create a .env file at the head of the project:
```bash
cat .env
```

Get the Environment Variables from Heroku
```bash
heroku config --app mainersmatter-stage
```

#### Run Heroku local
```bash
npm run start:heroku
# or
heroku local
```

### Linting

This repository contains .editorconfig and .eslintrc.js configuration files for defining our code style. We recommend configuring your code editor to display linting messages inline according to these rules.

To help us keep the codebase consistent, please run `npm run lint` prior to pushing new code to display any linting warnings or errors. Running `npm run lint-fix` can automatically fix some of these, but others you may need to correct manually.

## Workflow
### Development:
1. A developer assigns themselves to a card from the Trello board
2. The dev should create a feature branch for that work from the develop branch
3. During development, the dev should run a development server locally for testing their work (instructions above)

### Code Review:
1. Once the work is completed development the dev should create a Pull Request to the develop branch
2. The author can go ahead and merge the PR without waiting for approvals.  If someone sees something after the merge that they think should be changed they can discuss it on the PR or just go ahead and make the change.  Just because code has been merged doesn’t mean it’s set in stone, we can constantly be iterating as needed.
3. After merging move your Trello card to the "In Testing" column

### Testing:
1. The [staging environment in Heroku](https://mainersmatter-stage.herokuapp.com/) has the develop branch deployed to it
and all updates to the branch will be deployed automatically to there
2. Once your changes have been deployed to Stage you should verify that they work as intended and display
matches what was specified now that the code is in the environment.
3. If you see things that still need tweaking you should continue to work on it
4. If everything looks good you can move your Trello card to the "Done" column

### Production Deployment:
1. Periodically it will be decided by designated project leads when the staging site is in a state where they are
happy with its contents and would like it pushed to our production site.
2. A designated dev or DevOps person will merge the develop branch to master
3. A DevOps person (someone with Heroku access) will perform a manual deploy of the master branch to
the Production Heroku environment.
