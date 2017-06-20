
PluginManager = {
    defaultResWidth: 1920,
    defaultResHeight: 1200,
    pluginMap: {},
    pluginObjMap: {},

    init: function(gamePath) {
        var pluginsPath = undefined;
        // @ plugin:error event is dispatching from the plugin-framework 
        // If any of the plugin is failed to load OR invoke then plugin:error event will trigger
        if(!EkstepRendererAPI.hasEventListener('plugin:error')){
            EkstepRendererAPI.addEventListener('plugin:error',this.logErrorEventTelemetry,this);
        }
        pluginsPath = isCoreplugin ? AppConfig.CORE_PLUGINSPATH : (isbrowserpreview ? AppConfig.PREVIEW_PLUGINSPATH : AppConfig.DEVICE_PLUGINSPATH)
        var pluginRepo = gamePath + pluginsPath;
        var pfConfig = {env:"renderer", async: async, pluginRepo: pluginRepo,repos: [org.ekstep.pluginframework.publishedRepo] };
        org.ekstep.pluginframework.initialize(pfConfig);
    },
    loadPlugins: function(pluginManifest, manifestMedia, cb) {
        var pluginObj = []
         if(!Array.isArray(pluginManifest)){
            pluginObj.push(pluginManifest);
            pluginManifest = pluginObj;
        }
        _.each(pluginManifest, function(p) {
            p.ver = parseFloat(p.ver).toFixed(1);
        });

        org.ekstep.pluginframework.pluginManager.loadAllPlugins(pluginManifest, manifestMedia, function() {
            console.info("Framework Loaded the plugins");
            PluginManager.pluginMap = org.ekstep.pluginframework.pluginManager.plugins;
            if (cb) cb();
        });
    },
    registerPlugin: function(id, plugin) {
        org.ekstep.pluginframework.pluginManager._registerPlugin(id, undefined, plugin);
        if(typeof createjs !== "undefined")
            createjs.EventDispatcher.initialize(plugin.prototype);
    },
    isPlugin: function(id) {
        return org.ekstep.pluginframework.pluginManager.isPluginDefined(id);
    },
    invoke: function(id, data, parent, stage, theme) {
        return org.ekstep.pluginframework.pluginManager.invokeRenderer(id, data, parent, stage, theme);
    },
    registerPluginObject: function(pluginObj) {
        PluginManager.pluginObjMap[pluginObj.id] = pluginObj;
        org.ekstep.pluginframework.pluginManager.addPluginInstance(pluginObj);
    },
    getPluginObject: function(id) {
        return org.ekstep.pluginframework.pluginManager.getPluginInstance(id);
    },
    addError: function(error) {
        org.ekstep.pluginframework.pluginManager.addError(error);
    },
    getErrors: function() {
        return org.ekstep.pluginframework.pluginManager.getErrors();
    },
    cleanUp: function() {
        org.ekstep.pluginframework.pluginManager.cleanUp();
    },
    getPlugins: function() {
        return org.ekstep.pluginframework.pluginManager.getPlugins();
    },
    logErrorEventTelemetry: function(event, data) {
        EkstepRendererAPI.logErrorEvent(data.err, {'type': 'plugin', 'action': data.action, 'objectType': data.plugin,'objectId':data.objectid});
    }
};