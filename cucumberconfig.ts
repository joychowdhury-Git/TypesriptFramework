
import {Config} from "protractor";

export let config:Config = {
    
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
             
  },
    specs: ['../features/demo.feature'],

    cucumberOpts: {
        // require step definitions
        require: [
          'path/to/step/definitions/**/*.steps.js' // accepts a glob
        ]
      }

};