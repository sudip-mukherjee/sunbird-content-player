describe('Event manager test cases', function() {

    beforeAll(function(done) {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
        // var data = {"theme":{"manifest":{"media":[{"id":"validate","src":"http://ekstep-public.s3.amazonaws.com/contents/tests/background.jpg","type":"image","assetId":"domain_38852"},{"id":"popupTint","src":"http://ekstep-public.s3.amazonaws.com/contents/tests/background.jpg","type":"image","assetId":"domain_38606"},{"id":"goodjobBg","src":"http://ekstep-public.s3.amazonaws.com/contents/tests/background.jpg","type":"image","assetId":"domain_38939"},{"id":"retryBg","src":"http://ekstep-public.s3.amazonaws.com/contents/tests/background.jpg","type":"image","assetId":"domain_38938"},{"id":"retry_audio","src":"http://ekstep-public.s3.amazonaws.com/preview/dev/assets/sounds/goodjob.mp3","type":"sound","assetId":"domain_38624"},{"id":"goodjob_audio","src":"http://ekstep-public.s3.amazonaws.com/preview/dev/assets/sounds/goodjob.mp3","type":"sound","assetId":"domain_38625"},{"id":"next","src":"http://ekstep-public.s3.amazonaws.com/contents/tests/background.jpg","type":"image","assetId":"domain_40358"},{"id":"previous","src":"http://ekstep-public.s3.amazonaws.com/contents/tests/background.jpg","type":"image","assetId":"domain_40359"},{"id":"submit","src":"http://ekstep-public.s3.amazonaws.com/contents/tests/background.jpg","type":"image","assetId":"domain_14524"},{"id":"home","src":"http://ekstep-public.s3.amazonaws.com/contents/tests/background.jpg","type":"image","assetId":"domain_14519"},{"id":"reload","src":"http://ekstep-public.s3.amazonaws.com/contents/tests/background.jpg","type":"image","assetId":"domain_14522"},{"id":"icon_hint","src":"http://ekstep-public.s3.amazonaws.com/contents/tests/background.jpg","type":"image","assetId":"domain_799"},{"id":"bg","src":"http://ekstep-public.s3.amazonaws.com/contents/tests/background.jpg","type":"image"},{"id":"domain_665","type":"image","src":"http://ekstep-public.s3.amazonaws.com/contents/tests/background.jpg","assetId":"domain_665"}]},"template":[{"text":{"model":"item.title","x":9,"y":7,"w":86,"h":4,"font":"Georgia","fontsize":42},"mcq":{"options":{"layout":"table","x":20,"y":15,"w":70,"h":85,"cols":2,"marginX":10,"marginY":5,"options":"options"},"multi_select":false,"model":"item"},"g":{"image":{"event":{"action":[{"type":"command","command":"stop","asset_model":"item.hints[0].asset"},{"type":"command","command":"toggleShow","asset":"hint"}],"type":"click"},"asset":"speech_bubble","x":0,"y":0,"w":100,"h":100},"text":[{"x":10,"y":20,"w":80,"h":80,"font":"Georgia","weight":"bold","fontsize":150,"__text":"Hint"},{"x":10,"y":40,"w":80,"h":80,"font":"Georgia","fontsize":120,"model":"item.hints[1].asset"}],"x":9,"y":17,"w":20,"h":20,"id":"hint","visible":false},"image":{"event":{"action":[{"type":"command","command":"togglePlay","asset_model":"item.hints[0].asset"},{"type":"command","command":"toggleShow","asset":"hint"}],"type":"click"},"asset":"icon_hint","x":5,"y":35},"id":"mcq_template_1"},{"image":[{"event":{"action":{"type":"command","command":"show","asset":"retryDialog"},"type":"click"},"asset":"popupTint","x":-100,"y":-150,"w":550,"h":600,"visible":true,"id":"popup-Tint"},{"asset":"retryBg","x":0,"y":0,"w":150,"h":150,"visible":true,"id":"right"}],"shape":[{"event":{"action":[{"type":"command","command":"hide","asset":"retryDialog"},{"type":"command","command":"SHOWHTMLELEMENTS","asset":"retry"}],"type":"click"},"type":"roundrect","x":72,"y":25,"w":50,"h":65,"visible":true,"id":"retry","hitArea":true},{"event":{"action":{"type":"command","command":"transitionTo","asset":"theme","param":"next","effect":"fadein","direction":"left","ease":"linear","duration":100},"type":"click"},"type":"roundrect","x":110,"y":100,"w":25,"h":35,"visible":true,"id":"continue","hitArea":true}],"id":"retry"},{"g":{"image":[{"asset":"popupTint","x":0,"y":0,"w":100,"h":100,"visible":true,"id":"popup-Tint"}],"text":[{"x":25,"y":25,"w":50,"h":9,"visible":true,"editable":true,"model":"word.lemma","weight":"normal","font":"helvetica","color":"rgb(0,0,0)","fontstyle":"","fontsize":75,"align":"left","z-index":1,"id":"lemma"},{"x":25,"y":35,"w":50,"h":40,"visible":true,"editable":true,"model":"word.gloss","weight":"normal","font":"helvetica","color":"rgb(0,0,0)","fontstyle":"","fontsize":43,"align":"left","z-index":2,"id":"gloss"}],"shape":[{"x":20,"y":20,"w":60,"h":60,"visible":true,"editable":true,"type":"roundrect","radius":10,"opacity":1,"fill":"#45b3a5","stroke-width":1,"z-index":0,"id":"textBg"}],"x":0,"y":0,"w":100,"h":100,"event":{"action":[{"type":"command","command":"SHOWHTMLELEMENTS","asset":"textBg"},{"type":"command","command":"hide","parent":true}],"type":"click"}},"id":"infoTemplate"},{"image":[{"event":{"action":{"type":"command","command":"show","asset":""},"type":"click"},"asset":"popupTint","x":-100,"y":-150,"w":550,"h":600,"visible":true,"id":"popup-Tint"},{"event":{"action":[{"type":"command","command":"transitionTo","asset":"theme","param":"next","effect":"fadein","direction":"left","ease":"linear","duration":500}],"type":"click"},"asset":"goodjobBg","x":0,"y":0,"w":150,"h":150,"visible":true,"id":"continue"}],"id":"goodjob"}],"controller":[{"name":"dictionary","type":"data","id":"dictionary","__cdata":{}}],"startStage":"scene1","id":"theme","ver":0.3,"stage":[{"id":"scene1","x":0,"y":0,"w":100,"h":100,"param":[{"name":"next","value":"scene2"}],"events":{"event":[]},"image":[{"x":34.44444444444444,"y":34.66666666666667,"w":23.88888888888889,"h":38,"visible":true,"editable":true,"asset":"domain_665","z-index":1}],"text":[{"x":39.30555555555556,"y":23.77777777777778,"w":48.61111111111111,"h":5.826666666666666,"visible":true,"editable":true,"__text":"Start Page","weight":"normal","font":"Helvetica","color":"#000000","fontstyle":"","fontsize":53,"lineHeight":1.3,"align":"left","z-index":0}],"shape":[],"hotspot":[],"embed":[],"div":[],"audio":[],"scribble":[],"g":[]},{"id":"scene2","x":0,"y":0,"w":100,"h":100,"param":[{"name":"previous","value":"scene1"}],"events":{"event":[]},"image":[{"x":37.22222222222222,"y":40.88888888888889,"w":22.083333333333332,"h":34.66666666666667,"visible":true,"editable":true,"asset":"domain_665","z-index":1},{"event":{"action":{"type":"command","command":"transitionTo","asset":"theme","param":"previous","effect":"fadein","direction":"right","ease":"linear","duration":100},"type":"click"},"asset":"previous","x":2,"y":3,"w":5,"h":8.3,"id":"previous","visible":true,"editable":true,"z-index":100}],"text":[{"x":42.916666666666664,"y":30.444444444444446,"w":48.61111111111111,"h":5.826666666666666,"visible":true,"editable":true,"__text":"End Page","weight":"normal","font":"Helvetica","color":"#000000","fontstyle":"","fontsize":53,"lineHeight":1.3,"align":"left","z-index":0}],"shape":[],"hotspot":[],"embed":[],"div":[],"audio":[],"scribble":[],"g":[]}]}};

        // var data = {"event":[{"action":{"type":"command","command":"show","asset":"testShape"},"type":"click"},{"action":{"type":"command","command":"toggleShow","asset":"testShape"},"type":"toggle"}],"type":"rect","x":87,"y":82,"w":13,"h":18,"hitArea":true,"id":"testShape"};
        // startRenderer(data);
        spyOn(EventManager, 'registerEvents').and.callThrough();
        spyOn(EventManager, 'registerEvent').and.callThrough();
        spyOn(EventManager, 'dispatchEvent').and.callThrough();
        spyOn(EventManager, 'processMouseTelemetry').and.callThrough();
        spyOn(EventManager, 'processAppTelemetry').and.callThrough();
        setTimeout(function() {
            EventManager.registerEvents.calls.reset();
            var data = {"event":[{"action":{"type":"command","command":"show","asset":"testShape"},"type":"click"},{"action":{"type":"command","command":"toggleShow","asset":"testShape"},"type":"toggle"}],"type":"rect","x":87,"y":82,"w":13,"h":18,"hitArea":true,"id":"testShape"};
            var stagePlugin = PluginManager.getPluginObject(Renderer.theme._currentStage);
            PluginManager.invoke('shape', data, stagePlugin, stagePlugin, Renderer.theme);
            done();
        }, 500);
    });

    it('events registered and registered only once', function() {
        expect(EventManager.registerEvents).toHaveBeenCalled();
        expect(EventManager.registerEvents.calls.count()).toEqual(1);
        expect(EventManager.registerEvent).toHaveBeenCalled();
        expect(EventManager.registerEvent.calls.count()).toEqual(2);
    });

    it('events registered and registered only once', function() {
        expect(EventManager.registerEvents).toHaveBeenCalled();
        expect(EventManager.registerEvents.calls.count()).toEqual(1);
        expect(EventManager.registerEvent).toHaveBeenCalled();
        expect(EventManager.registerEvent.calls.count()).toEqual(2);
    });

    it('test dispatch app event', function(done) {
        spyOn(CommandManager, 'handle').and.callFake(function() {
            var action = CommandManager.handle.calls.argsFor(0)[0];
            expect(action.command).toEqual('toggleShow');
            expect(action.asset).toEqual('testShape');
            done();
        });
        EventManager.dispatchEvent('testShape', 'toggle');
    });

    it('test dispatch event and event execution', function(done) {
        spyOn(CommandManager, 'handle').and.callThrough();
        EventManager.dispatchEvent('testShape', 'toggle');
        setTimeout(function() {
            var p = PluginManager.getPluginObject("testShape");
            expect(CommandManager.handle).toHaveBeenCalled();
            expect(EventManager.processMouseTelemetry).not.toHaveBeenCalled();
            expect(EventManager.processAppTelemetry).toHaveBeenCalled();
            expect(CommandManager.handle.calls.count()).toEqual(1);
            expect(p._self.visible).toEqual(false);
            done();
        }, 1000);
    });

    it('test dispatch mouse event', function(done) {
        spyOn(CommandManager, 'handle').and.callFake(function() {
            var action = CommandManager.handle.calls.argsFor(0)[0];
            expect(action.command).toEqual('show');
            expect(action.asset).toEqual('testShape');
            done();
        });
        EventManager.dispatchEvent('testShape', 'click');
    });

    it('test dispatch mouse event and event execution', function(done) {
        spyOn(CommandManager, 'handle').and.callThrough();
        EventManager.dispatchEvent('testShape', 'click');
        setTimeout(function() {
            var p = PluginManager.getPluginObject("testShape");
            expect(CommandManager.handle).toHaveBeenCalled();
            expect(EventManager.processMouseTelemetry).toHaveBeenCalled();
            expect(EventManager.processAppTelemetry).toHaveBeenCalled();
            expect(CommandManager.handle.calls.count()).toEqual(1);
            expect(p._self.visible).toEqual(true);
            done();
        }, 1000);
    });

    describe('using animation', function() {
        beforeAll(function(done) {
            var stagePlugin = PluginManager.getPluginObject(Renderer.theme._currentStage);
            var data = {"asset":"sringeri","x":11.5,"y":19,"w":20,"h":36,"id":"sringeri", "type":"rect","z-index":-1};
            PluginManager.invoke('shape', data, stagePlugin, stagePlugin, Renderer.theme);
            data = {"event":[{"action":[{"tween":{"to":[{"ease":"linear","duration":500,"__cdata":"{\"x\":20,\"y\":20}"},{"ease":"quadOut","duration":2000,"__cdata":"{\"x\":55,\"y\":0}"},{"ease":"linear","duration":1,"__cdata":"{\"x\":75,\"y\":0, \"scaleX\": -1}"},{"ease":"linear","duration":2000,"__cdata":"{\"x\":40,\"y\":55}"},{"ease":"linear","duration":1,"__cdata":"{\"x\":18,\"y\": 55, \"scaleX\": 1}"},{"ease":"linear","duration":2000,"__cdata":"{\"x\":57,\"y\":55}"}],"id":"sringeriWalking"},"type":"command","command":"animate","asset":"sringeri", "id": "animation1"},{"with": "animation1","type":"command","command":"hide","asset":"testSeqShape"},{"after": "animation1","type":"command","command":"show","asset":"testSeqShape"}],"type":"click"},{"action":{"type":"command","command":"toggleShow","asset":"testSeqShape"},"type":"toggle"}],"type":"rect","x":87,"y":82,"w":13,"h":18,"hitArea":true,"id":"testSeqShape"};
            PluginManager.invoke('shape', data, stagePlugin, stagePlugin, Renderer.theme);
            setTimeout(function() {
                done();
            }, 1000);
        });
        it('test action sequence created', function(done) {
            spyOn(CommandManager, 'handle').and.callFake(function() {
                var action = CommandManager.handle.calls.argsFor(0)[0];
                expect(action).toBeDefined();
                expect(action.children.length).toEqual(1);
                expect(action.siblings.length).toEqual(1);
                done();
            });
            EventManager.dispatchEvent('testSeqShape', 'click');
        });
        it('test action play in sequence', function(done) {
            spyOn(CommandManager, 'handle').and.callThrough();
            expect(CommandManager.handle.calls.count()).toEqual(0);
            var sringeriPlugin = PluginManager.getPluginObject("sringeri");
            expect(sringeriPlugin._self.x).toEqual(46);
            var testSeqShape = PluginManager.getPluginObject("testSeqShape");
            expect(testSeqShape._self.visible).toEqual(true);
            EventManager.dispatchEvent('testSeqShape', 'click');
            expect(testSeqShape._self.visible).toEqual(false);
            expect(CommandManager.handle.calls.count()).toEqual(2);
            setTimeout(function() {
                expect(sringeriPlugin._self.x).not.toEqual(46);
                expect(testSeqShape._self.visible).toEqual(false);
                expect(CommandManager.handle.calls.count()).toEqual(2);
            }, 500);
            setTimeout(function() {
                expect(sringeriPlugin._self.x).toEqual(228);
                expect(testSeqShape._self.visible).toEqual(true);
                expect(CommandManager.handle.calls.count()).toEqual(3);
                done();
            }, 10000);
        });
    });

});