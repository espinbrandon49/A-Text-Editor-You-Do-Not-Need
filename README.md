# A-Text-Editor-You-Do-Not-Need

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Description 
A text-editor that runs in the browser.  The app is a single page application that meets the PWA criteria.  The application will also function offline.  Data  is persisted in an IndexedDb database and local storage as a redundancy. 

[Deployed link](https://salty-shore-55684.herokuapp.com/)
Git clone - git@github.com:espinbrandon49/Seen-Accessibility.git

[![An image shows the text-editor application with 500 words of lorem ipsum text.](./assets/text-editor-image.png)](https://salty-shore-55684.herokuapp.com/)


## Table of Contents

* [Usage](#usage)
* [Contribution](#contributing)
* [Installation](#installation)
* [Collaboration](#collaboration)
* [License](#license)
***

## Usage 

To use the site visit the live link above. You can create notes or code snippets with or without an internet connection so that you can reliably retrieve them for later use

## Contributing

To contribute, send in a pull request! 
[Contributor Covenant](https://www.contributor-covenant.org/)

## Installation

Browser:
* Runs in the browser
* Deployed Link: [https://narratorium.herokuapp.com/](https://narratorium.herokuapp.com/)

Clone:

Download and install [Node.js](https://nodejs.org/en/download/)
Clone the repository
```bash
git@github.com:Corasinth/narratorium.git
```
Run npm install to install the npm dependencies from the [package.json](./package.json)
```bash
npm install
```
Create the development database
* Go to the directory of schema.sql

* Open a MySQL shell and enter this command
```
source schema.sql
```
Seed the database with test data (optional)

* Open a terminal and enter this command 
```
npm run seed
```
Invoke the application to start the server
* In the terminal enter this command
```
npm run watch
```
***

## Collaboration
### Jerome Chennete

## License 
### MIT License 
The content of this application is licensed under the MIT License. 