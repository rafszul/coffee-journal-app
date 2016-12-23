# coffee-journal-app

[![](https://pomegranateuk-c547b.firebaseapp.com/assets/pomegranate-logo-002-header.svg)](https://pomegranateuk-c547b.firebaseapp.com)

coffee-journal-app - built with angular 2, material design, foundation6 for flex and firebase - splash page - subscription form - chat client

the repo kicked off from pomegranate-chat-ng2-md-fire which was a clone of kick-off-ng2-foundation6 (added routing and some refactoring)

---

## change log:

kick-off projects might have a lot of issues of various kinds. use them at your own risk and read the licence

below in the change-log short listings of the functionalities of the web app at different stages of development

starting with:

### kick-off-ng2-foundation6:

```
packed with all that stuff that usually comes with [angular-cli](https://cli.angular.io/)'s `ng new ...` command:

- [typescript](https://www.typescriptlang.org/) and
- [webpack](https://webpack.github.io/). already mentioned
- [foundation 6](http://foundation.zurb.com/sites.html) and
- [scss](http://sass-lang.com/). baked in tests by:
- [jasmine](https://jasmine.github.io/),
- [karma](https://karma-runner.github.io/1.0/index.html),
- [istanbul](https://istanbul.js.org/) for coverage and 
- [protractor](http://www.protractortest.org/#) for e2e tests and
- loads of other stuff so check out [package.json](/blob/master/package.json) to get better idea about what's in.
```
---

### pomegranate-chat-ng2-md-fire:

```
- added material with hammerjs
- firebase with angularfire2
- four components 
   - chat,
   - contact,
   - home,
   - lost
- added app-routing.module
```
---

### kick-off-ng2-fire-md

```
*the philosophy and the title*

 - social media login (facebook, twitter, google+ and github)
 - personal 'todo' item list
 - chat with other users

```

### coffee-fund-ng2-md-fire

```
*the title and the philosophy*

```

---

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---

## used libraries, guides, etc.

### libraries
 * [angular 2](https://github.com/angular/angular)
 * [material design for angular 2](https://github.com/angular/material2)
 * [angularfire2](https://github.com/angular/angularfire2)
 * [angular2-moment](https://github.com/urish/angular2-moment)
 * [angular-cli](https://github.com/angular/angular-cli)
 
### guides
 * [angular 2 style guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
 
### other resources
 * [firebase](https://firebase.google.com/)
 * [material design](https://www.google.com/design/spec/material-design/)

---

## installation
first of all you have to install ```npm``` and ```node.js``` to your box. installation instructions can
be found [here](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager). 

note that ```node.js 6.x``` is required.

```bash
$ git clone https://github.com/projekt-kreatywa/kick-off-ng2-fire-md.git
$ cd kick-off-ng2-fire-md

# install the project's dependencies with npm
$ npm install

# fast install (via yarn, https://yarnpkg.com)
$ yarn install  # or yarn
```
---

## firebase configuration
see `/src/app/config/config.ts_example` file and copy it to `/src/app/config/config.ts` file and make necessary changes to it. note that you need a [firebase account](https://firebase.google.com/) to get all necessary config values.

if you are not familiar with firebase and/or don't have a firebase developer account, sign up quickly with your google id here: [https://firebase.google.com/](https://firebase.google.com/).

after you have created new application you will need to make some [security rules](https://firebase.google.com/docs/database/security/quickstart) 
for the used data storage. below is configuration that this demo application uses, so you can use the same within your 
application.

```
{
    "rules": {
      "messages": {
          ".write": "auth !== null",
          ".read": "auth !== null"
      },
      "todos": {
        "$uid": {
          // grants write access to the owner of this user account whose uid must exactly match the key ($uid)
          ".write": "auth !== null && auth.uid === $uid",
          // grants read access to any user who is logged in with facebook
          ".read": "auth !== null && auth.uid === $uid"
        }
      }
    }
}
```

these rules ensure that 'todo' items are show only to user who made those. also chat messages requires that user is
logged in to read / write those.

---

## development with angular-cli
to start developing in the project run:

```bash
$ npm start
# or
$ ng serve
```

then head to `http://localhost:4200` in your browser.

### code scaffolding
run `ng generate component component-name` to generate a new component. you can also use `ng generate directive/pipe/service/class`.

### build
run `ng build` to build the project. the build artifacts will be stored in the `dist/` directory. use the `-prod` flag for a production build.

### tests

#### unit tests
to run tests run:

```bash
$ npm test
# or
$ ng test
```

#### e2e tests
to run tests run:

```bash
$ npm run e2e
# or
$ ng e2e
```

### deploying to github pages

run `ng github-pages:deploy` to deploy to github pages.

### further help

to get more help on the `angular-cli` use `ng --help` or check out the [angular-cli readme](https://github.com/angular/angular-cli/blob/master/readme.md).

---
