// webpack.config.js
var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where all compiled assets will be stored
    .setOutputPath('web/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create public/build/app.js and public/build/app.css
    .addEntry('app', './assets/js/app.js')

    .addEntry('highcharts', './assets/js/highcharts.js')

    .addEntry('pie', './assets/js/pie.js')

    .addEntry('transport', './assets/js/transport.js')
     
  // будет выводиться, как web/build/global.css
    .addStyleEntry('global', './assets/css/global.scss')
 // будет выводиться, как web/build/global.css
    .addStyleEntry('styletwig', './assets/css/styletwig.scss')

    .addStyleEntry('bootstrap', './assets/css/bootstrap.scss')

    // allow sass/scss files to be processed
    .enableSassLoader()

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    //.enableBuildNotifications()

    // create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();
