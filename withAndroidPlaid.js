"use strict";
exports.__esModule = true;
var config_plugins_1 = require("@expo/config-plugins");
function applyPackage(mainApplication) {
    var plaidPackageImport = "import com.plaid.PlaidPackage;\n";
    var plaidAddPackage = "packages.add(new PlaidPackage());";
    // Make sure the project does not have the settings already
    if (!mainApplication.includes(plaidPackageImport)) {
        mainApplication = mainApplication.replace(/package com.expo.plaid;/, "package com.expo.plaid;\n".concat(plaidPackageImport));
    }
    if (!mainApplication.includes(plaidAddPackage)) {
        mainApplication = mainApplication.replace(/return packages;/, "\n    ".concat(plaidAddPackage, "\n    return packages;\n    "));
    }
    return mainApplication;
}
var withAndroidPlaid = function (expoConfig) {
    expoConfig = (0, config_plugins_1.withMainApplication)(expoConfig, function (config) {
        config.modResults.contents = applyPackage(config.modResults.contents);
        return config;
    });
    return expoConfig;
};
exports["default"] = withAndroidPlaid;
