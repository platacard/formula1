function CCreditsPanel() {
  var _oFade;
  var _oPanelContainer;
  var _oButExit;
  var _oLogo;

  var _pStartPanelPos;

  this._init = function () {
    _oFade = new createjs.Shape();
    _oFade.graphics
      .beginFill("black")
      .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    _oFade.alpha = 0;
    _oFade.on("click", function () {});
    s_oStage.addChild(_oFade);

    new createjs.Tween.get(_oFade).to({ alpha: 0.7 }, 500);

    _oPanelContainer = new createjs.Container();
    s_oStage.addChild(_oPanelContainer);

    var oSprite = s_oSpriteLibrary.getSprite("msg_box");
    var oPanel = createBitmap(oSprite);
    oPanel.regX = oSprite.width / 2;
    oPanel.regY = oSprite.height / 2;
    _oPanelContainer.addChild(oPanel);

    _oPanelContainer.x = CANVAS_WIDTH / 2;
    _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height / 2 + 50;
    _pStartPanelPos = { x: _oPanelContainer.x, y: _oPanelContainer.y };
    new createjs.Tween.get(_oPanelContainer).to(
      { y: CANVAS_HEIGHT / 2 - 40 },
      500,
      createjs.Ease.quartIn,
    );

    var iWidth = 600;
    var iHeight = 100;
    var iX = 0;
    var iY = -oSprite.height / 2 + 110;
    const widthShift = iWidth - 100;
    const ruleFont = 25;

    new CTLText(
      _oPanelContainer,
      iX - iWidth / 2.05,
      iY - iHeight / 2,
      widthShift,
      iHeight,
      40,
      "left",
      "#fff",
      PRIMARY_FONT,
      1,
      2,
      2,
      TEXT_DEVELOPED,
      false,
      true,
      false,
      false
    ).setStroke(10, "#000");

    new CTLText(
      _oPanelContainer,
      iX - iWidth / 2.05,
      iY - iHeight / 2 + 80,
      widthShift,
      iHeight,
      ruleFont,
      "left",
      "#fff",
      PRIMARY_FONT,
      1,
      2,
      2,
      `1. Completa la carrera con tu mejor tiempo\n\n2. Ingresa tu número de teléfono para\nguardar el resultado\n\n3. Solicita tu tarjeta Plata si aún no la\n tienes. Necesitas ser cliente Plata para participar\n\n4. Sé uno de los 3 mejores de todos los\n corredores para ganar boletos`,
      false,
      false,
      true,
      false
    ).setStroke(10, "#000");

    var iY = 196;
    // var oLink = new CTLText(_oPanelContainer,
    //             iX-iWidth/2, iY-iHeight/2, iWidth, iHeight,
    //             40, "center", "#fff", PRIMARY_FONT, 1,
    //             2, 2,
    //             "www.codethislab.com",
    //             true, true, false,
    //             false );
    //
    // var oSprite = s_oSpriteLibrary.getSprite("ctl_logo");
    // _oLogo = createBitmap(oSprite);
    // _oLogo.on("click", this._onLogoButRelease);
    // _oLogo.regX = oSprite.width / 2;
    // _oLogo.regY = oSprite.height / 2;
    // _oPanelContainer.addChild(_oLogo);

    var oSprite = s_oSpriteLibrary.getSprite("but_exit");
    _oButExit = new CGfxButton(320, -180, oSprite, _oPanelContainer);
    _oButExit.addEventListener(ON_MOUSE_UP, this.unload, this);
  };

  this.unload = function () {
    _oButExit.setClickable(false);

    new createjs.Tween.get(_oFade).to({ alpha: 0 }, 500);
    new createjs.Tween.get(_oPanelContainer)
      .to({ y: _pStartPanelPos.y }, 400, createjs.Ease.backIn)
      .call(function () {
        s_oStage.removeChild(_oFade);
        s_oStage.removeChild(_oPanelContainer);

        _oButExit.unload();
      });

    _oFade.removeAllEventListeners();
    _oLogo.removeAllEventListeners();
  };

  this._onLogoButRelease = function () {
    window.open("http://www.codethislab.com/index.php?&l=en");
  };

  this._init();
}
