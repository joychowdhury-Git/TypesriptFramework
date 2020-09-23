"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['testspec.js'],
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR1csUUFBQSxNQUFNLEdBQVU7SUFFdkIsa0RBQWtEO0lBQ2xELGFBQWEsRUFBQyxJQUFJO0lBRWxCLFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxRQUFRO0tBRTFCO0lBQ0MsS0FBSyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBR3RCLGVBQWUsRUFBRTtRQUNiLFVBQVUsRUFBRSxJQUFJLENBQUMseUNBQXlDO0tBQzNEO0NBRU4sQ0FBQyJ9