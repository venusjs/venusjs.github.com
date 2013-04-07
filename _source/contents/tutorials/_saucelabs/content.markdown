Venus provides Sauce Labs integration so that you can run your tests remotely on their browser farms

You must first configure your username and access key in lib/util/executor.js

Run the following command to run your tests with Sauce Labs:

```js
$ venus run -t tests.js -x
```

The command line option -x or --sauce-labs will specify the test to run with Sauce Labs

More command line options:

&nbsp;&nbsp;&nbsp;-xb, --sauce-labs-browser [browser]                  
&nbsp;&nbsp;&nbsp;-xv, --sauce-labs-version [version]          
&nbsp;&nbsp;&nbsp;-xp, --sauce-labs-platform [platform]          
&nbsp;&nbsp;&nbsp;-xr, --sauce-labs-server [url]      
&nbsp;&nbsp;&nbsp;-xu, --sauce-labs-username [username]          
&nbsp;&nbsp;&nbsp;-xa, --sauce-labs-access-key [accessKey]        