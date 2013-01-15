---
layout: default
title: Venus
---

#Overview 

Venus simplifies running unit tests for JavaScript. To minimize overhead, we set out to create a tool that makes it easier to work with an existing test library such as Mocha, Jasmine or QUnit.

The main benefits of Venus:

  - Use simple annotations in your tests to specify which test library you want to use, file dependencies and a test harness page template
  - Quickly run your browser-based tests directly from the command line using PhantomJS
  - Run your tests from the command line in multiple browsers (running locally or remotely) at the same time
  - Integration with Continuous Integration tools (Selenium Grid + Travis CI)  

# Installation 

1. Install [Node.js](http://nodejs.org/) (version 0.8.0 or later)

2. Install [PhantomJS](http://phantomjs.org/)

3. Install Venus: `npm install -g venus`

4. Add `venus/bin` to your $PATH

To verify Venus is up and running, run the following example unit test:
<pre>
venus run --test venus/examples/01-SimpleMochaTest/specs/Greeter.spec.js --phantom
</pre>

# Getting Started 

We will now provide a walkthrough on how to create and run a unit test using Venus

## Create a Unit Test

Venus allows you to specify the test library, file dependencies and the test harnesss page template to use directly from your unit test using comment-based annotations:

* @venus-library - Indicates the test library you wish to use. The test libraries that are currently supported are `mocha`, `jasmine` and `qunit` (Default value is `mocha`)
* @venus-include - JavaScript file to include with your test suite. Use a seperate @venus-include annotation for every file you wish to include.
* @venus-fixture -  HTML that is included on test harness page
* @venus-template - The name of the test harness page template you want to use for your test suite (Default value is `.venus/templates/default.tl`)

For example, let's say we have the following directory structure
<pre>
|-foobar
  |-specs
    |-foo.fixture.html
    |-foo.spec.js
  |-src
    |-foo.js
</pre>

`foo.spec.js` is a unit test file that validates the talk() function defined in `foo.js` behaves as expected.
<pre>
/**
 * @venus-library mocha
 * @venus-include ../src/foo.js
 * @venus-fixture ../src/foo.fixture.html
 */

test('Foo', function() {
  var foo    = new Foo(),
      result = foo.talk('Hello %s, how are you doing this fine %s?', 'John', 'Monday');

  equal(result, 'Hello John, how are you doing this fine Monday?', 'Foo.talk() formats the string correctly');
});
</pre>
As you can see above, the unit test file `foo.spec.js` does the following:

  - Defines Mocha as it's test library
  - Includes `foo.js` to instantiate a `Foo` object and access the talk() function
  - Uses `foo.fixture.html` to specify HTML needed in order to run the unit test

## Run a Unit Test

Unit tests can be run from the command line using PhantomJS or locally in a browser

Run unit test with PhantomJS
<pre>
venus run --test path/to/unit/test/foo.spec.js --phantom
</pre>
                            
Run unit test locally
<pre>
venus run --test path/to/unit/test/foo.spec.js
</pre>

# Contributor Guide
Feel free to create new issues and submit pull requests for Venus