function CLapIndicator(iX, iY, oParentContainer) {
  var _oContainer;
  var _oText;

  var _pStartPos;

  this._init = function () {
    _pStartPos = { x: iX, y: iY };

    _oContainer = new createjs.Container();
    _oContainer.x = iX;
    _oContainer.y = iY;
    oParentContainer.addChild(_oContainer);

    var oSprite = s_oSpriteLibrary.getSprite("lap_panel");
    var oBg = createBitmap(oSprite);
    oBg.regX = oSprite.width / 2;
    oBg.regY = 0;
    _oContainer.addChild(oBg);

    var iWidth = 140;
    var iHeight = 70;
    var iTextX = 50;
    var iTextY = 54;
    _oText = new CTLText(
      _oContainer,
      iTextX - iWidth / 2,
      iTextY - iHeight / 2,
      iWidth,
      iHeight,
      70,
      "center",
      "#fff",
      PRIMARY_FONT,
      1,
      2,
      2,
      sprintf(TEXT_LAP, 0, 0),
      true,
      true,
      false,
      false,
    );
    _oText.setStroke(10, "#000");

    _oRaceTime = new CTLText(
      _oContainer,
      iTextX * 3.5,
      iTextY - iHeight / 2,
      iWidth,
      iHeight,
      70,
      "center",
      "#fff",
      PRIMARY_FONT,
      1,
      2,
      2,
      sprintf("%s:%s:%s", "00", "00", "000"),
      true,
      true,
      false,
      false,
    );
    _oRaceTime.setStroke(10, "#000");
  };

  this.unload = function () {
    oParentContainer.removeChild(_oContainer);
  };

  this.setPosition = function () {
    _oContainer.x = _pStartPos.x;
    _oContainer.y = _pStartPos.y + s_iOffsetY;
  };

  this.refreshLap = function (iCur, iTot) {
    var szText = sprintf(TEXT_LAP, iCur, iTot);

    _oText.refreshText(szText);
  };

  this.refreshRaceTime = function (iMilliseconds) {
    _oRaceTime.refreshText(this.converMSToTimeFormat(iMilliseconds));
  };

  this.converMSToTimeFormat = function convertToMilliseconds(iMilliseconds) {
    let totalSeconds = Math.floor(iMilliseconds / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let ms = iMilliseconds % 1000;

    // Pad minutes, seconds, and milliseconds with leading zeros if needed
    let minutesStr = String(minutes).padStart(2, "0");
    let secondsStr = String(seconds).padStart(2, "0");
    let msStr = String(ms).padStart(3, "0");

    return `${minutesStr}:${secondsStr}:${msStr}`;
  };

  this.setVisible = function (bVal) {
    _oContainer.visible = bVal;
  };

  this._init();
}
