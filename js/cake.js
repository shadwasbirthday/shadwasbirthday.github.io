$('document').ready(function(){
  var canvas = Snap("#cake");

  var loop1="M3771 5282 c-29 -47 -38 -465 -11 -532 l24 -60 19 50 c12 31 12 65 0 92 -11 23 -24 95 -30 160 -6 65 -6 98 0 73 6 -28 19 -40 33 -31 34 21 94 22 94 1 0 -9 8 -12 19 -6 10 6 24 -7 31 -29 11 -36 23 -43 63 -38 6 1 29 -24 49 -55 21 -32 38 -49 38 -39 0 64 -194 231 -250 214 -11 -3 -14 1 -6 9 8 8 4 33 -8 57 -13 23 -28 69 -35 102 -9 43 -17 52 -30 32z"
  var loop2="M2716 5225 c-2 -30 -3 -70 -3 -89 0 -18 -5 -32 -12 -31 -23 7 -180 -151 -168 -169 6 -11 35 3 64 30 125 117 191 80 180 -100 -7 -115 39 -177 56 -76 12 74 -17 270 -39 257 -12 -8 -14 -3 -5 11 18 29 -26 222 -51 222 -10 0 -20 -25 -22 -55z"
  var loop3="M1960 5111 c7 -49 7 -85 -1 -80 -8 5 -19 -9 -25 -31 -7 -27 -2 -36 13 -27 13 7 -10 -18 -51 -55 -40 -37 -78 -90 -84 -118 -11 -47 -10 -46 14 5 15 31 32 50 39 43 7 -6 41 17 77 54 l64 65 38 -47 c28 -35 38 -74 34 -139 -9 -165 47 -271 72 -136 14 72 -77 395 -111 395 -10 0 -17 7 -14 15 7 22 -47 145 -64 145 -8 0 -9 -40 -1 -89z"
  var loop4="M3497 5049 c-2 -32 -3 -71 -2 -85 0 -15 -3 -23 -8 -18 -18 18 -287 -238 -287 -272 0 -13 17 1 38 33 20 31 43 56 49 55 7 -1 45 16 83 38 147 83 201 4 123 -180 -20 -48 21 -99 48 -60 28 40 13 494 -18 525 -17 17 -24 8 -26 -36z"
  var loop5="M4071 4801 c-37 -41 -27 -81 20 -81 19 0 29 21 29 60 0 71 -3 72 -49 21z"
  var loop6="M2460 4782 c0 -51 20 -102 40 -102 36 0 36 64 0 100 -39 39 -40 39 -40 2z"
  var loop7="M2604 4712 c9 -105 7 -109 -53 -135 l-61 -27 5 -342 5 -343 -62 -12 c-195 -39 -191 -44 -208 289 -16 288 -17 291 -122 327 -69 24 -80 36 -92 109 -18 103 -29 122 -76 122 -47 0 -56 -30 -39 -123 12 -69 9 -76 -44 -98 -89 -37 -95 -65 -82 -411 l11 -322 -77 -15 c-477 -89 -1025 -425 -1183 -725 -155 -292 -144 -634 25 -823 l83 -93 11 -345 c10 -330 9 -347 -29 -367 -233 -125 -317 -347 -195 -516 542 -748 4238 -800 5018 -71 217 203 151 443 -168 610 -85 45 -92 54 -82 107 6 31 11 171 12 310 l0 252 81 50 c362 223 383 822 43 1202 -204 227 -782 498 -1062 498 -59 0 -61 8 -94 364 -36 394 -34 388 -120 419 -64 23 -69 31 -69 112 0 60 -10 90 -31 98 -50 20 -77 -26 -72 -121 5 -80 1 -89 -52 -107 -118 -41 -121 -52 -110 -397 10 -292 9 -314 -24 -301 -19 7 -53 13 -76 13 -39 0 -40 8 -30 196 12 222 1 255 -98 297 -67 27 -69 31 -58 113 14 96 -7 141 -61 131 -30 -6 -39 -28 -44 -108 -5 -95 -10 -102 -69 -120 -88 -26 -112 -86 -126 -313 l-13 -194 -59 -13 c-81 -17 -76 -32 -101 303 -25 330 -35 354 -159 391 -70 21 -77 30 -77 91 0 91 -32 146 -83 146 -38 0 -41 -9 -33 -108z m78 -232 c21 0 44 13 50 28 12 31 76 21 108 -18 19 -23 58 -391 90 -854 16 -223 30 -208 -203 -221 l-124 -7 -12 111 c-41 392 -51 971 -17 996 28 21 37 20 51 -5 9 -16 35 -30 57 -30z m1224 -3 c30 -19 74 3 74 37 0 18 16 27 45 22 47 -6 64 -137 122 -931 l12 -165 -167 0 -166 0 -13 185 c-7 102 -19 338 -26 526 l-13 340 48 22 c35 16 50 16 56 -1 4 -12 17 -28 28 -35z m-1929 -117 c21 0 44 14 50 30 7 17 23 30 37 30 69 -1 78 -36 106 -412 15 -208 33 -443 39 -522 l10 -144 -64 -11 c-36 -6 -111 -18 -168 -28 l-102 -17 -12 142 c-39 464 -40 958 -2 985 33 25 40 23 53 -13 8 -22 32 -40 53 -40z m1349 -40 c13 -52 71 -51 91 1 15 41 16 41 62 4 l46 -38 -26 -533 -26 -534 -172 0 -172 0 24 295 c62 740 70 815 93 829 41 26 69 18 80 -24z m367 -500 l64 0 14 -220 14 -220 55 0 c29 0 124 6 209 13 l154 13 -14 185 -13 185 198 -46 c734 -174 1116 -519 1116 -1009 0 -464 -434 -829 -599 -504 -58 115 -142 163 -222 126 -54 -25 -72 -58 -117 -224 -42 -152 -90 -190 -272 -218 -194 -30 -229 -54 -273 -195 -69 -219 -251 -146 -345 138 -50 152 -107 244 -186 302 -126 94 -288 10 -281 -146 6 -150 -143 -143 -353 17 -150 115 -220 110 -420 -27 -344 -236 -440 -225 -708 78 -243 275 -491 330 -763 167 -193 -115 -246 -119 -340 -25 -281 282 -100 859 363 1151 199 126 694 319 818 319 16 0 28 -72 38 -220 l14 -221 63 11 c35 5 126 20 202 31 173 26 157 -1 136 242 -22 247 -42 214 138 230 l151 12 12 -195 c16 -237 -11 -213 226 -195 l198 15 -6 215 -6 215 92 0 92 0 -12 -135 c-7 -74 -19 -211 -28 -305 -21 -211 -29 -203 210 -196 l198 6 13 210 c6 116 13 263 15 327 2 112 4 117 47 106 25 -7 73 -13 108 -13z m-2192 -1724 c71 -57 177 -143 235 -190 304 -248 565 -258 765 -30 134 152 139 154 275 84 66 -33 131 -74 145 -91 50 -60 199 -133 272 -133 100 0 138 48 163 211 12 76 27 143 33 149 15 15 111 -77 111 -107 0 -13 13 -35 28 -48 16 -12 39 -68 53 -124 16 -68 48 -126 100 -180 87 -92 93 -88 -177 -116 -736 -76 -1876 33 -2395 229 -320 120 -515 293 -309 273 62 -5 105 7 195 58 197 113 213 119 296 119 68 0 102 -17 210 -104z m3413 -25 l84 -106 -204 -95 c-182 -84 -505 -201 -661 -238 -51 -12 -55 -10 -43 32 21 72 78 142 121 149 319 47 466 130 501 284 30 129 85 122 202 -26z m226 -168 c0 -407 -1586 -741 -2967 -624 -904 76 -1473 282 -1473 533 0 124 1 124 86 60 354 -265 1149 -411 2244 -411 691 -1 1348 146 1860 417 270 143 250 141 250 25z m-44 -619 c-51 -107 -409 -230 -956 -328 -862 -155 -2269 37 -2915 396 -156 87 -156 94 0 46 733 -225 2169 -242 3015 -36 271 66 611 201 770 306 l100 65 6 -197 c3 -131 -3 -216 -20 -252z m-4191 220 c19 -17 35 -22 35 -12 0 10 7 9 15 -3 8 -11 57 -47 109 -79 51 -32 89 -65 84 -74 -6 -9 2 -11 18 -5 15 6 57 -17 93 -50 36 -33 72 -56 81 -51 9 6 20 3 23 -5 38 -84 660 -260 1189 -335 466 -67 1403 -72 1479 -9 15 12 35 17 45 11 26 -15 346 43 432 79 39 16 78 27 87 25 8 -3 35 7 60 20 37 21 45 21 45 -3 0 -16 -16 -35 -35 -42 -19 -8 -35 -11 -35 -9 0 3 -22 -8 -50 -23 -27 -15 -57 -29 -65 -31 -8 -2 -17 -5 -20 -7 -3 -2 -30 -7 -61 -11 -32 -4 -70 -18 -85 -31 -23 -19 -29 -18 -29 2 0 17 -10 13 -27 -10 -18 -24 -42 -33 -69 -26 -23 6 -45 3 -48 -7 -3 -10 -43 -20 -89 -23 -46 -3 -79 -12 -74 -20 5 -8 -16 -15 -47 -15 -31 0 -87 -9 -126 -19 -412 -113 -1612 -101 -2110 21 -88 21 -176 43 -197 48 -134 32 -361 123 -438 175 -30 21 -55 33 -55 27 0 -18 -82 50 -171 142 -89 91 -120 169 -141 355 l-14 118 78 -47 c43 -25 94 -60 113 -76z m4343 -174 c579 -339 91 -735 -1118 -908 -2048 -294 -4313 254 -3532 853 107 82 111 82 140 -15 64 -216 387 -400 932 -531 1290 -311 3470 60 3470 590 0 74 1 74 108 11z"
  var loop8="M1440 3388 c0 -5 38 -47 85 -93 47 -47 130 -148 185 -225 158 -221 211 -242 570 -231 623 20 702 9 762 -103 81 -151 -184 -223 -502 -134 -90 24 -235 45 -360 50 -377 15 -569 27 -620 38 -27 5 -79 15 -115 22 -148 28 -378 219 -439 365 -35 83 -55 70 -34 -21 9 -36 14 -73 12 -81 -2 -8 10 -15 27 -15 17 0 27 -8 21 -17 -6 -9 11 -38 38 -63 27 -25 44 -53 38 -63 -5 -9 2 -12 16 -7 14 6 50 -12 80 -40 30 -27 68 -50 84 -50 16 0 35 -8 41 -18 27 -44 377 -96 731 -109 269 -9 407 -25 520 -59 271 -81 520 2 520 173 0 41 -137 173 -180 173 -18 0 -39 6 -46 13 -18 18 -452 20 -441 3 5 -8 -80 -15 -187 -14 -272 0 -397 66 -566 298 -111 152 -240 264 -240 208z"
  var loop9="M785 2555 c5 -14 35 -26 67 -27 32 -1 67 -4 78 -7 11 -3 47 -4 80 -1 43 3 23 12 -70 31 -165 34 -165 34 -155 4z"
  var loop10="M4610 2536 c-43 -24 -73 -60 -60 -72 4 -5 28 11 52 34 51 47 81 52 144 21 43 -20 43 -20 5 10 -45 36 -86 38 -141 7z"
  var loop11="M3270 2380 c-63 -42 -55 -55 12 -19 91 49 182 36 252 -36 83 -86 86 -70 4 24 -74 84 -171 95 -268 31z"
  var loop12="M4067 2207 c-95 -67 -219 -115 -250 -95 -9 6 -17 0 -17 -13 0 -15 18 -19 50 -11 33 8 50 4 50 -11 0 -14 12 -8 27 12 15 21 37 31 50 23 13 -8 23 -4 23 8 0 12 9 17 19 11 10 -7 29 7 42 30 15 28 35 39 61 33 21 -6 38 -2 38 8 0 25 95 23 110 -2 7 -11 22 -20 34 -20 39 0 -45 75 -94 85 -33 6 -79 -12 -143 -58z"
  var loop13="M2280 2180 c-38 -21 -97 -62 -130 -90 -71 -62 -32 -45 78 34 43 31 90 56 104 56 14 0 31 9 38 20 18 30 -11 23 -90 -20z"
  var loop14="M3189 4580 c11 -82 23 -93 49 -44 16 31 13 46 -18 74 -38 34 -39 33 -31 -30z"

  var loopLength1 = Snap.path.getTotalLength(loop1);
  var loopLength2 = Snap.path.getTotalLength(loop2);
  var loopLength3 = Snap.path.getTotalLength(loop3);
  var loopLength4 = Snap.path.getTotalLength(loop4);
  var loopLength5 = Snap.path.getTotalLength(loop5);
  var loopLength6 = Snap.path.getTotalLength(loop6);
  var loopLength7 = Snap.path.getTotalLength(loop7);
  var loopLength8 = Snap.path.getTotalLength(loop8);
  var loopLength9 = Snap.path.getTotalLength(loop9);
  var loopLength10 = Snap.path.getTotalLength(loop10);
  var loopLength11 = Snap.path.getTotalLength(loop11);
  var loopLength12 = Snap.path.getTotalLength(loop12);
  var loopLength13 = Snap.path.getTotalLength(loop13);
  var loopLength14 = Snap.path.getTotalLength(loop14);

  var circleOutline1 =  canvas.path({
    path: Snap.path.getSubpath(loop1, 0, 0),
    stroke: "white",
    fillOpacity: 0,
    strokeWidth: 0,
    strokeLinecap: "round"
  });
  var circleOutline2 =  canvas.path({
    path: Snap.path.getSubpath(loop2, 0, 0),
    stroke: "white",
    fillOpacity: 0,
    strokeWidth: 0,
    strokeLinecap: "round"
  });
  var circleOutline3 =  canvas.path({
    path: Snap.path.getSubpath(loop3, 0, 0),
    stroke: "white",
    fillOpacity: 0,
    strokeWidth: 0,
    strokeLinecap: "round"
  });
  var circleOutline4 =  canvas.path({
    path: Snap.path.getSubpath(loop4, 0, 0),
    stroke: "white",
    fillOpacity: 0,
    strokeWidth: 0,
    strokeLinecap: "round"
  });
  var circleOutline5 =  canvas.path({
    path: Snap.path.getSubpath(loop5, 0, 0),
    stroke: "white",
    fillOpacity: 0,
    strokeWidth: 0,
    strokeLinecap: "round"
  });
  var circleOutline6 =  canvas.path({
    path: Snap.path.getSubpath(loop6, 0, 0),
    stroke: "white",
    fillOpacity: 0,
    strokeWidth: 0,
    strokeLinecap: "round"
  });
  var circleOutline7 =  canvas.path({
    path: Snap.path.getSubpath(loop7, 0, 0),
    stroke: "white",
    fillOpacity: 0,
    strokeWidth: 0,
    strokeLinecap: "round"
  });
  var circleOutline8 =  canvas.path({
    path: Snap.path.getSubpath(loop8, 0, 0),
    stroke: "white",
    fillOpacity: 0,
    strokeWidth: 0,
    strokeLinecap: "round"
  });
  var circleOutline9 =  canvas.path({
    path: Snap.path.getSubpath(loop9, 0, 0),
    stroke: "white",
    fillOpacity: 0,
    strokeWidth: 0,
    strokeLinecap: "round"
  });
  var circleOutline10 =  canvas.path({
    path: Snap.path.getSubpath(loop10, 0, 0),
    stroke: "white",
    fillOpacity: 0,
    strokeWidth: 0,
    strokeLinecap: "round"
  });
  var circleOutline11 =  canvas.path({
    path: Snap.path.getSubpath(loop11, 0, 0),
    stroke: "white",
    fillOpacity: 0,
    strokeWidth: 0,
    strokeLinecap: "round"
  });
  var circleOutline12 =  canvas.path({
    path: Snap.path.getSubpath(loop12, 0, 0),
    stroke: "white",
    fillOpacity: 0,
    strokeWidth: 0,
    strokeLinecap: "round"
  });
  var circleOutline13 =  canvas.path({
    path: Snap.path.getSubpath(loop13, 0, 0),
    stroke: "white",
    fillOpacity: 0,
    strokeWidth: 0,
    strokeLinecap: "round"
  });
  var circleOutline14 =  canvas.path({
    path: Snap.path.getSubpath(loop14, 0, 0),
    stroke: "white",
    fillOpacity: 0,
    strokeWidth: 0,
    strokeLinecap: "round"
  });

Snap.animate(0, loopLength1,
  function(step){ //step function
    circleOutline1.attr({
      path: Snap.path.getSubpath(loop1, 0, step),
      strokeWidth: 15
    });
  },
  5000,
  mina.easeInOut
);
Snap.animate(0, loopLength2,
  function(step){ //step function
    circleOutline2.attr({
      path: Snap.path.getSubpath(loop2, 0, step),
      strokeWidth: 15
    });
  },
  5000,
  mina.easeInOut
);
Snap.animate(0, loopLength3,
  function(step){ //step function
    circleOutline3.attr({
      path: Snap.path.getSubpath(loop3, 0, step),
      strokeWidth: 15
    });
  },
  5000,
  mina.easeInOut
);
Snap.animate(0, loopLength4,
  function(step){ //step function
    circleOutline4.attr({
      path: Snap.path.getSubpath(loop4, 0, step),
      strokeWidth: 15
    });
  },
  5000,
  mina.easeInOut
);
Snap.animate(0, loopLength5,
  function(step){ //step function
    circleOutline5.attr({
      path: Snap.path.getSubpath(loop5, 0, step),
      strokeWidth: 15
    });
  },
  5000,
  mina.easeInOut
);
Snap.animate(0, loopLength6,
  function(step){ //step function
    circleOutline6.attr({
      path: Snap.path.getSubpath(loop6, 0, step),
      strokeWidth: 15
    });
  },
  5000,
  mina.easeInOut
);
Snap.animate(0, loopLength7,
  function(step){ //step function
    circleOutline7.attr({
      path: Snap.path.getSubpath(loop7, 0, step),
      strokeWidth: 15
    });
  },
  5000,
  mina.easeInOut
);
Snap.animate(0, loopLength8,
  function(step){ //step function
    circleOutline8.attr({
      path: Snap.path.getSubpath(loop8, 0, step),
      strokeWidth: 15
    });
  },
  5000,
  mina.easeInOut
);
Snap.animate(0, loopLength9,
  function(step){ //step function
    circleOutline9.attr({
      path: Snap.path.getSubpath(loop9, 0, step),
      strokeWidth: 15
    });
  },
  5000,
  mina.easeInOut
);
Snap.animate(0, loopLength10,
  function(step){ //step function
    circleOutline10.attr({
      path: Snap.path.getSubpath(loop10, 0, step),
      strokeWidth: 15
    });
  },
  5000,
  mina.easeInOut
);
Snap.animate(0, loopLength11,
  function(step){ //step function
    circleOutline11.attr({
      path: Snap.path.getSubpath(loop11, 0, step),
      strokeWidth: 15
    });
  },
  5000,
  mina.easeInOut
);
Snap.animate(0, loopLength12,
  function(step){ //step function
    circleOutline12.attr({
      path: Snap.path.getSubpath(loop12, 0, step),
      strokeWidth: 15
    });
  },
  5000,
  mina.easeInOut
);
Snap.animate(0, loopLength13,
  function(step){ //step function
    circleOutline13.attr({
      path: Snap.path.getSubpath(loop13, 0, step),
      strokeWidth: 15
    });
  },
  5000,
  mina.easeInOut
);
Snap.animate(0, loopLength14,
  function(step){ //step function
    circleOutline14.attr({
      path: Snap.path.getSubpath(loop1, 0, step),
      strokeWidth: 15
    });
  },
  5000,
  mina.easeInOut,function(){
    $('svg').hide();
    $('#cakeImg').fadeIn('slow');
  }
);
})
