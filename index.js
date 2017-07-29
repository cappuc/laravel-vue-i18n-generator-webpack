const exec = require('child_process').exec
const chokidar = require('chokidar')

class LaravelVueI18nGenerator {
    constructor() {
        this.isWatchingForChanges = false
        this.firstCompile = true
    }

    apply(compiler) {
        compiler.plugin('before-compile', (_, cb) => {
            if (this.firstCompile) {
                this.generate()
                this.firstCompile = false
            }
            cb()
        })

        if (this.isWatching()) {
            this.watchFiles()
        }
    }

    generate() {
        exec('php artisan vue-i18n:generate')
    }

    watchFiles() {
        if (this.isWatchingForChanges) return

        chokidar.watch('resources/lang/**/*', {
            persistent: true
        }).on('change', this.generate)

        this.isWatchingForChanges = true
    }

    isWatching() {
        return process.argv.includes('--watch')
    }
}

module.exports = LaravelVueI18nGenerator
