const Task = require('laravel-mix/src/tasks/Task');
const FileCollection = require('laravel-mix/src/FileCollection');

class MinifyTask extends Task {
    run() {
        this.files = new FileCollection(this.data);
        this.minify();
    }
    minify() {
        this.assets = this.files.get().map(file => this.minOutput(file).minify());
    }
    minOutput(src) {
        let output = src.replace(/\.([a-z]{2,})$/i, '.min.$1');
        new File(src).copyTo(output);
        return new File(output);
    }
    onChange() {
        this.minify();
    }
}

module.exports = MinifyTask;