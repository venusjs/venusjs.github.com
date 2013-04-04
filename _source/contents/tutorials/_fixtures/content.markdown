This tutorial deals with `@venus-fixture` which imports HTML markup into your test page, this gives you access to DOM nodes in your tests.

* <h3>Why?</h3>

If you write client side apps, chances are that you're manipulating the DOM or interacting with the many events it provides.

In the case that you are adding or removing nodes, checking your ui for various expected values after manipulation, or verifying callbacks triggered by user actions on your apps UI, using fixtures may save you the time that would be otherwise spent stubbing or mocking these features or items.

* <h3>How?</h3>

The `@venus-fixture` directive can be included in your annotation block within your test spec.  It takes a file path as an argument which is relative to the test spec you are running.

So if your test folder had the following structure:

```bash
// Example Test Folder Structure

|-simpleFixtureExample
  |-lib
    |-zepto.1.0.min.js
  |-specs
    |-exampleFixture.spec.js
  |-fixtures
    |-exampleFixture.fixture.html

```

Your annotation block to import `exampleFixture.fixture.html` into your test would look something like this:
```code
// Example Annotation

/**
 * @venus-library mocha
 * @venus-include ../lib/zepto.1.0.min.js
 * @venus-include ../src/Silence.js
 * @venus-fixture ../fixtures/exampleFixture.fixture.html
 */

```

When you run your test, the markup in `exampleFixture.fixture.html` will be available on your test page.

* <h3>Example</h3>

<strong>You can find and run this example in the <a href="http://github.com/linkedin/venus.js">Venus.js</a> repository.</strong>

The files involved in the test are listed in the venus annotation block above.  The name of the spec being run in this example is `exampleFixture.spec.js` which contains the aforementioned venus annotation.

The simple contents of our HTML fixture file `exampleFixture.fixture.html`:
```code
<div id="example-fixture-container"></div>
```


A single test snippet from `exampleFixture.spec.js` which verifies some callback information from a delegated click event:
```code
describe('Test event delegation target', function() {
  it('Click target should equal "example-fixture-container"', function() {
    var spy = sinon.spy();

    document.addEventListener('click', spy, true);
    $('#example-fixture-container').trigger('click');

    // Called once
    expect(spy.calledOnce).to.equal(true);
    // id is correct
    expect(spy.args[0][0].target.id).to.equal('example-fixture-container');
  });
});
```
