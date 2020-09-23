"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHVyxRQUFBLE1BQU0sR0FBVTtJQUV2QixrREFBa0Q7SUFDbEQsYUFBYSxFQUFDLElBQUk7SUFDbEIsdUNBQXVDO0lBQ3pDLFNBQVMsRUFBRSxRQUFRO0lBRW5CLDJDQUEyQztJQUMzQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUM3RCxZQUFZLEVBQUU7UUFDVixXQUFXLEVBQUUsUUFBUTtLQUUxQjtJQUNDLEtBQUssRUFBRSxDQUFDLDBCQUEwQixDQUFDO0lBRW5DLFlBQVksRUFBRTtRQUNWLDJCQUEyQjtRQUMzQixPQUFPLEVBQUU7WUFDUCx3Q0FBd0MsQ0FBQyxpQkFBaUI7U0FDM0Q7S0FDRjtDQUVOLENBQUMifQ==