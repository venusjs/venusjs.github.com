##Background

Venus uses adaptors to communicate with different test frameworks. Each adaptor normalizes the output of it's respective framework in order for Venus to process the test results.

The frameworks currently supported by Venus are:

  - &nbsp;&nbsp;&nbsp;- Mocha
  - &nbsp;&nbsp;&nbsp;- Jasmine
  - &nbsp;&nbsp;&nbsp;- QUnit

All adaptors can be found in `.venus/adaptors`

Inside `.venus/adaptors`, you will find a file named `adaptor-template.js`. This file serves as the base template for all adaptors. 

##Example

Let's say we want to create an adaptor for a test framework named FooBar (library file is named `foobar.js`)

The first step is to place `foobar.js` in `.venus/libraries`

Next, create a file named `foobar-venus.js` and place it in `.venus/adaptors`

The contents of `foobar-venus.js` should do the following:

  - &nbsp;&nbsp;&nbsp;1. Instantiate the adaptor
`function Adaptor() {};`

  - &nbsp;&nbsp;&nbsp;2. Inherit the adaptor template
`Adaptor.prototype = new AdaptorTemplate();`

  - &nbsp;&nbsp;&nbsp;3. Override the following methods, which are defined in `adaptor-template.js`, based on the FooBar test framework:

    - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- `start()`
    - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- `getTestMessage()`
    - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- `getTestName()`
    - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- `getTestStatus()`
    - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- `getTestStackTrace()`
    - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- `getTotal()`
    - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- `getTotalFailed()`
    - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- `getTotalPassed()`
    - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- `getTotalRuntime()`

Finally, define the configuration for FooBar in `.venus/config`:

    foobar: {
      includes: [
        'libraries/foobar.js',
        'adaptors/adaptor-template.js',
        'adaptors/foobar-venus.js'
      ]
    }
    
Now you can add the Venus annotation `@venus-library foobar` at the top of any JS unit test to use the FooBar test framework with Venus