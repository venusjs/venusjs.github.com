Venus allows you to use comment-based annotations to define configurations for your unit test:

* <h3>@venus-library</h3><p>Indicates the test library you wish to use. The test libraries that are currently supported are `mocha`, `jasmine` and `qunit` (Default library is Mocha)</p>
* <h3>@venus-include</h3><p>JavaScript file to include with your unit test. Use a seperate @venus-include annotation for every file you wish to include. The path is relative to the location of your test file.</p>
* <h3>@venus-fixture</h3><p>The location of the file that will include HTML on the test harness page. This is useful for including some DOM elements that your JavaScript control depends on, for example. The path is relative to the location of your test file.</p>
* <h3>@venus-template</h3><p>The location of the file that will serve as your test harness page for your unit test (Default file is `.venus/templates/default.tl`)</p>

<hr>

<p>Example:</p>
```code
/**
 * @venus-library mocha
 * @venus-include ../src/Greeter.js
 * @venus-fixture ../fixtures/Greeter.html
 * @venus-tempalte custom
 */
```