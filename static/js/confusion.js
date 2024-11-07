(function (_0x67fce7, _0x2b32fc) {
  const _0x49e90a = _0x3ac7,
    _0x2937ae = _0x67fce7();
  while (!![]) {
    try {
      const _0xdf2347 =
        (parseInt(_0x49e90a(0xa9)) / 0x1) * (-parseInt(_0x49e90a(0xb1)) / 0x2) +
        (parseInt(_0x49e90a(0xaa)) / 0x3) * (-parseInt(_0x49e90a(0xad)) / 0x4) +
        parseInt(_0x49e90a(0xbd)) / 0x5 +
        (parseInt(_0x49e90a(0xbe)) / 0x6) * (-parseInt(_0x49e90a(0xab)) / 0x7) +
        (-parseInt(_0x49e90a(0xb9)) / 0x8) *
          (-parseInt(_0x49e90a(0xb4)) / 0x9) +
        -parseInt(_0x49e90a(0xb8)) / 0xa +
        parseInt(_0x49e90a(0xb7)) / 0xb;
      if (_0xdf2347 === _0x2b32fc) break;
      else _0x2937ae["push"](_0x2937ae["shift"]());
    } catch (_0x2f9cbc) {
      _0x2937ae["push"](_0x2937ae["shift"]());
    }
  }
})(_0x4b90, 0x77331);
function updateFooterDisplay(_0x517d53) {
  const _0x43c0c8 = _0x3ac7,
    _0x2da6a0 = document["getElementById"](_0x43c0c8(0xbc));
  if (!_0x2da6a0) return;
  const _0x260755 = _0x517d53
    ? window["siteParams"][_0x43c0c8(0xa7)]
    : window[_0x43c0c8(0xb3)]["github"];
  if (!_0x260755) return;
  try {
    const _0x384025 = decodeURIComponent(escape(atob(_0x260755)));
    _0x2da6a0["innerHTML"] = _0x384025;
  } catch (_0x1aa8cd) {
    console[_0x43c0c8(0xae)](
      "Failed\x20to\x20decode\x20footer\x20text:",
      _0x1aa8cd
    );
  }
}
function _0x4b90() {
  const _0x43e690 = [
    "9743830nMWKRk",
    "10456ZhcPyp",
    "country_name",
    "getTime",
    "footer-links",
    "2970135YrvreJ",
    "12VBMinz",
    "beian",
    "catch",
    "19282MhiBOa",
    "951OMRAfZ",
    "2807161pUUALN",
    "getItem",
    "3436DDcIJq",
    "error",
    "true",
    "isChina",
    "62KJFCfx",
    "China",
    "siteParams",
    "5526nehVwT",
    "timestamp",
    "then",
    "19120090BCkjxT",
  ];
  _0x4b90 = function () {
    return _0x43e690;
  };
  return _0x4b90();
}
function _0x3ac7(_0x54e97f, _0x23c0e2) {
  const _0x4b9000 = _0x4b90();
  return (
    (_0x3ac7 = function (_0x3ac726, _0x237265) {
      _0x3ac726 = _0x3ac726 - 0xa7;
      let _0x28eea6 = _0x4b9000[_0x3ac726];
      return _0x28eea6;
    }),
    _0x3ac7(_0x54e97f, _0x23c0e2)
  );
}
function isInChina() {
  return new Promise((_0x55c765) => {
    const _0x4fc412 = _0x3ac7,
      _0x68ff74 = localStorage[_0x4fc412(0xac)](_0x4fc412(0xb0)),
      _0x1d36a7 = localStorage[_0x4fc412(0xac)](_0x4fc412(0xb5)),
      _0x5de0ac = new Date()[_0x4fc412(0xbb)]();
    if (
      _0x68ff74 !== null &&
      _0x1d36a7 !== null &&
      _0x5de0ac - _0x1d36a7 < 0x18 * 0x3c * 0x3c * 0x3e8
    ) {
      _0x55c765(_0x68ff74 === _0x4fc412(0xaf));
      return;
    }
    fetch("https://ipapi.co/json/")
      [_0x4fc412(0xb6)]((_0x6fc0d5) => _0x6fc0d5["json"]())
      ["then"]((_0x4c0464) => {
        const _0x488320 = _0x4fc412,
          _0x2fd1a6 = _0x4c0464[_0x488320(0xba)] === _0x488320(0xb2);
        localStorage["setItem"](_0x488320(0xb0), _0x2fd1a6),
          localStorage["setItem"](_0x488320(0xb5), _0x5de0ac),
          _0x55c765(_0x2fd1a6);
      })
      [_0x4fc412(0xa8)](() => {
        _0x55c765(![]);
      });
  });
}
isInChina()["then"]((_0x3bb0c4) => {
  updateFooterDisplay(_0x3bb0c4);
});
