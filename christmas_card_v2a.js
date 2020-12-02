(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,209);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,209);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,209);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,209);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,209);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,209);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,48);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,123);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,123);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.turn_page_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.turn_page_back, new cjs.Rectangle(0,0,177,123), null);


(lib.turn_page = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.turn_page, new cjs.Rectangle(0,0,177,123), null);


(lib.TaptoHear = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(135,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TaptoHear, new cjs.Rectangle(0,0,270,20.6), null);


(lib.StartButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-97,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StartButton, new cjs.Rectangle(-97,-24,193,48), null);


(lib.outside_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("Ehdwg0SMC7hAAAMAAABolMi7hAAAg");
	this.shape.setTransform(600.075,334.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhdwA0SMAAAhojMC7hAAAMAAABojg");
	this.shape_1.setTransform(600.075,334.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.outside_bg, new cjs.Rectangle(-1,-1,1202.2,671.3), null);


(lib.loading_label = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(0.026,0,0.3393,0.3393);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.loading_label, new cjs.Rectangle(-64.8,-12.3,129.7,24.6), null);


(lib.loadbar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC66").s().p("EhaEACWIAAkrMC0JAAAIAAErg");
	this.shape.setTransform(576.45,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.loadbar, new cjs.Rectangle(0,-14.9,1152.9,29.9), null);


(lib.inside_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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


(lib.Character6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-104,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Character6, new cjs.Rectangle(-104,-104,209,209), null);


(lib.Character5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-104,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Character5, new cjs.Rectangle(-104,-104,209,209), null);


(lib.Character4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-104,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Character4, new cjs.Rectangle(-104,-104,209,209), null);


(lib.Character3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-104,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Character3, new cjs.Rectangle(-104,-104,209,209), null);


(lib.Character2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-104,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Character2, new cjs.Rectangle(-104,-104,209,209), null);


(lib.Character1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-104,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Character1, new cjs.Rectangle(-104,-104,209,209), null);


(lib.loader = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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


(lib.Instructions = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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


(lib.Characters = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer_1
	this.instance = new lib.Character1();

	this.instance_1 = new lib.Character2();

	this.instance_2 = new lib.Character3();

	this.instance_3 = new lib.Character4();

	this.instance_4 = new lib.Character5();

	this.instance_5 = new lib.Character6();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-104,209,209);


(lib.CharacterPivot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:0.5,rotation:5.1612,x:0.45,y:0.55},0).wait(1).to({rotation:5.0633},0).wait(1).to({rotation:4.9141},0).wait(1).to({rotation:4.7095},0).wait(1).to({rotation:4.4454},0).wait(1).to({rotation:4.1179},0).wait(1).to({rotation:3.7235},0).wait(1).to({rotation:3.2601},0).wait(1).to({rotation:2.7272,x:0.5,y:0.5},0).wait(1).to({rotation:2.127},0).wait(1).to({rotation:1.4651},0).wait(1).to({rotation:0.7514},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:0},0).wait(1).to({regX:0.5,regY:0.5,rotation:-1.0208,x:0.5,y:0.5},0).wait(1).to({rotation:-2.0426},0).wait(1).to({rotation:-3.04,x:0.55,y:0.45},0).wait(1).to({rotation:-3.9908},0).wait(1).to({rotation:-4.8776},0).wait(1).to({rotation:-5.6885},0).wait(1).to({rotation:-6.4167},0).wait(1).to({rotation:-7.0598},0).wait(1).to({rotation:-7.6183},0).wait(1).to({rotation:-8.0947},0).wait(1).to({rotation:-8.4931},0).wait(1).to({rotation:-8.818,x:0.6,y:0.4},0).wait(1).to({rotation:-9.0743},0).wait(1).to({rotation:-9.2668},0).wait(1).to({rotation:-9.4},0).wait(1).to({regX:0,regY:0,rotation:-9.4784,x:0,y:0},0).wait(1).to({regX:0.5,regY:0.5,rotation:-9.4201,x:0.6,y:0.4},0).wait(1).to({rotation:-9.3084},0).wait(1).to({rotation:-9.1389},0).wait(1).to({rotation:-8.9072},0).wait(1).to({rotation:-8.6087,x:0.55,y:0.45},0).wait(1).to({rotation:-8.2392},0).wait(1).to({rotation:-7.7948},0).wait(1).to({rotation:-7.2726},0).wait(1).to({rotation:-6.6716},0).wait(1).to({rotation:-5.9933},0).wait(1).to({rotation:-5.2425},0).wait(1).to({rotation:-4.4284},0).wait(1).to({rotation:-3.5647},0).wait(1).to({rotation:-2.6693,x:0.5,y:0.5},0).wait(1).to({rotation:-1.7626},0).wait(1).to({rotation:-0.8662},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:0},0).wait(1).to({regX:0.5,regY:0.5,rotation:0.6914,x:0.5,y:0.5},0).wait(1).to({rotation:1.3787},0).wait(1).to({rotation:2.0369},0).wait(1).to({rotation:2.6459},0).wait(1).to({rotation:3.1925,x:0.45,y:0.55},0).wait(1).to({rotation:3.6698},0).wait(1).to({rotation:4.0763},0).wait(1).to({rotation:4.4135},0).wait(1).to({rotation:4.6851},0).wait(1).to({rotation:4.8959},0).wait(1).to({rotation:5.0507},0).wait(1).to({rotation:5.1545},0).wait(1).to({regX:0,regY:0,rotation:5.2118,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.7,-119.9,240.60000000000002,240.60000000000002);


// stage content:
(lib.christmas_card_v2a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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
		createjs.Sound.registerSound({src:"/mus/1_Accordion.ogg", id:"sound1"});
		createjs.Sound.registerSound({src:"/mus/6_Fiddle.ogg", id:"sound2"});
		createjs.Sound.registerSound({src:"/mus/3_Guitar.ogg", id:"sound3"});
		createjs.Sound.registerSound({src:"/mus/4_Bass.ogg", id:"sound4"});
		createjs.Sound.registerSound({src:"/mus/5_Drums.ogg", id:"sound5"});
		createjs.Sound.registerSound({src:"/mus/2_Spoons.ogg", id:"sound6"});
		
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
		
		
			_this.look_inside_btn.alpha = 0.0;
			_this.look_inside_btn.visible = true;
			createjs.Tween.get(_this.look_inside_btn).to({
				alpha: 1.0
			}, 500);
		
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
				createjs.Tween.get(mc).to({
					alpha: 0.0
				}, 500).addEventListener("complete", function () {
					mc.visible = false;
				});
			}
			createjs.Tween.get(_this.look_inside_btn).to({
				alpha: 0.0
			}, 500).addEventListener("complete", function () {
				_this.look_inside_btn.visible = false;
			});
		
			_this.greeting_text.alpha = 0.0;
			_this.inside_bg.alpha = 0.0;
			_this.look_outside_btn.alpha = 0.0;
			_this.greeting_text.visible = true;
			_this.inside_bg.visible = true;
			_this.look_outside_btn.visible = true;
			createjs.Tween.get(_this.greeting_text).to({
				alpha: 1.0
			}, 500);
			createjs.Tween.get(_this.inside_bg).to({
				alpha: 1.0
			}, 500);
			createjs.Tween.get(_this.look_outside_btn).to({
				alpha: 1.0
			}, 500);
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
	this.char_6 = new lib.CharacterPivot();
	this.char_6.name = "char_6";
	this.char_6.setTransform(1127.3,360,0.7332,0.7332);

	this.char_5 = new lib.CharacterPivot();
	this.char_5.name = "char_5";
	this.char_5.setTransform(927.9,360,0.7332,0.7332);

	this.char_4 = new lib.CharacterPivot();
	this.char_4.name = "char_4";
	this.char_4.setTransform(744.35,360,0.7332,0.7332);

	this.char_3 = new lib.CharacterPivot();
	this.char_3.name = "char_3";
	this.char_3.setTransform(544.95,360,0.7332,0.7332);

	this.char_2 = new lib.CharacterPivot();
	this.char_2.name = "char_2";
	this.char_2.setTransform(349.2,360,0.7332,0.7332);

	this.char_1 = new lib.CharacterPivot();
	this.char_1.name = "char_1";
	this.char_1.setTransform(152.7,360,0.7332,0.7332);

	this.loadbar = new lib.loader();
	this.loadbar.name = "loadbar";
	this.loadbar.setTransform(639,360.35);

	this.outside_bg = new lib.outside_bg();
	this.outside_bg.name = "outside_bg";
	this.outside_bg.setTransform(640.05,360.05,1,1,0,0,0,600.1,334.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.outside_bg},{t:this.loadbar},{t:this.char_1},{t:this.char_2},{t:this.char_3},{t:this.char_4},{t:this.char_5},{t:this.char_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(679.5,384.9,561.0999999999999,310.30000000000007);
// library properties:
lib.properties = {
	id: '1897DC94515C4B1E83A3B2EC8D4FB107',
	width: 1280,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.png?1606926933041", id:"Bitmap1"},
		{src:"images/Bitmap2.png?1606926933041", id:"Bitmap2"},
		{src:"images/Bitmap3.png?1606926933041", id:"Bitmap3"},
		{src:"images/Bitmap4.png?1606926933041", id:"Bitmap4"},
		{src:"images/Bitmap5.png?1606926933041", id:"Bitmap5"},
		{src:"images/Bitmap6.png?1606926933041", id:"Bitmap6"},
		{src:"images/Bitmap7.png?1606926933041", id:"Bitmap7"},
		{src:"images/Bitmap8.png?1606926933041", id:"Bitmap8"},
		{src:"images/Bitmap9.png?1606926933041", id:"Bitmap9"}
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;