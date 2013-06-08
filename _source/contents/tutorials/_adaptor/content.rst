Background
----------

 uses adaptors to communicate with different test frameworks. Each
adaptor normalizes the output of it's respective framework in order for
 to process the test results.

The frameworks currently supported by  are:

-     - Mocha
-     - Jasmine
-     - QUnit

All adaptors can be found in ``./adaptors``

Inside ``./adaptors``, you will find a file named
``adaptor-template.js``. This file serves as the base template for all
adaptors.

Example
-------

Let's say we want to create an adaptor for a test framework named FooBar
(library file is named ``foobar.js``)

The first step is to place ``foobar.js`` in ``./libraries``

Next, create a file named ``foobar-.js`` and place it in
``./adaptors``

The contents of ``foobar-.js`` should do the following:

-     1. Instantiate the adaptor ``function Adaptor() {};``

-     2. Inherit the adaptor template
   ``Adaptor.prototype = new AdaptorTemplate();``

-     3. Override the following methods, which are defined in
   ``adaptor-template.js``, based on the FooBar test framework:

   -           - ``start()``
   -           - ``getTestMessage()``
   -           - ``getTestName()``
   -           - ``getTestStatus()``
   -           - ``getTestStackTrace()``
   -           - ``getTotal()``
   -           - ``getTotalFailed()``
   -           - ``getTotalPassed()``
   -           - ``getTotalRuntime()``

Finally, define the configuration for FooBar in ``./config``:

::

    foobar: {
      includes: [
        'libraries/foobar.js',
        'adaptors/adaptor-template.js',
        'adaptors/foobar-.js'
      ]
    }

Now you can add the  annotation ``@-library foobar`` at the
top of any JS unit test to use the FooBar test framework with 
