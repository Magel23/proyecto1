var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

function draw() {
  background(rgb(0,223,231));
fill(rgb(219,219,219));
rect(124, 29,12, 198);
rect(118, 49,22, 198);
rect(109, 79,42, 198);
  fill(rgb(205,25,39));
  rect(203, 60, 98, 395);
  fill(rgb(148,148,148));
  rect(319,59,22, 198);
  rect(349,39,22, 198);
  rect(9,89,22, 198);
  fill("black");
  rect(203, 69, 98, 8);
 rect(203, 109, 98, 8);
 rect(203, 149, 98, 8);
rect(203, 189, 98, 8);
 rect(203, 229, 98, 8);
 rect(203, 269, 98, 8);
 rect(203, 309, 98, 8);
rect(203, 349, 98, 8);
fill(rgb(223,221,253));
rect(322, 133, 100, 360);
fill(rgb(223, 217, 199));
rect(329, 143, 50, 30);
rect(479, 143, 50, 30);
rect(329, 183, 50, 30);
rect(329, 223, 50, 30);
rect(329, 263, 50, 30);
rect(329, 313, 50, 30);
fill(rgb(203, 201,224));
rect(212, 83, 80, 20);
rect(212, 123, 80, 20);
rect(212, 163, 80, 20);
rect(212, 203, 80, 20);
rect(212, 243, 80, 20);
rect(212, 283, 80, 20);
rect(212, 323, 80, 20);
fill(rgb(249,216,193));
rect(341, 269, 50, 119);
fill(rgb(76, 25,17));
rect(336,389,60,10);
  fill(rgb(54,88,132));
rect(18, 110, 118, 295);
fill(rgb(62,106,140));
rect(29,128, 25, 25);
rect(65,128, 25, 25);
rect(99,128, 25, 25);
rect(29,168, 25, 25);
rect(65,168, 25, 25);
rect(99,168, 25, 25);
rect(99,208, 25, 25);
rect(99,248, 25, 25);
rect(99,288, 25, 25);
rect(99,328, 25, 25);
  fill(rgb(255,248,243));
  rect(5, 180, 100, 255);
  rect(115,230,100,193);
   rect(10, 160, 25, 20);
  fill(rgb(224,10,7));
rect(119,355, 90, 23);
  fill(rgb(0, 20, 117));//blue//
  rect(20,195, 25, 25);
  rect(65,195, 25, 25);
  rect(20,235, 25, 25);
  rect(65,235, 25, 25);
  rect(20,275, 25, 25);
  rect(65,275, 25, 25);
  rect(20,315, 25, 25);
  rect(65,315, 25, 25);
  fill("gray");
  rect(4,395, 102, 5);
  rect(2,180,107,8);
  rect(113,225,105,8);
  rect(226,165,110,10);
  rect(355,358,20,30);
  fill(rgb(135,54, 52));
  rect(42,370, 25, 35);
  rect(123,379,29, 35);
  fill(rgb(125,251,255));
  rect(24,199, 17, 17);
  rect(69,199, 17, 17);
  rect(24,239, 17, 17);
  rect(69,239, 17, 17);
  rect(24,279, 17, 17);
  rect(69,279, 17, 17);
  rect(24,319, 17, 17);
  rect(69,319, 17, 17);
  fill(rgb(255,249,210));
  rect(5,345, 100, 10);
  rect(5,302, 100, 10);
rect(5,262, 100, 10);
rect(5,222, 100, 10);
fill(rgb(255,255,255));
rect(130,355, 15, 23);
rect(155,355, 15, 23);
rect(180,355, 15, 23);
fill(rgb(0,102, 117));
rect(148,379,61,20);
fill("black");
rect(120,379,2,20);
rect(145,379,3,20);
rect(168,379,3,20);
rect(206,379,3,20);
fill(rgb(23,35,45));
rect(120,315,90,25);
rect(120,275,90,25);
rect(120,240,90,25);
rect(348,277, 35,39);
rect(348,317, 35,39);
fill(rgb(221,251,255));
rect(125,320,80,15);
rect(125,280,80,15);
rect(125,245,80,15);
fill(rgb(240,162,46));
rect(232,183,100,170);
fill(rgb(13,41,69));
rect(232,344,100,55);
rect(229,175,106,8);
fill(rgb(255,235,69));//doors//
rect(245,370, 25, 35);
rect(279,370, 45, 25);
fill(rgb(238,230,184));//windows//
rect(239,346, 14,19);
rect(260,346, 14,19);
rect(280,346, 14,19);
rect(300,346, 14,19);
rect(320,346, 10,19);
fill(rgb(18,17,59));//Black window//
rect(305,316, 18,23);
rect(240,316, 18,23);
rect(305,286, 18,23);
rect(240,286, 18,23);
rect(305,256, 18,23);
rect(240,256, 18,23);
rect(305,226, 18,23);
rect(240,226, 18,23);
rect(305,196, 18,23);
rect(240,196, 18,23);
rect(264,286, 35,53);
rect(264,196, 35,83);
fill(rgb(135,250,248));//blue window//
rect(306,319, 15,17);
rect(241.5,319, 15,17);
rect(306,288, 15,17);
rect(241,289, 15,17);
rect(306,259, 15,17);
rect(242,259, 15,17);
rect(306,228, 15,17);
rect(241.5,228, 15,17);
rect(306,199, 15,17);
rect(241,199, 15,17);
rect(266,289, 31,45);
rect(266,199, 31,75);
rect(350,279, 31,35);
rect(350,319, 31,35);
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
