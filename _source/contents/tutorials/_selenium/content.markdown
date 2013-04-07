Using Selenium, you can request a VM with a given browser to execute a unit test via Venus

Run the following command to run your tests with Selenium:

```js
$ venus run -t tests.js -s
```

The command line option -s or --selenium will specify the test to run with Selenium

More command line options:

&nbsp;&nbsp;&nbsp;r, --selenium-server [url]                  
&nbsp;&nbsp;&nbsp;b, --selenium-browser [browser]              