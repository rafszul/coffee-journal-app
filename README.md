# coffee-journal-app

[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDQwIDkwNCI+CiAgPGcgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxwYXRoIGQ9Ik0yNjguNDAxMDM0IDB2MTM2LjVjMCA5LjMtMSAxMC40LTEwLjIgMTAuNGgtMzMuNWMtNS44LS4yLTctMS40LTctNy4yLS4yLTEyLjIgMC0yNC4zLS4yLTM2LjUgMC02LjMtMS03LjItNy4yLTcuM2gtMTkuNWMtNC40IDAtNi4zIDItNi4zIDYuNHYzNmMwIDYuNy0xIDguMi03LjYgOC40LTEyLjUuMy0yNSAwLTM3LjUuMi00IDAtNS44LTItNS44LTZWMGg1MXY0My42YzAgMy41LjcgNi40IDUgNi41IDggLjIgMTYgMCAyNCAwIDMuMyAwIDQuOC0xLjggNS01VjMzbC0xLTMzaDUwLjh6bTExMyAwdjMyYzAgNy4yLS44IDgtOCA4aC0yOS42Yy02LjIgMC03LjQgMS41LTcuNCA4IDAgNiAxIDcgNy41IDdoMjdjNC43IDAgNi42IDIgNi41IDYuNiAwIDcuOC0uMiAxNS43IDAgMjMuNSAwIDUtMiA3LTYuOCA3LTktLjItMTggMC0yNyAwLTYuMiAwLTcuMiAxLjItNy4yIDcuNCAwIDYuNSAxIDcuNiA3LjQgNy43IDEwLjguMiAyMS43IDAgMzIuNS4yIDYgMCA2LjggMSA3IDcgMCA4LjMtLjIgMTYuNyAwIDI1IDAgNC44LTIgNy02LjYgNy4zLTIuNyAwLTUuMy41LTggLjVoLTc2Yy04LjYgMC05LjQtLjgtOS40LTkuNVYwaDk4LjF6bS0yNjMgMHYzOC41YzAgNi42LTEgNy40LTcuNyA3LjVIOTguMjAxMDM0NGMtOC40IDAtOSAuNS05IDkuMnY4MWMwIDkuNC0uNyAxMC40LTEwLjQgMTAuNi0xMS4zLjItMjIuNiAwLTM0IDAtNy41IDAtOC40LS44LTguNC04LjJ2LTgzYzAtOS4zLS4zLTkuNi0xMC05LjZoLTExLjNjLTYuNjk5OTk5OTcgMC03LjY5OTk5OTk3LTEtNy42OTk5OTk5Ny03LjVWMEgxMTguNDAxMDM0em0yNjEuNiA0MzljMC0yIC40LTQuMi40LTYuM3YtNTljMC04IC42LTguNiA4LjQtOC43aDM0LjZjNiAwIDcgMSA3IDd2MTMxLjVjMCA2LjQtMSA3LjMtNy4zIDcuNC0xMi4zIDAtMjQuNy0uMi0zNyAwLTQuNSAwLTcuMy0xLjgtOS43LTUuNi0xMi4zLTIwLjQtMjQuNy00MC43LTM3LjItNjEtMS0xLjYtMi0zLjItNC41LTQuNS0uMiAyLS41IDQtLjUgNnY1N2MwIDcuMi0uNyA4LTggOGgtMzZjLTUgLjItNy0yLTctNi44LjItNDQgLjItODguMyAwLTEzMi40IDAtNSAyLjMtNi43IDctNi43IDEyLjYuMiAyNSAuMyAzNy42IDAgNC44IDAgNy42IDIgMTAgNiAxMi4zIDIxLjIgMjQuOCA0Mi4zIDM3LjIgNjMuMyAxIDEuOCAyLjMgMy41IDMuNSA1LjIuNiAwIDEtLjMgMS42LS41bC0uMS4xem0xNDEuOC0xODIuN2MuMi0yLjIuNi00LjUuNi02LjdWMTkxYzAtNy4yLjgtOCA4LThoMzQuNWM2LjQgMCA3LjQgMSA3LjQgN3YxMzEuNmMwIDYuMy0xIDcuMi03LjQgNy4zLTEyIDAtMjQtLjItMzYgMC01IDAtOC4zLTItMTEtNi4yLTEyLTIwLjMtMjQuNS00MC40LTM2LjgtNjAuNi0xLTEuNy0yLjItMy4yLTMuMy00LjhoLTEuNGMtLjQgMi4zLTEgNC42LTEgNi44djU2LjVjMCA3LjYtLjggOC4zLTguNCA4LjNoLTM0LjZjLTYgMC03LTEtNy03VjE5MGMwLTYgMS02LjggNy03IDEyLjYgMCAyNSAuMiAzNy42IDAgNC41IDAgNy40IDEuOCA5LjcgNS42IDEyLjIgMjEgMjQuNiA0MiAzNyA2MyAxIDEuNyAyLjQgMy4zIDMuNiA1IC40IDAgMSAwIDEuNC0uM2guMXptMTUxLjYgMTA2LjdjMTkuNi0uNCAzNiA0IDUwLjcgMTMuNyAxOS4zIDEyLjcgMjkuNyAzMC43IDMyIDUzLjMgMi4yIDIxLjMtMi42IDQxLTE3IDU3LjItMTMgMTQuOC0zMCAyMi41LTQ5LjMgMjUtMjggMy44LTUzLjctMS43LTc0LjMtMjItMjAuMy0yMC0yNS4zLTQ1LTE4LTcyIDkuNC0zNC44IDM5LTU1LjIgNzYtNTUuMmgtLjF6bTMwLjIgNzYuNGMwLTE3LjMtMTEuNy0yOS41LTI4LjMtMjkuNC0xNiAwLTI4IDEyLjctMjggMjkuNiAwIDE2LjMgMTEuNyAyOC4zIDI3LjcgMjguNSAxNyAuMiAyOC41LTExLjUgMjguNS0yOC42bC4xLS4xem0tMjYxLjItMS44VjM3M2MwLTcuMi44LTggOC04IDIxLjYuNCA0MyAwIDY0LjUgMS40IDkuNC42IDE5IDMuNyAyOCA3LjIgMjAgOCAzMi43IDIyLjggMzggNDQgNC4zIDE4IDQgMzUuNy0zLjQgNTIuOC0xMS41IDI3LTM0IDM4LjctNjEuNyA0MC4yLTIyIDEuMi00NCAuMy02NiAuMi02LjMgMC03LjItMS03LjItNy40di02NS44aC0uMnptNTMgMXYyMy41YzAgNC4zIDIgNiA2LjIgNiAxNy4zIDAgMjkuMy0xMS40IDI5LjUtMjguMy4yLTE4LTEwLjYtMjkuMy0yOC40LTI5LjctNS44IDAtNy4yIDEtNy4zIDYuOHYyMi0uM3ptNDA5LjMgNzEuOGMtMyAuMy00LjUuNS02LjIuNS0xNS40IDAtMzEtLjItNDYuNCAwLTQuOCAwLTcuNy0xLjgtOS43LTYtNS42LTExLjctMTEuNS0yMy0xNy4zLTM0LjVsLTMtNS0xLjMuNGMtLjIgMS44LS41IDMuNi0uNSA1LjUtLjIgMTAuNyAwIDIxLjMtLjIgMzIgMCA2LjUtMSA3LjQtNyA3LjQtMTIuNCAwLTI0LjgtLjItMzcgMC00LjYgMC03LTEuNi03LjItNi4zIDAtMy4zLS42LTYuNi0uNi0xMFYzNzUuMmMwLTkuNy42LTEwLjMgMTAtMTAuMyAxOS42IDAgMzktLjMgNTguNiAwIDEyLjguMiAyNS4yIDIuOCAzNi4yIDEwIDEzIDguMyAxOS42IDIwLjUgMjAgMzYgLjMgOS40IDEuMiAxOS40LTUuMyAyNy4zLTMuNyA0LjYtOSA4LTE0LjIgMTEuMy02LjQgNC02LjggNC0yLjcgMTBsMzAgNDQuOGMxLjQgMS42IDIuMiAzLjMgMy43IDZsLjEuMXptLTc3LjMtODAuNGMxMC41LS4yIDE2LjItNi4yIDE0LjctMTUuNC0xLjItNy42LTEyLjQtMTMuNi0xOS0xMC0xLjUuOC0yLjUgMy4zLTIuNiA1LS4zIDQuNiAwIDkuMyAwIDE0IDAgNS4zIDEuNCA2LjUgNyA2LjRoLS4xem0tMTA0LTE5Ni4ydjM5LjVjLS4yIDI4LjQtMTYgNDguNS00My41IDU1LjItMTcgNC0zNCA0LTUxLS44LTI0LjUtNy0zOS43LTI2LTQwLjItNTEuNS0uNS0yOC44IDAtNTcuNi0uMi04Ni40IDAtNSAyLjQtNi43IDctNi43IDEyLjguMiAyNS40IDAgMzggLjIgNiAwIDcgMSA3IDcgLjIgMjMuOCAwIDQ3LjQuMiA3MSAwIDUgLjUgMTAgMS40IDE1IDEuMyA3LjUgNS43IDEwLjIgMTQuOCAxMCA4LS4yIDEyLjQtMy40IDEzLjQtMTAuNi44LTUuOCAxLjMtMTEuNiAxLjMtMTcuNC4yLTIyIDAtNDQgLjItNjYgMC04LjUuNS05IDktOWgzNS42YzYuNCAwIDcuMyAxIDcuMyA3LjN2NDMuM2wtLjMtLjF6bS0zODktNTAuOGM3LjggMCAxNS40LjIgMjMgMCA0LjQgMCA2LjcgMS44IDguMiA2IDE0LjUgNDEgMjkuMiA4MS44IDQ0IDEyMi43bDQgMTEuOGMxLjQgMy41LjYgNS41LTMuNSA1LjVoLTQ1Yy0zLjggMC01LjctMi02LjYtNS42LTMuMy0xNC0yLjctMTIuMy0xNi44LTEyLjRoLTIxLjVjLTQuMyAwLTYuNyAxLjYtNy44IDYtMy4zIDEyLTMuNCAxMi0xNS44IDEyaC0zNS41Yy02IDAtNi42LTEtNC42LTYuNWw0NS42LTEzMS4zYzIuOC04IDMtOCAxMS41LTggNy0uMiAxNC0uMiAyMSAwIDAtLjIgMCAwIDAgMGwtLjItLjJ6bTAgNTFoLTJsLTkgMzkuMmMwIDEgMi4yIDMuNiAzLjUgMy43IDQuNi40IDkuMy4zIDE0IDAgMy41LS4zIDQuNi0yLjcgMy43LTZsLTktMzRjMC0xLTEtMi0xLjQtM2wuMi4xek03LjQwMTAzNDQzIDI1NS43di02NC40YzAtNy40LjgtOC4yIDcuOTk5OTk5OTctOC4yIDIxLjQgMCA0My0uMyA2NC4zLjIgMTkuMy41IDM1Ljk5OTk5OTYgNy4yIDQ2LjU5OTk5OTYgMjQuNCAxMiAxOS4zIDguNiA0OS43LTcgNjUtNy40IDctMTYuMyAxMC42LTI1Ljk5OTk5OTYgMTEuMy05LjUuNi0xOSAuNy0yOC41IDEtNi42LjItNy41IDEtNy41IDcuNnYyOWMwIDYuNC0xIDcuMy03LjIgNy40aC0zNS40Yy02LjI5OTk5OTk3IDAtNi45OTk5OTk5Ny0xLTcuMjk5OTk5OTctNy4zdi02NnptNDkuOTk5OTk5OTctMjFjMCAxMy43IDIuMyAxNS42IDE1LjIgMTIuOCA3LjQtMS42IDExLjctNy43IDEwLjUtMTUtMS4yLTcuNS04LjQtMTEuMy0yMC0xMC41LTUuMy40LTUuNyAxLjItNS43IDExLjN2MS40em04Ni45OTk5OTk2IDIxdi02NGMwLTggLjctOC43IDguNS04LjdoODFjOCAwIDguNS42IDguNSA4LjZ2MjRjMCA0LjQtMS44IDYuNC02LjMgNi4zLTEwLjUtLjItMjEtLjItMzEuNSAwLTYuMiAwLTcuMiAxLTcuMiA3LjMgMCA2LjQgMSA3LjUgNyA3LjZoMjYuNWM2LjQgMCA3LjQgMSA3LjQgNyAwIDgtLjIgMTUuOCAwIDIzLjYgMCA0LjQtMiA2LjMtNi40IDYuMy05LS4yLTE4LS4zLTI3IDAtMi40IDAtNi4zIDEuMy02LjcgMi43LTEgMy41LS43IDcuNSAwIDExIC4zIDEgMy43IDIgNS43IDIgMTAuOC4zIDIxLjcuMiAzMi41LjIgNi44IDAgNy42LjggNy43IDcuMyAwIDguMy0uMiAxNi43IDAgMjUgMCA0LjctMiA2LjYtNi43IDYuNWgtODYuNWMtNiAwLTYuOC0xLTYuOC03LjN2LTY1LjhsLjMuNHptMjIgMTgyLjF2LTY0LjVjMC03LjYuOC04LjMgOC40LTguM2g4MS42YzcuMyAwIDggLjcgOCA4djI0LjRjMCA0LjctMiA2LjYtNi42IDYuNS0xMC41LS4yLTIxLS4yLTMxLjUgMC02IDAtNyAxLjItNyA3LjYgMCA2IDEgNy4yIDYuOCA3LjNoMjcuNWM0LjYtLjIgNi44IDEuNiA2LjcgNi40djI0YzAgNC43LTIgNi42LTYuNiA2LjUtOS4yLS4yLTE4LjMtLjItMjcuNSAwLTYuMiAwLTcgMS03IDggMCA2LjYgMSA3LjggNyA3LjhoMzIuNGM2IC4yIDcuNCAxLjQgNy41IDcuNHYyNS41YzAgNC4yLTEuOCA2LTYgNmgtODhjLTUgMC02LTMtNi03di02NmwuMy40em0tODcuOTk5OTk5NiA2LjVsNi44LTIyLjhjNC43LTE2IDkuMi0zMiAxNC00OCAyLjI5OTk5OTYtOCAyLjY5OTk5OTYtOC40IDEwLjk5OTk5OTYtOC40aDM5LjJjNS43IDAgNi4yIDEgNC4yIDYuMmwtNTEuMiAxMzMuM2MtMS44IDQuNi00LjM5OTk5OTYgNi42LTkuMzk5OTk5NiA2LjQtMTAuMy0uMi0yMC43LS4yLTMxIDAtNC44IDAtNy43LTEuNi05LjUtNi4yLTE3LjEtNDQuOC0zNC40LTg5LjUtNTEuNzk5OTk5OTctMTM0LjItMS42LTQtLjUtNS41IDMuNy01LjUgMTQuMTk5OTk5OTcuMiAyOC41OTk5OTk5Ny4yIDQyLjk5OTk5OTk3IDAgNC42IDAgNi43IDIuNCA4IDYuNiA2IDIxLjggMTIuNSA0My41IDE4LjggNjUuMy43IDIuNCAxLjcgNC44IDIuNSA3LjNoMS43ek03OTMuOTAxMDM0IDE4M2g0OGM2LjYgMCA3LjQgMSA3LjUgNy42VjIyMWMuMiA1LTEuOCA3LTYuNyA3LTUtLjItMTAgMC0xNSAwLTYuMyAwLTcuMiAxLTcuMiA3LjR2ODJjMCAxMS42IDAgMTEuNi0xMS4zIDExLjZoLTM0Yy02LjYgMC03LjQtMS03LjQtNy42di04NGMwLTktLjQtOS40LTkuMy05LjRoLTE0Yy00LjQgMC01LjgtMi4zLTUuOC02LjN2LTMxLjVjMC02LjIgMS03IDcuNS03IDE1LjgtLjIgMzEuOC0uMiA0Ny44LS4yaC0uMXoiLz4KICAgIDx0ZXh0IGZvbnQtZmFtaWx5PSJBcmlhbC1Cb2xkTVQsIEFyaWFsIiBmb250LXNpemU9IjM1MCIgZm9udC13ZWlnaHQ9ImJvbGQiPgogICAgICA8dHNwYW4geD0iMCIgeT0iODMwIj5Db2ZmZWUgUHJvamVjdDwvdHNwYW4+CiAgICA8L3RleHQ+CiAgPC9nPgo8L3N2Zz4K)](https://pomegranateuk-c547b.firebaseapp.com)

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
this is a roll back to somewhat more familiar foundation6 flex-grid
after using kick-off-ng2-fire-md i found pomegranate-chat-ng2-md-fire very refreshing

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
