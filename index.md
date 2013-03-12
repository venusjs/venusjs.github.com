---
layout    : page
no_layout : true
title     : Introducing Venus
---
{% include config %}

<!-- Intro -->
<div id="intro">
  <h1>Introducing Venus.js</h1>

  <h4>Organize and run your entire JS testing system with a single tool using Node.js</h4>

  <p>By eliminating repetitive tasks and friction points, Venus lets you focus on writing tests instead of running them. Already have JavaScript testing in place? Perfect! Venus is designed to orchestrate and automate existing tools like Mocha, Jasmine and QUnit.</p>

  <div class="actions">
    <a class="cta" href="{{ GIT_PATH }}/archive/master.zip">Download</a>
    <a class="cta" href="{{ GIT_PATH }}">GitHub</a>
  </div>
</div>

<!-- Quick Launch -->
<div id="quick-launch">
  <h2>Quick Launch</h2>
  <ul class="instructions">
    <li class="step active" data-step-number="1">
      <a href="#command1">
        <div class="step-number">1</div>
        <p>Install Node.js</p>
      </a>
    </li>
    <li class="step" data-step-number="2">
      <a href="#command2">
        <div class="step-number">2</div>
        <p>Install PhantomJS</p>
      </a>
    </li>
    <li class="step" data-step-number="3">
      <a href="#command3">
        <div class="step-number">3</div>
        <p>Install Venus via NPM</p>
      </a>
    </li>
    <li class="step" data-step-number="4">
      <a href="#command4">
        <div class="step-number">4</div>
        <p>Verify installation</p>
      </a>
    </li>
  </ul>
  <div class="terminal">
    <p class="prompt">
      [ Venus ~ ]
      <span id="command1" class="command active" data-step-number="1">brew install node</span>
      <span id="command2" class="command" data-step-number="2">brew install phantomjs</span>
      <span id="command3" class="command" data-step-number="3">npm install -g venus</span>
      <span id="command4" class="command" data-step-number="4">venus demo</span>
    </p>
    <img src="{{ ASSET_PATH }}/images/venus/terminal.png" alt="Terminal"> 
  </div>
</div>

<!-- Stellar Features -->
<div id="features">
  <h2>Stellar Features</h2>
  <div class="feature">
    <h4>CL Interface</h4>
    <p>Kick off tests from the command line. Quick and easy, no need to manually launch a browser.</p>
  </div>
  <!-- <div class="feature"> -->
    <!-- <h4>Tool integration</h4> -->
    <!-- <p>Venus supports all your favorite tools, including Vim, Sublime Text, Eclipse and more. No need to leave your IDE to run your tests.</p> -->
  <!-- </div> -->
  <div class="feature">
    <h4>Advanced Configuration</h4>
    <p>Complete control over test fixtures, test harness pages and more.</p>
  </div>
  <div class="feature">
    <h4>Use with CI</h4>
    <p>Seamless integration with Selenium Grid and Travis CI.</p>
  </div>
</div>
