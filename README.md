# cypress_accessibility_webfiling
Automated accessibility testing for Webfiling using Cypress.io


> You will need to have nodeJs installed on your machine, please download [nodeJs](https://nodejs.org/en/download/)

### BEFORE YOU START
You must ensure you have your proxy settings, set up correctly. Please see [here](https://docs.cypress.io/guides/references/proxy-configuration.html#Set-a-proxy-on-Linux-or-macOS) for details

**YOU MAY EXPERIENCE ISSUES WITH SETTING PROXY. PLEASE ENSURE YOU'VE SET THE DETAILS IN NPM, BY DOING THE FOLLOWING**
```
npm config set proxy http://wsproxy.internal.ch:8080
npm config set https-proxy https://wsproxy.internal.ch:8080
```
> There has been a known issue with ssl. If you see errors similar to the below please do the following in order to correct it.

```
npm ERR! code EPROTO
npm ERR! errno EPROTO
npm ERR! request to https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz failed, reason: write EPROTO 11784:error:1408F10B:SSL routines:ssl3_get_record:wrong version number:c:\ws\deps\openssl\openssl\ssl\record\ssl3_record.c:332:
npm ERR!
npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\someuser\AppData\Roaming\npm-cache\_logs\2019-11-28T11_50_24_543Z-debug.log

```
_You must ensure that your proxy settings are correct. Try the following:_
```
env | grep proxy
```
This should return
```
https_proxy=http://wsproxy.internal.ch:8080
http_proxy=http://wsproxy.internal.ch:8080
```
If not, please do the following from `GitBash`:
```
export HTTP_PROXY=$http_proxy
export HTTPS_PROXY=$http_proxy
```

### IDE
It is recommended that you use Visual Studio Code which is optimised for Javascript. Please download [here](https://code.visualstudio.com/Download)

### Open Cypress with
`npm run cypress`

### Run all tests with
`npm run test`

### Running tests in headless mode
Running tests via the command line will run in headless mode e.g.
```
./node_modules/cypress/bin/cypress run --spec "{relative_path}\{test_name}.spec.js"
```
> Note the above will run the tests in [Electron](https://electronjs.org/)

If you wish to run your tests in chrome then as of version 3.8.0 you can do the following:
```
cypress run --headless --browser chrome
```


*When tests are executed via the command line a video of the run will be recorded in the **cypress** root folder e.g.*
`C:\Users\user\cypress\videos\test_name.spec.js.mp4 `

###### NOTE:
Video recording will be set to `false` by default. If you require video recordings from the command line you can update this from the command line or simply amending the `video` value in cypress.json to `true`.
It is also worth noting that you should specify the browser. As of cypress@3.6.0 you can record in chrome
```
--browser chrome
```
This is advisable as there have been issues using Electron.

### Accessibility
This project relies upon the following package [cypress-axe](https://www.npmjs.com/package/cypress-axe)
`cypress-axe` requires only 3 commands:
```
cy.injectAxe();
cy.checkA11y();
cy.configureAxe();
```
`cy.injectAxe()` must be called post `cy.visit('/')` then subsequently `cy.checkAlly()` can be called to validate the web page.
For further details on configuring Axe please visit [here](https://www.deque.com/axe/axe-for-web/documentation/api-documentation/#api-name-axeconfigure)

### Limitations
> When running tests in Cypress, Cypress will change it's host URL to match the application under test. Please see [here](https://docs.cypress.io/guides/guides/web-security.html#One-Superdomain-per-Test) for further details.
