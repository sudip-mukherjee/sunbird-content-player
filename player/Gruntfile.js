module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        buildNumber: process.env.BUILD_NUMBER,
        mkdir: {
            all: {
              options: {
                    create: ['www']
                },
            },
        },
        watch: {
          //run unit tests with karma (server needs to be already running)
          karma: {
            tasks: ['karma:unit:run'] //NOTE the :run flag
          }
        },
        karma: {
            plugin: {
                configFile: '../js-libs/renderer/plugin/test/karma.plugin.config.js',
            },
            app: {
                configFile: 'public/test/karma.app.config.js',
            }    
        },
        jsdoc : {
            dist : {
                src: ['public/*.js'],
                options: {
                    destination: 'doc'
                }
            }
        },
        concat: {
            css: {
                src: [
                    'public/styles/ionic.css',
                    'public/lstyles/bookshelf_slider.css',
                    'public/styles/skin02.css',
                    'public/styles/toastr.min.css',
                    'public/styles/jquery.mCustomScrollbar.min.css'
                ],
                dest: 'www/styles/renderer.external.min.css'
            },
            externaljs:{
                src: [
                    'public/libs/jquery.min.js',
                    'public/libs/jquery.easing.1.3.js',
                    'public/libs/jquery.bookshelfslider.min.js',
                    'public/libs/async.min.js',
                    'public/libs/toastr.min.js',
                    'public/libs/md5.js',
                    'public/libs/jquery.mCustomScrollbar.concat.min.js',
                    'public/libs/underscore.js',
                    'public/libs/date-format.js',
                    'public/libs/ionic.bundle.min.js',
                    'public/libs/angular-resource.min.js',
                    'public/libs/ng-cordova.min.js',
                    'public/libs/ocLazyLoad.js',
                    'public/libs/plugin-framework.min.js'
                ],
                dest: 'www/scripts/renderer.external.min.js'
            },
            script:{
                src: [
                    'public/js/appConfig.js',
                    'public/js/globalContext.js',
                    'public/js/appMessages.js',
                    'public/js/main.js',
                    'public/js/app.js',
                    'public/js/basePlugin.js',
                    'public/services/mainservice.js',
                    'public/services/webservice.js',
                    'public/services/interfaceService.js',
                    'public/js/content-renderer.js',
                    'public/services/controllerservice.js',
                    'public/js/detectClient.js',
                    'public/js/ekstepRendererApi.js',
                ],
                dest: 'www/scripts/renderer.script.min.js'
            },
            telemetry:{
                src: [
                    'public/libs/class.js',
                    'public/libs/date-format.js',
                    '../js-libs/telemetry/*.js'
                ],
                dest: 'www/scripts/renderer.telemetry.min.js'
            },
            genieservicebridge:{
                src: [
                    'www/preview/scripts/telemetry.min.js',
                    'public/services/htmlservice.js',
                    'public/js/genieservice-bridge.js'
                ],
                dest: 'www/scripts/genieservice-bridge.min.js'
            }
        },
        uglify: {
            js: {
                options: {
                    beautify: true,
                    mangle: false
                },
                files: {
                    'public/js/script.min.js': [
                        'public/js/app/GlobalContext.js',
                        'public/js/app/AppMessages.js',
                        'public/js/app/main.js',
                        'public/js/app/app.js',
                        'public/js/app/detectClient.js',
                        'public/js/app/overlay.js',
                    ],
                    'public/js/renderer.min.js': [
                        'public/js/app/speech.js',
                        'public/js/app/services.js',
                        'public/js/thirdparty/exclude/xml2json.js',
                        'public/js/thirdparty/exclude/createjs-2015.11.26.min.js',
                        'public/js/thirdparty/exclude/cordovaaudioplugin-0.6.1.min.js',
                        'public/js/thirdparty/exclude/creatine-1.0.0.min.js',
                        'public/js/thirdparty/exclude/eventbus.min.js',
                        'public/js/thirdparty/exclude/Class.js',
                        'public/js/thirdparty/exclude/underscore.js',
                        'public/js/thirdparty/exclude/md5.js',
                        'public/js/app/genieservices.js',
                        'public/js/app/EkstepRendererApi.js',
                        'public/js/app/renderer.js'
                    ],
                    'public/js/genieservice-bridge.min.js' : [
                        'public/js/app/genieservices.js',
                        'public/js/thirdparty/exclude/date-format.js',
                        'public/js/thirdparty/exclude/Class.js',
                        'public/js/app/telemetry.js',
                        'public/js/app/genieservice-bridge.js'
                    ],
                    'public/js/telemetry.min.js' : [
                        'public/js/thirdparty/exclude/date-format.js',
                        'public/js/thirdparty/exclude/Class.js',
                        'public/js/app/telemetry.js'
                    ]
                }
            },
            speech: {
                options: {
                    beautify: true,
                    mangle: false
                },
                files:{
                    'public/js/app/speech.js': ['../js-libs/speech/speech.js', '../js-libs/speech/android-recorder.js']
                }
            },
            pluginLib: {
                options: {
                    beautify: true,
                    mangle: false
                },
                files: {
                    'public/js/app/plugin-lib.js': [
                        'public/js/thirdparty/exclude/createjs-2015.11.26.min.js',
                        'public/js/thirdparty/exclude/Class.js',
                        'public/js/thirdparty/exclude/eventbus.min.js',
                        'public/js/thirdparty/exclude/md5.js',
                        'public/js/thirdparty/plugin-framework.min.js',
                        '../js-libs/renderer/plugin/Plugin.js',
                        '../js-libs/renderer/plugin/HTMLPlugin.js',
                        '../js-libs/renderer/manager/PluginManager.js',
                        '../js-libs/renderer/manager/AnimationManager.js',
                        '../js-libs/renderer/plugin/LayoutPlugin.js',
                        '../js-libs/renderer/plugin/ShapePlugin.js',
                        '../js-libs/renderer/plugin/*Plugin.js'
                    ]
                }
            },
            renderer: {
                options: {
                    beautify: true,
                    mangle: false
                },
                files: {
                    'public/js/app/renderer.js': [
                        'public/js/thirdparty/plugin-framework.min.js',
                        '../js-libs/renderer/plugin/Plugin.js',
                        '../js-libs/renderer/plugin/HTMLPlugin.js',
                        '../js-libs/renderer/manager/*.js',
                        '../js-libs/renderer/command/Command.js',
                        '../js-libs/renderer/command/*.js',
                        '../js-libs/renderer/controller/*Controller.js',
                        '../js-libs/renderer/generator/*.js',
                        '../js-libs/renderer/evaluator/*.js',
                        '../js-libs/renderer/plugin/LayoutPlugin.js',
                        '../js-libs/renderer/plugin/ShapePlugin.js',
                        '../js-libs/renderer/plugin/*Plugin.js',
                        '../js-libs/renderer/renderer/*.js',
                        'public/js/app/EkstepRendererApi.js'
                    ]
                }
            },
            renderermin:{
                options: {
                    beautify: true,
                    mangle: false
                },
                files: {
                    'public/coreplugins/org.ekstep.ecmlrenderer-1.0/renderer/libs/renderer.min.js': [
                        'public/libs/xml2json.min.js',
                        '../js-libs/renderer/manager/PluginManager.js',
                        '../js-libs/renderer/manager/ControllerManager.js',
                        '../js-libs/renderer/manager/AudioManager.js',
                        '../js-libs/renderer/controller/Controller.js',
                        '../js-libs/renderer/controller/DataController.js',
                        '../js-libs/renderer/controller/ItemController.js',
                        '../js-libs/renderer/evaluator/ChoiceEvaluator.js',
                        '../js-libs/renderer/evaluator/FTBEvaluator.js',
                        '../js-libs/renderer/evaluator/MTFEvaluator.js',
                        '../js-libs/renderer/manager/AnimationManager.js',
                        '../js-libs/renderer/manager/AssetManager.js',
                        '../js-libs/renderer/manager/CommandManager.js',
                        '../js-libs/renderer/manager/EventManager.js',
                        '../js-libs/renderer/manager/OverlayManager.js',
                        '../js-libs/renderer/manager/LoadByStageStrategy.js',
                        '../js-libs/renderer/manager/RecorderManager.js',
                        '../js-libs/renderer/manager/TimerManager.js',
                        '../js-libs/renderer/generator/DataGenerator.js',
                        '../js-libs/renderer/generator/ItemDataGenerator.js',
                        '../js-libs/renderer/command/Command.js',
                        '../js-libs/renderer/command/*.js',
                        '../js-libs/renderer/plugin/HTMLPlugin.js',
                        '../js-libs/renderer/plugin/AnimationPlugin.js',
                        '../js-libs/renderer/plugin/LayoutPlugin.js',
                        '../js-libs/renderer/plugin/ShapePlugin.js',
                        '../js-libs/renderer/plugin/AudioPlugin.js',
                        '../js-libs/renderer/plugin/ContainerPlugin.js',
                        '../js-libs/renderer/plugin/RepoPlugin.js',
                        '../js-libs/renderer/plugin/DivPlugin.js',
                        '../js-libs/renderer/plugin/EmbedPlugin.js',
                        '../js-libs/renderer/plugin/HotspotPlugin.js',
                        '../js-libs/renderer/plugin/ImagePlugin.js',
                        '../js-libs/renderer/plugin/InputPlugin.js',
                        '../js-libs/renderer/plugin/MCQPlugin.js',
                        '../js-libs/renderer/plugin/MTFPlugin.js',
                        '../js-libs/renderer/plugin/OptionPlugin.js',
                        '../js-libs/renderer/plugin/OptionsPlugin.js',
                        '../js-libs/renderer/plugin/PlaceHolderPlugin.js',
                        '../js-libs/renderer/plugin/SetPlugin.js',
                        '../js-libs/renderer/plugin/SpritePlugin.js',
                        '../js-libs/renderer/plugin/StagePlugin.js',
                        '../js-libs/renderer/plugin/SummaryPlugin.js',
                        '../js-libs/renderer/plugin/TelemetryPlugin.js',
                        '../js-libs/renderer/plugin/TestcasePlugin.js',
                        '../js-libs/renderer/plugin/TextPlugin.js',
                        '../js-libs/renderer/plugin/ThemePlugin.js',
                        '../js-libs/renderer/plugin/TweenPlugin.js',
                        '../js-libs/renderer/plugin/ScribblePlugin.js',
                        '../js-libs/renderer/plugin/VideoPlugin.js',
                        '../js-libs/renderer/plugin/GridlayoutPlugin.js',
                        '../js-libs/renderer/plugin/HighlightTextPlugin.js',
                        '../js-libs/speech/android-recorder.js',
                        '../js-libs/speech/speech.js'
                    ]
                }
            },
            testRenderer: {
                options: {
                    beautify: true,
                    mangle: false
                },
                files: {
                    'public/js/app/testRenderer.js': [
                        'public/js/thirdparty/plugin-framework.min.js',
                        '../js-libs/renderer/command/Command.js',
                        '../js-libs/renderer/command/*.js',
                        '../js-libs/renderer/controller/Controller.js',
                        '../js-libs/renderer/controller/*Controller.js',
                        '../js-libs/renderer/manager/*.js',

                        '../js-libs/renderer/evaluator/*.js',
                        '../js-libs/renderer/plugin/Plugin.js',
                        '../js-libs/renderer/plugin/*Plugin.js',
                        '../js-libs/renderer/renderer/CanvasRenderer.js',

                        //Excluded files for test coverage
                        '!../js-libs/renderer/manager/RecordManager.js',
                        '!../js-libs/renderer/plugin/VideoPlugin.js',
                        '!../js-libs/renderer/plugin/HighlightTextPlugin.js',
                        '!../js-libs/renderer/plugin/TestcasePlugin.js',
                        '!../js-libs/renderer/plugin/SummaryPlugin.js'

                    ]
                }
            },
            telemetry: {
                options: {
                    beautify:true,
                    mangle: false
                },
                files: {
                    'public/js/app/telemetry.js': [
                        '../js-libs/telemetry/*.js',
                    ]
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'public/',
                        src: ['**', '!**/controller/**', '!**/evaluator/**', '!**/manager/**', '!**/plugin/**', '!**/renderer/**', '!**/generator/**', '!**/telemetry/**', '!**/test/**', '!**/tests/**', '!**/jasmine-2.3.4/**', '!**/exclude/**'],
                        dest: 'www/'
                    },
                    {
                        src: ['public/js/app/AppConfig.js'], dest: 'www/js/AppConfig.js'
                    }
                ]
            },
            previewFiles: {
                files: [
                    {
                        expand: true,
                        cwd: 'public/',
                        src: ['img/**', 'fonts/**', 'templates/**', 'libs/**', 'json/**', 'css/**', 'assets/**', 'js/**', 'webview.html', 'preview.html'],
                        dest: 'www/preview/'
                    },
                    {
                        src: ['public/js/app/AppConfig.js'], dest: 'www/preview/js/AppConfig.js'
                    }
                ]
            },
            localPreviewFiles: {
                files: [
                    {
                        expand: true,
                        cwd: 'public/',
                        src: ['img/**', 'css/**', 'libs/**', 'templates/**', 'js/**'],
                        dest: 'public/local-preview/'
                    }
                ]
            },
            localPreviewMinjs: {
                files: [
                    {
                        expand: true,
                        cwd: 'public/js/',
                        src: ['renderer.min.js','telemetry.min.js', 'script.min.js'],
                        dest: 'public/local-preview/'
                    }
                ]
            },
            unsigned: {
                files: [
                    {
                        expand: true,
                        cwd: 'build-config/',
                        src: 'build-extras.gradle',
                        dest: 'platforms/android/'
                    },
                    {
                        expand: true,
                        cwd: 'build-config/',
                        src: 'gradle.properties',
                        dest: 'platforms/android/'
                    }
                ]
            },
            signed: {
                files: [
                    {
                        expand: true,
                        cwd: 'build-config/signedRelease',
                        src: 'build-extras.gradle',
                        dest: 'platforms/android/'
                    },
                    {
                        expand: true,
                        cwd: 'build-config/signedRelease',
                        src: 'gradle.properties',
                        dest: 'platforms/android/'
                    },
                    {
                        expand: true,
                        cwd: 'build-config/signedRelease',
                        src: 'ekstep.keystore',
                        dest: 'platforms/android/'
                    }
                ]
            },
            androidLib: {
                files: [
                    {
                        expand: true,
                        cwd: 'build-config',
                        src: 'AndroidManifest.xml',
                        dest: 'platforms/android/'
                    }
                ]
            },
            customActivity: {
                files: [
                    {
                        expand: true,
                        cwd: 'build-config',
                        src: 'MainActivity.java',
                        dest: 'platforms/android/src/org/ekstep/geniecanvas'
                    }
                ]
            },
            newmain: {
                files: [
                    {
                        expand: true,
                        cwd: 'public/',
                        src: ['assets/**', '!js/tests/**', 'js/*', 'coreplugins/**', 'json/*', 'libs/*', 'styles/**', 'templates/*', 'index.html', 'index_min.html'],
                        dest: 'www/'
                    },
                    {
                        src: ['public/js/AppConfig.js'], dest: 'www/js/AppConfig.js'
                    }
                    ,
                    {
                        src: ['../js-libs/renderer/manager/AudioManager.js',], dest: 'www/scripts/AudioManager.js'
                    }
                ]
            },
            testinit:{
                files: [
                    {
                        expand: true,
                        cwd: 'www/scripts',
                        src: ['renderer.external.min.js', 'renderer.script.min.js', 'renderer.telemetry.min.js'],
                        dest: 'dist'
                    },
                    {
                        expand: true,
                        cwd: 'www/coreplugins/org.ekstep.ecmlrenderer-1.0/renderer/libs',
                        src: ['renderer.min.js'],
                        dest: 'dist'
                    }
                ]
            }
        },
        clean: {
            before: ["www", "platforms/android/assets/www", "platforms/android/build"],
            after: ["www/TelemetrySpecRunner.html", "www/WorksheetSpecRunner.html", "www/webview.html", "www/preview.html"],
            samples: ["www/stories", "www/fixture-stories", "www/worksheets"],
            minjs: ['public/js/*.min.js'],
            localPreview: ["public/local-preview"],
            deletefiles: {
               src: ['www/styles/ionic.css', 'www/styles/bookshelf_slider.css', 'www/styles/skin02.css', 'www/styles/toastr.min.css', 'www/styles/jquery.mCustomScrollbar.min.css', 'www/libs', 'www/js']
            }
        },
        rename: {
            main: {
                src: 'www/index_min.html',
                dest: 'www/index.html'
            },
            preview:{
                src: 'www/index.html',
                dest: 'www/preview.html'
            }
        },
        aws_s3: {
            options: {
                region: 'ap-south-1',
                uploadConcurrency: 5, // 5 simultaneous uploads
                downloadConcurrency: 5, // 5 simultaneous downloads
                progress: 'progressBar',
                accessKeyId: '', // Use the variables
                secretAccessKey: '', // You can also use env variables
            },
            uploadJS: {
                options: {
                    bucket: 'ekstep-public',
                    mime: {
                        'public/js/renderer.min.js': 'application/javascript',
                        'public/js/telemetry.min.js': 'application/javascript'
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'public/js/',
                    src: ['*.min.js'],
                    dest: 'js/'
                }]
            },
            uploadPreviewFilesToDev : {
                options: {
                    bucket: 'ekstep-public-dev',
                    uploadConcurrency : 4,
                    progress: 'progressBar'
                },
                files: [{
                    expand: true,
                    cwd: 'www/preview',
                    src: ['**'],
                    dest: '/preview/'
                }]
            },
            uploadPreviewFilesToQA : {
                options: {
                    bucket: 'ekstep-public-qa',
                    access: 'public-read',
                    uploadConcurrency : 4,
                    progress: 'progressBar'
                },
                files: [{
                    expand: true,
                    cwd: 'www/preview',
                    src: ['**'],
                    dest: '/preview/'
                }]
            },
            uploadPreviewFilesToProduction : {
                options: {
                    bucket: 'ekstep-public-production',
                    access: 'public-read',
                    uploadConcurrency : 4,
                    progress: 'progressBar'
                },
                files: [{
                    expand: true,
                    cwd: 'www/preview',
                    src: ['**'],
                    dest: '/preview/'
                }]
            },
            cleanJS: {
                options: {
                    bucket: 'ekstep-public-dev/preview'
                },
                files: [{
                    dest: 'js/renderer.min.js',
                    exclude: "**/.*",
                    action: 'delete'
                },
                {
                    dest: 'js/telemetry.min.js',
                    exclude: "**/.*",
                    action: 'delete'
                }]
            },
            cleanQAPreview: {
                options: {
                    bucket: 'ekstep-public-qa'
                },
                files: [{
                    dest: 'preview/',
                    action: 'delete'
                }]
            },
            cleanDevPreview: {
                options: {
                    bucket: 'ekstep-public-dev'
                },
                files: [{
                    dest: 'preview/',
                    action: 'delete'
                }]
            },
            cleanProductionPreview: {
                options: {
                    bucket: 'ekstep-public-production'
                },
                files: [{
                    dest: 'preview/',
                    action: 'delete'
                }]
            },

            PluginframeworkFromDev: {
                options: {
                    bucket: 'ekstep-public-dev',
                },
                files: [{
                    dest: 'content-editor/scripts/plugin-framework.min.js',
                    cwd: 'public/js/thirdparty/',
                    action: 'download'
                }]
            }
        },
        cordovacli: {
            options: {
                path: 'www',
                cli: 'cordova'  // cca or cordova
            },
            add_platforms: {
                options: {
                    command: 'platform',
                    action: 'add',
                    platforms: ['android@6.1.2']
                }
            },
            rm_platforms: {
                options: {
                    command: 'platform',
                    action: 'rm',
                    platforms: ['android']
                }
            },
            add_plugins: {
                options: {
                    command: 'plugin',
                    action: 'add',
                    plugins: [
                        'cordova-plugin-device@1.1.4',
                        'cordova-plugin-file@4.3.1',
                        'cordova-plugin-splashscreen@4.0.1',
                        'ionic-plugin-keyboard@2.2.0',
                        'cordova-plugin-console@1.0.2',
                        'https://github.com/akashgupta9990/cordova-webIntent.git',
                        'cordova-plugin-whitelist@1.2.1',
                        'cordova-plugin-crosswalk-webview@2.3.0',
                        'https://github.com/akashgupta9990/cordova-webIntent.git',
                        'cordova-plugin-file-transfer@1.6.1',
                        'com.lampa.startapp@0.1.4',
                        'cordova-plugin-inappbrowser@1.6.1',
                        'cordova-plugin-market@1.1'
                    ]
                }
            },
            add_genie_services: {
                options: {
                    command: 'plugin',
                    action: 'add',
                    plugins: [
                        '../cordova-plugins/cordova-plugin-genieservices/'
                    ]
                }
            },
            add_crashlytics_plugin: {
                options: {
                    command: 'plugin',
                    action: 'add',
                    plugins: [
                        'https://github.com/etabard/cordova-fabric-crashlytics-plugin'
                    ],
                    args:['--variable','CRASHLYTICS_API_SECRET=a98a1c7293881445c6e471588c3adaaef3814c89bdf26b4c1393196162ba9e1c','--variable','CRASHLYTICS_API_KEY=4a735dc3520070ad4ea3339e4d8d2bb00efe8eaa']
                }
            },
            add_xwalk: {
                options: {
                    command: 'plugin',
                    action: 'add',
                    plugins: [
                        'cordova-plugin-crosswalk-webview@2.3.0'
                    ],
                    args:['--variable','XWALK_MODE=embedded']
                }
            },
            add_xwalk_shared: {
                options: {
                    command: 'plugin',
                    action: 'add',
                    plugins: [
                        'cordova-plugin-crosswalk-webview@2.3.0'
                    ],
                    args:['--variable','XWALK_MODE=shared']


                }
            },
            rm_xwalk: {
                options: {
                    command: 'plugin',
                    action: 'rm',
                    plugins: [
                        'cordova-plugin-crosswalk-webview'
                    ]
                }
            },
            add_sensibol_recorder: {
                options: {
                    command: 'plugin',
                    action: 'add',
                    plugins: [
                        '../cordova-plugins/cordova-plugin-sensibol/'
                    ]
                }
            },
            rm_sensibol_recorder: {
                options: {
                    command: 'plugin',
                    action: 'rm',
                    plugins: [
                        'cordova-plugin-sensibol'
                    ]
                }
            },
            add_android_media: {
                options: {
                    command: 'plugin',
                    action: 'add',
                    plugins: ['cordova-plugin-media@2.3.0']
                }
            },
            rm_android_media: {
                options: {
                    command: 'plugin',
                    action: 'rm',
                    plugins: ['cordova-plugin-media']
                }
            },
            rm_genie_service: {
                options: {
                    command: 'plugin',
                    action: 'rm',
                    plugins: ['cordova-plugin-genieservices']
                }
            },
            build_android: {
                options: {
                    command: 'build',
					force: true,
                    platforms: ['android']
                }
            },
            build_android_release: {
                options: {
                    command: 'build',
                    platforms: ['android'],
                    args: ['--release']
                }
            },
            run_android: {
                options: {
                    command: 'run',
                    platforms: ['android']
                }
            }
        },
        replace: {
            sensibol: {
                src: ['www/js/AppConfig.js', 'www/js/renderer.min.js'],
                overwrite: true,
                replacements: [{
                    from: /AUDIO_RECORDER/g,
                    to: "sensibol"
                }]
            },
            android: {
                src: ['www/js/AppConfig.js', 'www/js/renderer.min.js'],
                overwrite: true,
                replacements: [{
                    from: /AUDIO_RECORDER/g,
                    to: "android"
                }]
            },
            build_version: {
                src: ['www/js/AppConfig.js', 'www/preview.html', 'www/preview/preview.html'],
                overwrite: true,
                replacements: [{
                    from: /BUILD_NUMBER/g,
                    to: '<%= buildNumber %>'
                }]
            },
            preview_dev: {
                src: ['www/preview/js/AppConfig.js', 'www/preview/webview.html', 'www/preview/preview.html'],
                overwrite: true,
                replacements: [{
                    from: /DEPLOYMENT/g,
                    to: "dev"
                },{
                    from: /DEPLOYMENT/g,
                    to: "dev"
                }]
            },
            preview_production: {
                src: ['www/preview/js/AppConfig.js', 'www/preview/webview.html'],
                overwrite: true,
                replacements: [{
                    from: /DEPLOYMENT/g,
                    to: "production"
                }]
            },
            preview_QA: {
                src: ['www/preview/js/AppConfig.js', 'www/preview/webview.html'],
                overwrite: true,
                replacements: [{
                    from: /DEPLOYMENT/g,
                    to: "qa"
                }]
            },
            androidLib: {
               src: ['platforms/android/build.gradle'],
               overwrite: true,
               replacements: [{
                   from: "apply plugin: 'com.android.application'",
                   to: "apply plugin: 'com.android.library'"
               }, {
                    from: 'applicationId privateHelpers.extractStringFromManifest("package")',
                    to: ' '
               }]
            },
            xwalk_library: {
                src: ['platforms/android/cordova-plugin-crosswalk-webview/geniecanvas-xwalk.gradle'],
                overwrite: true,
                replacements: [{
                    from: "applicationVariants",
                    to: "libraryVariants"
                }]
            }
        },
        jsdoc : {
            dist : {
                src: ['../js-libs/renderer/**/*.js', 'public/js/app/EkstepRendererApi.js', '../README.md'],
                options: {
                    destination: 'docs'
                }
            }
        },
        // this is only used for deployment
        compress: {
            main: {
                options: {
                    archive: 'renderer-docs.zip'
                },
                files: [{
                    src: ['docs/**']
                }]
            }
        },
        injector: {
            prview: {
                options: {
                    ignorePath: 'www/',
                    addRootSlash: false
                },
                files: {
                    'www/index.html': [
                        'www/scripts/renderer.external.min.js',
                        'www/scripts/renderer.script.min.js',
                        'www/scripts/renderer.telemetry.min.js',
                        'www/scripts/AudioManager.js', 
                        'www/coreplugins/LauncherPlugin.js', 
                        'www/styles/*.css'
                    ],
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-cordovacli');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-aws-s3');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-rename');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-injector');

    var recorder = grunt.option('recorder') || "android";
    recorder = recorder.toLowerCase().trim();
    if (['android', 'sensibol'].indexOf(recorder) == -1)
        grunt.fail.fatal("recorder argument value should be any one of: ['android', 'sensibol'].");

    grunt.registerTask('set-platforms', function() {
        /*if (grunt.file.exists('platforms/android')) {
            grunt.task.run(['cordovacli:rm_platforms', 'cordovacli:add_platforms']);
        } else {
        }*/
            grunt.task.run(['cordovacli:rm_platforms', 'cordovacli:add_platforms']);
    });

    grunt.registerTask('deploy-preview', function(flavor) {
        if(!flavor){
            grunt.fail.fatal("deployment argument value should be any one of: ['dev', 'production', 'qa'].");
            return;
        }
        grunt.log.writeln("Starting", flavor, "deployment");
        flavor = flavor.toLowerCase().trim();
        var tasks = [];
        if ("dev" == flavor) {
            tasks.push('deploy-preview-dev');
        } else if("production" == flavor) {
            tasks.push('preview-production');
        } else if("qa" == flavor) {
            tasks.push('preview-qa');
        }

        if (tasks.length > 0) {
            grunt.task.run(tasks);
        }
    });

    // grunt to download the pluginFramework files
    grunt.registerTask('download-plugin-framework-dev', ['aws_s3:PluginframeworkFromDev'])


    // After this 'build-preview' task run
    // grunt updateVersion
    grunt.registerTask('build-preview', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:pluginLib', 'uglify:js', 'clean:before', 'copy:previewFiles']);

    //This is to update the Jenkins version number
    grunt.registerTask('updateVersion', function(jenBuildNumber) {
        //This method need to call after preview build is generated(grunt build-preview);
        if(jenBuildNumber){
            grunt.config.set('buildNumber', jenBuildNumber);
        }

        var tasks = ['replace:build_version'];
        grunt.task.run(tasks);
    });

    grunt.registerTask('deploy-preview-dev', ['replace:preview_dev', 'aws_s3:cleanDevPreview', 'aws_s3:uploadPreviewFilesToDev']);
    grunt.registerTask('preview-production', ['replace:preview_production', 'aws_s3:cleanProductionPreview', 'aws_s3:uploadPreviewFilesToProduction']);
    grunt.registerTask('preview-qa', ['replace:preview_QA', 'aws_s3:cleanQAPreview', 'aws_s3:uploadPreviewFilesToQA']);

    grunt.registerTask('rm-cordova-plugin-sensibol', function() {
        if (grunt.file.exists('plugins/cordova-plugin-sensibol')) grunt.task.run(['cordovacli:rm_sensibol_recorder']);
    });
    grunt.registerTask('add-cordova-plugin-sensibol', function() {
        grunt.task.run(['rm-cordova-plugin-sensibol', 'cordovacli:add_sensibol_recorder']);
    });
    grunt.registerTask('rm-cordova-plugin-media', function() {
        if (grunt.file.exists('plugins/cordova-plugin-media')) grunt.task.run(['cordovacli:rm_android_media']);
    });
    grunt.registerTask('add-cordova-plugin-media', function() {
        grunt.task.run(['rm-cordova-plugin-media', 'cordovacli:add_android_media']);
    });
    grunt.registerTask('add-speech', function() {
        var tasks = ['add-cordova-plugin-media'];
        if (recorder == "sensibol")
            tasks.push('add-cordova-plugin-sensibol');
        tasks.push('uglify:speech');
        tasks.push('replace:'+recorder);
        grunt.task.run(tasks);
    });

    grunt.registerTask('rm-cordova-plugin-genieservices', function() {
        if (grunt.file.exists('plugins/cordova-plugin-genieservices')) grunt.task.run(['cordovacli:rm_genie_service']);
    });
    grunt.registerTask('add-cordova-plugin-genieservices', function() {
        grunt.task.run(['rm-cordova-plugin-genieservices', 'cordovacli:add_genie_services']);
    });

    grunt.registerTask('rm_custom_plugins', function() {
        if (grunt.file.exists('plugins/org.ekstep.genie.service.plugin')) grunt.task.run(['cordovacli:rm_genie_service']);
        if (grunt.file.exists('plugins/org.ekstep.recorder.service.plugin')) grunt.task.run(['cordovacli:rm_sensibol_recorder']);
    });

    grunt.registerTask('default', ['uglify:renderer', 'uglify:testRenderer', 'uglify:speech', 'uglify:telemetry', 'uglify:pluginLib', 'uglify:js']);
    grunt.registerTask('build-all', ['uglify:renderer', 'uglify:testRenderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'aws_s3:uploadJS']);

   
    grunt.registerTask('build-jsdoc', ['jsdoc', 'compress', ]);

    grunt.registerTask('build-js', ['uglify:renderer', 'uglify:testRenderer', 'uglify:pluginLib',  'uglify:speech', 'uglify:telemetry', 'uglify:js', 'aws_s3:uploadJS', 'clean:minjs']);
    grunt.registerTask('update_custom_plugins', ['rm_custom_plugins', 'add-cordova-plugin-genieservices']);
    grunt.registerTask('build-unsigned-apk-xwalk', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'clean:before', 'copy:main', 'copy:unsigned', 'rename', 'clean:after', 'clean:samples', 'cordovacli:add_plugins', 'update_custom_plugins', 'cordovacli:add_crashlytics_plugin', 'add-speech', 'cordovacli:build_android_release', 'clean:minjs']);
    grunt.registerTask('build-apk', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'clean:before', 'copy:main', 'copy:unsigned', 'rename', 'clean:after', 'clean:samples', 'cordovacli:add_plugins', 'cordovacli:rm_xwalk', 'update_custom_plugins', 'add-speech', 'cordovacli:build_android', 'clean:minjs']);
    grunt.registerTask('build-unsigned-apk', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'clean:before', 'copy:main', 'copy:unsigned', 'rename', 'clean:after', 'clean:samples', 'cordovacli:add_plugins', 'cordovacli:rm_xwalk', 'update_custom_plugins', 'add-speech', 'cordovacli:build_android_release', 'clean:minjs']);
    grunt.registerTask('build-signed-apk', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'clean:before', 'copy:main', 'copy:signed', 'rename', 'clean:after', 'clean:samples', 'cordovacli:add_plugins', 'cordovacli:rm_xwalk', 'update_custom_plugins', 'add-speech', 'cordovacli:build_android_release', 'clean:minjs']);
    grunt.registerTask('build-apk-quick', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'clean:before', 'copy:main', 'copy:unsigned', 'rename', 'clean:after', 'clean:samples', 'update_custom_plugins', 'add-speech', 'cordovacli:build_android', 'clean:minjs']);
    grunt.registerTask('install-apk-xwalk', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'clean:before', 'copy:main', 'copy:unsigned', 'rename', 'clean:after', 'clean:samples', 'cordovacli:add_plugins', 'update_custom_plugins', 'add-speech', 'cordovacli:run_android', 'clean:minjs']);
    grunt.registerTask('install-apk', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'clean:before', 'copy:main', 'copy:unsigned', 'rename', 'clean:after', 'clean:samples', 'cordovacli:add_plugins', 'cordovacli:rm_xwalk', 'update_custom_plugins', 'add-speech', 'cordovacli:run_android', 'clean:minjs']);
    grunt.registerTask('install-apk-quick', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'clean:before', 'copy:main', 'copy:unsigned', 'rename', 'clean:after', 'clean:samples', 'update_custom_plugins', 'add-speech', 'cordovacli:run_android', 'clean:minjs']);


    grunt.registerTask('build-apk-xwalk', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'clean:before', 'copy:main', 'copy:unsigned', 'rename', 'clean:after', 'clean:samples', 'cordovacli:add_plugins', 'update_custom_plugins', 'cordovacli:add_crashlytics_plugin', 'add-speech', 'cordovacli:build_android', 'clean:minjs']);
    grunt.registerTask('build-signed-apk-xwalk', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'clean:before', 'copy:main', 'copy:signed', 'rename', 'clean:after', 'clean:samples', 'cordovacli:add_plugins', 'update_custom_plugins', 'cordovacli:add_crashlytics_plugin', 'add-speech', 'cordovacli:build_android_release', 'clean:minjs']);

    grunt.registerTask('init-setup', ['mkdir:all', 'copy:main', 'set-platforms', 'add-cordova-plugin-genieservices']);

    grunt.registerTask('ci-build-debug', ['build-apk-xwalk']);
    grunt.registerTask('ci-build-signed', ['build-signed-apk-xwalk']);

    grunt.registerTask('set-android-library',['copy:androidLib', 'replace:androidLib']);
    grunt.registerTask('set-xwalk-library', ['cordovacli:add_xwalk','replace:xwalk_library']);
    grunt.registerTask('set-xwalkshared-library', ['copy:customActivity', 'cordovacli:rm_xwalk', 'cordovacli:add_xwalk_shared','replace:xwalk_library']);

    grunt.registerTask('build-aar', ['uglify:renderer', 'uglify:pluginLib', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'clean:before', 'copy:main', 'copy:unsigned', 'rename', 'clean:after', 'clean:samples', 'cordovacli:add_plugins', 'cordovacli:rm_xwalk', 'update_custom_plugins', 'add-speech', 'set-android-library', 'cordovacli:build_android', 'clean:minjs']);
    grunt.registerTask('build-unsigned-aar', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'clean:before', 'copy:main', 'copy:unsigned', 'rename', 'clean:after', 'clean:samples', 'cordovacli:add_plugins', 'cordovacli:rm_xwalk', 'update_custom_plugins', 'add-speech', 'set-android-library', 'cordovacli:build_android_release', 'clean:minjs']);
    grunt.registerTask('build-signed-aar', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'clean:before', 'copy:main', 'copy:signed', 'rename', 'clean:after', 'clean:samples', 'cordovacli:add_plugins', 'cordovacli:rm_xwalk', 'update_custom_plugins', 'add-speech', 'set-android-library', 'cordovacli:build_android_release', 'clean:minjs']);


    grunt.registerTask('build-aar-xwalk', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'clean:before', 'copy:main', 'copy:unsigned', 'rename', 'clean:after', 'clean:samples', 'cordovacli:add_plugins', 'update_custom_plugins', 'add-speech', 'set-android-library', 'set-xwalk-library', 'cordovacli:build_android', 'clean:minjs']);
    grunt.registerTask('build-aarshared-xwalk', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js', 'clean:before', 'copy:main', 'copy:unsigned', 'rename', 'clean:after', 'clean:samples', 'cordovacli:add_plugins', 'update_custom_plugins', 'add-speech', 'set-android-library', 'set-xwalkshared-library', 'cordovacli:build_android', 'clean:minjs']);

    grunt.registerTask('local-preview-build', ['uglify:renderer', 'uglify:speech', 'uglify:telemetry', 'uglify:js','copy:localPreviewFiles', 'copy:localPreviewMinjs', 'aws_s3:uploadLocalPreviewZip', 'clean:localPreview']);
// ================= /
    grunt.registerTask('new-buildPreview', ['mkdir:all', 'uglify:renderermin', 'copy:newmain', 'concat:css', 'concat:externaljs', 'concat:telemetry', 'concat:script', 'clean:deletefiles', 'injector:prview', 'rename:preview']);
    grunt.registerTask('buildapp', ['new-buildPreview', 'clean:after', 'rename:main', 'injector:prview', 'set-platforms', 'add-cordova-plugin-genieservices', 'cordovacli:add_plugins','copy:unsigned', 'update_custom_plugins', 'add-speech', 'set-android-library', 'set-xwalkshared-library', 'cordovacli:build_android', 'clean:minjs']);
    grunt.registerTask('test-setup', ['new-buildPreview', 'copy:testinit', 'clean']);
    grunt.registerTask('app-test', ['karma:app']);
    grunt.registerTask('plugin-test', ['karma:plugin']);
};
