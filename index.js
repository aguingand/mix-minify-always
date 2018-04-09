const MinifyTask = require('./MinifyTask');

module.exports = mix => {
    mix.extend('minifyAlways', new class {
        register(src='') {
            Mix.addTask(new MinifyTask(src));
        }
    });
};
