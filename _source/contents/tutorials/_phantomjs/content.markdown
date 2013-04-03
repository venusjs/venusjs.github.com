PhantomJS is a headless browser that Venus leverages to seamlessly run unit tests

You can find PhantomJS in the project repository under lib/uac/phantom.js

Run the following command to run your tests with PhantomJS:

```js
$ venus run -t tests.js -n
```

The command line option -n or --phantom [path to binary] will specify the test to run with PhantomJS