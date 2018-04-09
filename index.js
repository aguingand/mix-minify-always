const mix = require('laravel-mix');
const MinifyTask = require('./MinifyTask');

class MinifyAlways {
    register(src='') {
        Mix.addTask(new MinifyTask(src));
    }
}

mix.extend('minifyAlways', new MinifyAlways());

