
const prefs = require("simple-prefs");

// define the prefs change callback
function onPrefChange(prefName) {
    console.log("The " + prefName + " preference changed, current value is: " + prefs.prefs[prefName]);

}

// set callback handlers for each pref
prefs.on("stringPreference", onPrefChange);
prefs.on("boolPreference", onPrefChange);
prefs.on("intPreference", onPrefChange);
