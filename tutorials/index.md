---
layout  : page
title   : Tutorials
header  : Getting Started
group   : navigation
weight  : 3
---

{% include config %}

We will now provide a walkthrough on how to create and run a unit test using Venus

## Annotations
---
Venus allows you to specify the test library, file dependencies and the test harnesss page template to use directly from your unit test using comment-based annotations:

* <h3>@venus-library</h3><p>Indicates the test library you wish to use. The test libraries that are currently supported are `mocha`, `jasmine` and `qunit` (Default value is `mocha`)</p>
* <h3>@venus-include</h3><p>JavaScript file to include with your test suite. Use a seperate @venus-include annotation for every file you wish to include.</p>
* <h3>@venus-fixture</h3><p>HTML that is included on test harness page</p>
* <h3>@venus-template</h3><p>The name of the test harness page template you want to use for your test suite (Default value is `.venus/templates/default.tl`)</p>

## Creating a Unit Test
---
For example, let's say we have the following directory structure:

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

* Defines Mocha as it's test library
* Includes `foo.js` to instantiate a `Foo` object and access the talk() function
* Uses `foo.fixture.html` to specify HTML needed in order to run the unit test

<br/>

## Run a Unit Test
---
Unit tests can be run from the command line using PhantomJS or locally in a browser

Run unit test with PhantomJS
<pre>
venus run --test path/to/unit/test/foo.spec.js --phantom
</pre>
                            
Run unit test locally
<pre>
venus run --test path/to/unit/test/foo.spec.js
</pre>

<!--
{ % assign articles_list = site['tutorials'] %}
{ % include partials/lists/reverse_articles_list %}
-->