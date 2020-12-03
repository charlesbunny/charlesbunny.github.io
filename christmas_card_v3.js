(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.accordion = function() {
	this.initialize(img.accordion);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,914,1211);


(lib.bass = function() {
	this.initialize(img.bass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,832,1406);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,123);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,123);


(lib.drums = function() {
	this.initialize(img.drums);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,917,1400);


(lib.spoons = function() {
	this.initialize(img.spoons);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,923,1285);


(lib.violin = function() {
	this.initialize(img.violin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,953,1233);


(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,2160);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,48);


(lib.guitar = function() {
	this.initialize(img.guitar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,946,1552);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.turn_page_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.turn_page_back, new cjs.Rectangle(0,0,177,123), null);


(lib.turn_page = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.turn_page, new cjs.Rectangle(0,0,177,123), null);


(lib.TaptoHear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(135,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TaptoHear, new cjs.Rectangle(0,0,270,20.6), null);


(lib.StartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-97,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StartButton, new cjs.Rectangle(-97,-24,193,48), null);


(lib.loading_label = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(0.026,0,0.3393,0.3393);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.loading_label, new cjs.Rectangle(-64.8,-12.3,129.7,24.6), null);


(lib.loadbar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC66").s().p("EhaEACWIAAkrMC0JAAAIAAErg");
	this.shape.setTransform(576.45,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.loadbar, new cjs.Rectangle(0,-14.9,1152.9,29.9), null);


(lib.inside_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("Ehdwg0SMC7hAAAMAAABolMi7hAAAg");
	this.shape.setTransform(600.075,334.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhdwA0SMAAAhojMC7hAAAMAAABojg");
	this.shape_1.setTransform(600.075,334.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inside_bg, new cjs.Rectangle(-1,-1,1202.2,671.3), null);


(lib.Character6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.spoons();
	this.instance.setTransform(-113,-157,0.2443,0.2443);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Character6, new cjs.Rectangle(-113,-157,225.5,313.9), null);


(lib.Character5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.drums();
	this.instance.setTransform(-116,-172,0.2443,0.2443);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Character5, new cjs.Rectangle(-116,-172,224,342), null);


(lib.Character4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bass();
	this.instance.setTransform(98.2,-174,0.2442,0.2442,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Character4, new cjs.Rectangle(-105,-174,203.2,343.4), null);


(lib.Character3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.guitar();
	this.instance.setTransform(-121,-191,0.2443,0.2443);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Character3, new cjs.Rectangle(-121,-191,231.1,379.1), null);


(lib.Character1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.accordion();
	this.instance.setTransform(106.25,-149,0.2442,0.2442,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Character1, new cjs.Rectangle(-117,-149,223.3,295.8), null);


(lib.Backrgoundcover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BG();
	this.instance.setTransform(-652.35,-366.95,0.3398,0.3398);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Backrgoundcover, new cjs.Rectangle(-652.3,-366.9,1304.6999999999998,733.9), null);


(lib.outside_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.cover_bg = new lib.Backrgoundcover();
	this.cover_bg.name = "cover_bg";
	this.cover_bg.setTransform(612.9,341);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("Ehdwg0SMC7hAAAMAAABolMi7hAAAg");
	this.shape.setTransform(600.075,334.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhdwA0SMAAAhojMC7hAAAMAAABojg");
	this.shape_1.setTransform(600.075,334.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.cover_bg}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.outside_bg, new cjs.Rectangle(-39.4,-25.9,1304.7,733.9), null);


(lib.loader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.loading_label();
	this.instance.setTransform(-506.65,0.35);

	this.loadbar = new lib.loadbar();
	this.loadbar.name = "loadbar";
	this.loadbar.setTransform(-575.45,-0.35);

	this.instance_1 = new lib.loadbar();
	this.instance_1.setTransform(-575.45,-0.35);
	this.instance_1.alpha = 0.3789;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.loadbar},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.loader, new cjs.Rectangle(-575.4,-15.3,1152.9,30), null);


(lib.Instructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_335 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(335).call(this.frame_335).wait(1));

	// Layer_1
	this.instance = new lib.TaptoHear();
	this.instance.setTransform(135,10.3,1,1,0,0,0,135,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(299).to({alpha:0},35).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270,20.6);


(lib.Characters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer_1
	this.instance = new lib.Character1();

	this.instance_1 = new lib.violin();
	this.instance_1.setTransform(-116,-148,0.2443,0.2443);

	this.instance_2 = new lib.Character3();

	this.instance_3 = new lib.Character4();

	this.instance_4 = new lib.Character5();

	this.instance_5 = new lib.Character6();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-191,237.8,379.1);


(lib.CharacterPivot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		var _this = this;
		if (_this.playing == false){
			_this.stop();
		}
	}
	this.frame_46 = function() {
		var _this = this;
		if (_this.playing == false){
			_this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(33).call(this.frame_46).wait(14));

	// Layer_1
	this.instance = new lib.Characters();
	this.instance.setTransform(0,0,1,1,5.2118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-2.1,regY:-1.5,rotation:5.1612,x:-1.95,y:-1.7},0).wait(1).to({rotation:5.0633},0).wait(1).to({rotation:4.9141},0).wait(1).to({rotation:4.7095,x:-2,y:-1.65},0).wait(1).to({rotation:4.4454},0).wait(1).to({rotation:4.1179},0).wait(1).to({rotation:3.7235},0).wait(1).to({rotation:3.2601,y:-1.6},0).wait(1).to({rotation:2.7272,x:-2.05},0).wait(1).to({rotation:2.127},0).wait(1).to({rotation:1.4651,y:-1.55},0).wait(1).to({rotation:0.7514,x:-2.1},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:0},0).wait(1).to({regX:-2.1,regY:-1.5,rotation:-1.0208,x:-2.15,y:-1.45},0).wait(1).to({rotation:-2.0426},0).wait(1).to({rotation:-3.04,x:-2.2,y:-1.4},0).wait(1).to({rotation:-3.9908,y:-1.35},0).wait(1).to({rotation:-4.8776,x:-2.25,y:-1.3},0).wait(1).to({rotation:-5.6885},0).wait(1).to({rotation:-6.4167,y:-1.25},0).wait(1).to({rotation:-7.0598,x:-2.3},0).wait(1).to({rotation:-7.6183,y:-1.2},0).wait(1).to({rotation:-8.0947},0).wait(1).to({rotation:-8.4931},0).wait(1).to({rotation:-8.818,x:-2.35},0).wait(1).to({rotation:-9.0743,x:-2.3,y:-1.15},0).wait(1).to({rotation:-9.2668},0).wait(1).to({rotation:-9.4},0).wait(1).to({regX:0,regY:0,rotation:-9.4784,x:0,y:0},0).wait(1).to({regX:-2.1,regY:-1.5,rotation:-9.4201,x:-2.3,y:-1.15},0).wait(1).to({rotation:-9.3084},0).wait(1).to({rotation:-9.1389},0).wait(1).to({rotation:-8.9072},0).wait(1).to({rotation:-8.6087,y:-1.2},0).wait(1).to({rotation:-8.2392},0).wait(1).to({rotation:-7.7948},0).wait(1).to({rotation:-7.2726,y:-1.25},0).wait(1).to({rotation:-6.6716,x:-2.25},0).wait(1).to({rotation:-5.9933,y:-1.3},0).wait(1).to({rotation:-5.2425},0).wait(1).to({rotation:-4.4284,x:-2.2,y:-1.35},0).wait(1).to({rotation:-3.5647},0).wait(1).to({rotation:-2.6693,x:-2.15,y:-1.4},0).wait(1).to({rotation:-1.7626,y:-1.45},0).wait(1).to({rotation:-0.8662,x:-2.1},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:0},0).wait(1).to({regX:-2.1,regY:-1.5,rotation:0.6914,x:-2.1,y:-1.55},0).wait(1).to({rotation:1.3787,x:-2.05},0).wait(1).to({rotation:2.0369},0).wait(1).to({rotation:2.6459,y:-1.6},0).wait(1).to({rotation:3.1925,x:-2},0).wait(1).to({rotation:3.6698,y:-1.65},0).wait(1).to({rotation:4.0763},0).wait(1).to({rotation:4.4135},0).wait(1).to({rotation:4.6851},0).wait(1).to({rotation:4.8959,x:-1.95,y:-1.7},0).wait(1).to({rotation:5.0507},0).wait(1).to({rotation:5.1545},0).wait(1).to({regX:0,regY:0,rotation:5.2118,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.9,-164.4,268.9,328.5);


// stage content:
(lib.christmas_card_v3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
		var page = 1;
		var showPlayButton = true;
		var currentlyPlaying = 0;
		var tracksloaded = 0;
		var charCount = 6;
		var track1;
		var track2;
		var track3;
		var track4;
		var track5;
		var track6;
		
		var _this = this;
		_this.stop();
		_this.greeting_text.visible = false;
		_this.instructions.visible = false;
		_this.look_inside_btn.visible = false;
		_this.look_outside_btn.visible = false;
		_this.outside_bg.visible = false;
		_this.inside_bg.visible = false;
		_this.loadbar.loadbar.scaleX = 0;
		
		_this.beginbtn.visible = false;
		_this.beginbtn.addEventListener("click", function () {
			displayFront();
			_this.beginbtn.visible = false;
			_this.look_inside_btn.visible = true;
			_this.look_outside_btn.visible = false;
			_this.instructions.gotoAndPlay(0);
			_this.instructions.visible = true;
			assignMusicTracks();
		})
		
		_this.look_inside_btn.addEventListener("click", turnPage);
		_this.look_outside_btn.addEventListener("click", turnPage);
		
		createjs.Sound.on("fileload", handleLoad);
		
		//createjs.Sound.registerSound({src:{ogg:"/mus/1_Accordion.ogg",mp3:"/mus/1_Accordion.mp3" id:"sound1"});
		//createjs.Sound.registerSound({src:{ogg:"/mus/6_Fiddle.ogg",mp3:"/mus/6_Fiddle.mp3" id:"sound2"});
		//createjs.Sound.registerSound({src:{ogg:"/mus/3_Guitar.ogg",mp3:"/mus/3_Guitar.mp3", id:"sound3"});
		//createjs.Sound.registerSound({src:{ogg:"/mus/4_Bass.ogg",mp3:"/mus/4_Bass.mp3" id:"sound4"});
		//createjs.Sound.registerSound({src:{ogg:"/mus/5_Drums.ogg",mp3:"/mus/5_Drums.mp3" id:"sound5"});
		//createjs.Sound.registerSound({src:{ogg:"/mus/2_Spoons.ogg",mp3:"/mus/2_Spoons.mp3", id:"sound6"});
		
		var sounds = {path:"./",
				manifest: [
				{id: "sound1", src: {mp3:"/mus/1_Accordion.mp3", ogg:"/mus/1_Accordion.ogg"}},
				{id: "sound2", src: {mp3:"/mus/6_Fiddle.mp3", ogg:"/mus/6_Fiddle.ogg"}},
				{id: "sound3", src: {mp3:"/mus/3_Guitar.mp3", ogg:"/mus/3_Guitar.ogg"}},
				{id: "sound4", src: {mp3:"/mus/4_Bass.mp3", ogg:"/mus/4_Bass.ogg"}},
				{id: "sound5", src: {mp3:"/mus/5_Drums.mp3", ogg:"/mus/5_Drums.ogg"}},
				{id: "sound6", src: {mp3:"/mus/2_Spoons.mp3", ogg:"/mus/2_Spoons.ogg"}},
		    ]
		};
		
		    createjs.Sound.alternateExtensions = ["mp3"];
		    createjs.Sound.addEventListener("fileload", handleLoad);
		    createjs.Sound.registerSounds(sounds);
		
		
		
		var soundProps = new createjs.PlayPropsConfig().set({
			loop: -1,
			volume: 0.0
		})
		
		//character setup
		for (var i = 1; i <= charCount; i++) {
			var mc = _this["char_" + i];
			mc.visible = false;
			mc.playing = false;
			mc.getChildAt(0).gotoAndStop(i - 1);
			mc.addEventListener("click", togglePlayer);
			mc.cursor = "pointer";
		}
		
		stage.enableMouseOver();
		
		var message_path = getQueryVariable("msg");
		loadMessage(message_path + ".txt");
		
		function turnPage() {
			if (page == 1) {
				page = 2;
				displayInside();
			} else if (page == 2) {
				page = 1;
				displayFront();
			}
		
		}
		
		function loadMessage(txt) {
			var queue = new createjs.LoadQueue(true);
			queue.loadFile(txt);
			queue.on("fileload", showText, this);
			queue.on("error", function () {
				_this.greeting_text.text = "ERROR WITH MESSAGE";
			}, this);
		}
		
		function showText(event) {
			var item = event.item;
			var type = item.type;
			if (type == createjs.Types.TEXT) {
				console.log("TEXT: " + event.result);
				_this.greeting_text.text = event.result;
			}
		}
		
		function handleLoad() {
			tracksloaded = tracksloaded + 1;
			_this.loadbar.loadbar.scaleX = (tracksloaded / charCount);
			console.log(tracksloaded);
			if (tracksloaded == 6) {
				showStart();
			}
		}
		
		function showStart() {
			_this.beginbtn.visible = true;
			_this.loadbar.visible = false;
		}
		
		function displayFront() {
		
			createjs.Tween.get(_this.greeting_text).to({
				alpha: 0.0
			}, 500).addEventListener("complete", function () {
				_this.greeting_text.visible = false;
			});
			createjs.Tween.get(_this.inside_bg).to({
				alpha: 0.0
			}, 500).addEventListener("complete", function () {
				_this.inside_bg.visible = false;
			});
			createjs.Tween.get(_this.look_outside_btn).to({
				alpha: 0.0
			}, 500).addEventListener("complete", function () {
				_this.look_outside_btn.visible = false;
			});
		
			_this.outside_bg.alpha = 0.0;
			_this.outside_bg.visible = true;
			createjs.Tween.get(_this.outside_bg).to({alpha: 1.0}, 500);
			
			_this.look_inside_btn.alpha = 0.0;
			_this.look_inside_btn.visible = true;
			createjs.Tween.get(_this.look_inside_btn).to({alpha: 1.0}, 500);
		
			for (var i = 1; i <= charCount; i++) {
				var mc = _this["char_" + i];
				mc.alpha = 0.0;
				mc.visible = true;
				createjs.Tween.get(mc).to({
					alpha: 1.0
				}, 500);
			}
		}
		
		function displayInside() {
			for (var i = 1; i <= charCount; i++) {
				var mc = _this["char_" + i];
				createjs.Tween.get(mc).to({alpha: 0.0}, 500).addEventListener("complete", function () {
					mc.visible = false;
				});
			}
			createjs.Tween.get(_this._this.outside_bg).to({alpha: 0.0}, 500).addEventListener("complete", function () {
				_this._this.outside_bg.visible = false;
			});
			
			createjs.Tween.get(_this.look_inside_btn).to({alpha: 0.0}, 500).addEventListener("complete", function () {
				_this.look_inside_btn.visible = false;
			});
			
			_this.greeting_text.alpha = 0.0;
			_this.inside_bg.alpha = 0.0;
			_this.look_outside_btn.alpha = 0.0;
			_this.greeting_text.visible = true;
			_this.inside_bg.visible = true;
			_this.look_outside_btn.visible = true;
			createjs.Tween.get(_this.greeting_text).to({alpha: 1.0}, 500);
			createjs.Tween.get(_this.inside_bg).to({alpha: 1.0}, 500);
			createjs.Tween.get(_this.look_outside_btn).to({alpha: 1.0}, 500);
		}
		
		function assignMusicTracks() {
			for (var i = 1; i <= charCount; i++) {
				var _name = _this["char_" + i].name.substr(5);
				this["track" + _name] = createjs.Sound.play("sound" + _name, soundProps);
				this["track" + _name].stop();
				console.log("Assigned " + "track" + _name + " to character");
			}
		}
		
		function checkPlayers() {
			if (currentlyPlaying == 0) {
				stopAllMusic();
			} else if (currentlyPlaying == 1) {
				playAgain();
			}
		}
		
		function stopAllMusic() {
			for (var i = 1; i <= charCount; i++) {
				var _name = _this["char_" + i].name.substr(5);
				this["track" + _name].volume = 0.0;
				this["track" + _name].stop();
			}
			console.log("Stopped all music!");
		}
		
		function playAgain() {
			for (var i = 1; i <= charCount; i++) {
				var _name = _this["char_" + i].name.substr(5);
				this["track" + _name].volume = 0.0;
				this["track" + _name].play();
			}
			console.log("Started all music quietly!");
		}
		
		function togglePlayer(event) {
			var _mc = event.currentTarget;
			var _name = _mc.name.substr(5);
			if (_mc.playing == true) {
				_mc.playing = false;
				if (currentlyPlaying == 2) {
					currentlyPlaying = currentlyPlaying - 1;
				} else {
					currentlyPlaying = currentlyPlaying - 1;
					checkPlayers();
				}
				createjs.Tween.get(this["track" + _name]).to({
					volume: 0.0
				}, 500);
			} else {
				_mc.playing = true;
				_mc.play();
				if (currentlyPlaying == 0) {
					currentlyPlaying = currentlyPlaying + 1;
					checkPlayers();
				} else {
					currentlyPlaying = currentlyPlaying + 1;
				}
				createjs.Tween.get(this["track" + _name]).to({
					volume: 1.0
				}, 500);
			}
			console.log("CP: " + currentlyPlaying);
		}
		
		function getQueryVariable(variable) {
			var query = window.location.search.substring(1);
			var vars = query.split("&");
			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split("=");
				if (pair[0] == variable) {
					return pair[1];
				}
			}
			return (false);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Interface
	this.instructions = new lib.Instructions();
	this.instructions.name = "instructions";
	this.instructions.setTransform(251.55,54.1,1,1,0,0,0,198.5,13);

	this.look_outside_btn = new lib.turn_page_back();
	this.look_outside_btn.name = "look_outside_btn";
	this.look_outside_btn.setTransform(133.5,628.5,1,1,0,0,0,88.5,61.5);

	this.look_inside_btn = new lib.turn_page();
	this.look_inside_btn.name = "look_inside_btn";
	this.look_inside_btn.setTransform(1109,593.4,1,1,0,0,0,51,26.4);

	this.beginbtn = new lib.StartButton();
	this.beginbtn.name = "beginbtn";
	this.beginbtn.setTransform(640,577.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.beginbtn},{t:this.look_inside_btn},{t:this.look_outside_btn},{t:this.instructions}]}).wait(1));

	// Inside
	this.greeting_text = new cjs.Text("", "48px 'Trattatello'");
	this.greeting_text.name = "greeting_text";
	this.greeting_text.textAlign = "center";
	this.greeting_text.lineHeight = 89;
	this.greeting_text.lineWidth = 996;
	this.greeting_text.parent = this;
	this.greeting_text.setTransform(640,112);

	this.inside_bg = new lib.inside_bg();
	this.inside_bg.name = "inside_bg";
	this.inside_bg.setTransform(640.05,360.05,1,1,0,0,0,600.1,334.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.inside_bg},{t:this.greeting_text}]}).wait(1));

	// Outside
	this.loadbar = new lib.loader();
	this.loadbar.name = "loadbar";
	this.loadbar.setTransform(639,360.35);

	this.char_6 = new lib.CharacterPivot();
	this.char_6.name = "char_6";
	this.char_6.setTransform(1114.25,478.9,0.902,0.902,0,0,0,0.1,0.1);

	this.char_5 = new lib.CharacterPivot();
	this.char_5.name = "char_5";
	this.char_5.setTransform(901.35,444.5,0.902,0.902,0,0,0,0.1,0.1);

	this.char_4 = new lib.CharacterPivot();
	this.char_4.name = "char_4";
	this.char_4.setTransform(710.9,528.85,0.902,0.902,0,0,0,0.1,0.1);

	this.char_3 = new lib.CharacterPivot();
	this.char_3.name = "char_3";
	this.char_3.setTransform(520.15,466.5,0.902,0.902,0,0,0,0.1,0.1);

	this.char_2 = new lib.CharacterPivot();
	this.char_2.name = "char_2";
	this.char_2.setTransform(152.1,423.85,0.902,0.902,0,0,0,0.1,0);

	this.char_1 = new lib.CharacterPivot();
	this.char_1.name = "char_1";
	this.char_1.setTransform(331,534.05,0.902,0.902,0,0,0,0.1,0.1);

	this.outside_bg = new lib.outside_bg();
	this.outside_bg.name = "outside_bg";
	this.outside_bg.setTransform(640.05,360.05,1,1,0,0,0,600.1,334.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.outside_bg},{t:this.char_1},{t:this.char_2},{t:this.char_3},{t:this.char_4},{t:this.char_5},{t:this.char_6},{t:this.loadbar}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640.5,359.4,664.7,373.9);
// library properties:
lib.properties = {
	id: '1897DC94515C4B1E83A3B2EC8D4FB107',
	width: 1280,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/accordion.png", id:"accordion"},
		{src:"images/bass.png", id:"bass"},
		{src:"images/Bitmap8.png", id:"Bitmap8"},
		{src:"images/Bitmap9.png", id:"Bitmap9"},
		{src:"images/drums.png", id:"drums"},
		{src:"images/spoons.png", id:"spoons"},
		{src:"images/violin.png", id:"violin"},
		{src:"images/BG.png", id:"BG"},
		{src:"images/Bitmap7.png", id:"Bitmap7"},
		{src:"images/guitar.png", id:"guitar"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1897DC94515C4B1E83A3B2EC8D4FB107'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;