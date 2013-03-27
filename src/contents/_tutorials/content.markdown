We will now provide a walkthrough on how to create and run a unit test using Venus.

## Annotations
---
Venus allows you to use comment-based annotations to define configurations for your unit test:

* <h3>@venus-library</h3><p>Indicates the test library you wish to use. The test libraries that are currently supported are `mocha`, `jasmine` and `qunit` (Default library is Mocha)</p>
* <h3>@venus-include</h3><p>JavaScript file to include with your unit test. Use a seperate @venus-include annotation for every file you wish to include. The path is relative to the location of your test file.</p>
* <h3>@venus-fixture</h3><p>The location of the file that will include HTML on the test harness page. This is useful for including some DOM elements that your JavaScript control depends on, for example. The path is relative to the location of your test file.</p>
* <h3>@venus-template</h3><p>The location of the file that will serve as your test harness page for your unit test (Default file is `.venus/templates/default.tl`)</p>

## Creating a Unit Test
---
Let's say we have the following directory structure:

```bash
|-foobar
  |-src
    |-foo.js
  |-specs
    |-foo.spec.js
    |-foo.fixture.html
```

* `foo.js`      - Defines the talk() function
* `foo.spec.js` - Unit test that validates the talk() function defined in `foo.js` behaves as expected
* `foo.fixture.html` - HTML to be included when running the unit test defined in `foo.spec.js`

Below are the contents of `foo.spec.js`

```js
/**
 * @venus-library mocha
 * @venus-include ../src/foo.js
 * @venus-fixture foo.fixture.html
 */

test('Foo', function() {
  var foo    = new Foo(),
      result = foo.talk('Hello %s, how are you doing this fine %s?', 'John', 'Monday');

  equal(result, 'Hello John, how are you doing this fine Monday?', 'Foo.talk() formats the string correctly');
});
```

As you can see above, `foo.spec.js` does the following:

* Defines Mocha as it's test library
* Includes `foo.js` to instantiate a `Foo` object and invoke the talk() function
* Uses `foo.fixture.html` to specify HTML needed in order to run the unit test

<br/>

## Run a Unit Test
---
Unit tests can be run from the command line using PhantomJS or locally in a browser

Run unit test with PhantomJS
```bash
venus run --test path/to/unit/test/foo.spec.js --phantom
```

Run unit test locally
```bash
venus run --test path/to/unit/test/foo.spec.js
```
