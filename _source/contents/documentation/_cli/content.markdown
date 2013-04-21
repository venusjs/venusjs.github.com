<h3>venus run</h3>
<hr>

<p>Will run tests specified as an argument to the `--tests` or `-t` option.  When this command is executed, venus will look for a `.venus` config file in the current directory or otherwise traverse upwards until one is found.   If no config file is found you will recieve an error.</p>
<p>Options:</p>

```code
-h, --help                        output usage information
-t, --test [tests]                Comma separated string of tests to run
-p, --port [port]                 port to run on
-n, --phantom [path to binary]    Use phantomJS client to run browser tests
-s, --selenium                    Use selenium client to run browser tests
-r, --selenium-server [url]       Specify selenium server to use
-b, --selenium-browser [browser]  Specify browser to use with selenium
-l, --locale [locale]             Specify locale to use
-v, --verbose                     Run in verbose mode
-d, --debug                       Run in debug mode
-c, --coverage                    Generate Code Coverage Report
--require-annotations             Ignore test files lacking Venus annotations (@venus-*)
```
<p>Basic format:</p>

```code
venus run --test [path to folder containing tests or single test file] [options]
```

<p>Usage (Run JavaScript tests found in a folder and its subfolders in phantomjs headless browser):</p>

```code
venus run -t myproject/containing/tests --phantom
```

<hr>
<h3>venus init</h3>
<hr>

<p>Generates a `.venus` project folder, with a boilerplate config file</p>

<p>Options:</p>

```code
-h, --help             output usage information
-l, --locale [locale]  Specify locale to use
-v, --verbose          Run in verbose mode
-d, --debug            Run in debug mode
```

<p>Usage:</p>

```code
venus init
```

<p>Output:</p>

```bash
|-.venus/
  |-config
  |-adaptors/
  |-templates/
  |-libraries/
```

<p>Boilderplate `.venus/config` file:</p>
```code
// Configuration file for Venus
// All paths can be relative (to the location of this config file) or absolute
{
  default: {},
  libraries: {},
  binaries: {},
  static: {},
  includes: {},
  basePaths: {}
}
```

<hr>
<h3>venus demo</h3>
<hr>

<p>Runs an example venus test using mocha and phantomjs</p>
<p>example:</p>
```code
venus demo
```