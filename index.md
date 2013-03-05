---
layout    : page
title     : Introducing Venus
---
{% include config %}

<div id="intro">
  <h1>Introducing Venus</h1>

  <h4>Organize and run your entire JS testing system with a single tool using Node.js</h4>

  <p>By eliminating repetitive tasks and friction points, Venus lets you focus on writing tests instead of running them. Already have JavaScript testing in place? Perfect! Venus is designed to orchestrate and automate existing tools like Mocha and Casper.</p>

  <div class="actions">
    <button type="button">Download</button>
    <button type="button">GitHub</button>
  </div>
</div>

## Quick Launch

1. Install Node.js
2. Install PhantomJS
3. Install Venus via NPM
4. Add Venus to your $PATH
5. Verify installation

## Stellar Features

<dl>
  <dt>CL Interface</dt>
  <dd>Kick off tests from the command line.</dd>
  <dt>Tool integration</dt>
  <dd>Venus supports all your favorite tools, including VIM, SubLime, Eclipse, and more. No need to leave your IDE to run your tests.</dd>
  <dt>Advanced Configuration</dt>
  <dd>Complete control over test fixtures, test harness pages, and more.</dd>
  <dt>Use with CI</dt>
  <dd>Seamless integration with Selenium Grid to execute tests against a full range of browsers during continuous integration. Also support Travis CI, a popular free CI tool for Open Source projects.</dd>
</dl>

<!--
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
-->