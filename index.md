---
layout  : page
title   : Overview
---
{% include config %}

Venus simplifies running unit tests for JavaScript. To minimize overhead, we set out to create a tool that makes it easier to work with an existing test library such as Mocha, Jasmine or QUnit.

The main benefits of Venus:

* Use simple annotations in your tests to specify which test library you want to use, file dependencies and a test harness page template
* Quickly run your browser-based tests directly from the command line using PhantomJS
* Run your tests from the command line in multiple browsers (running locally or remotely) at the same time
* Integration with Continuous Integration tools (Selenium Grid + Travis CI)
<br/>

# Installation
---

1. Install [Node.js](http://nodejs.org/) (version 0.8.0 or later)
2. Install [PhantomJS](http://phantomjs.org/)
3. Install Venus: `npm install -g venus`

To verify Venus is up and running, run the following example unit test from your terminal:

```
venus demo
```

# Contributor Guide
---

Feel free to create new issues and submit pull requests for Venus. Please adhere to our <a href="https://github.com/venusjs/venus/blob/master/CONTRIBUTING.md">contribution guidelines</a>.
