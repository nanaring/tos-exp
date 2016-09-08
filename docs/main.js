(function($){
  'use strict';

  var self = this;

  var baseLvs = [0,8,272,462,702,990,1326,1691,2200,2640,3120,3640,4200,4800,5406,6084,1755,4510,7138,9765,12502,15288,18156,21147,24696,28014,31380,34844,38464,42174,46036,49980,54750,58950,63294,67703,72252,76941,81685,86565,92610,97796,103024,108384,113778,119400,7752,19635,30174,40221,50172,59890,69690,79560,89369,100162,110236,120582,130944,141310,151932,162676,173672,185982,197259,208637,220255,231966,243764,255794,268056,282048,294670,307360,320274,333248,346442,359856,373320,389250,403025,417012,431211,445622,460062,474895,20757,52060,79296,104954,129556,153648,177400,200990,225295,248814,272118,295400,318861,342280,365645,389382,414918,438816,462848,487008,511290,535921,560428,585280,612796,637928,663390,688940,714818,740776,766804,793156,822784,849592,876460,903640,931128,958664,986508,1014388,1046410,1074700,1103290,1132184,1161372,1190580,1220084,1249600,1283832,1314000,97312,243312,369224,486600,599168,710648,817540,922676,1026608,1129304,1231336,1332352,1433584,1538840,1639440,1739864,1840408,1940728,2041468,2141940,2242800,2350624,2452136,2553976,2655808,2758304,2860752,2963496,3066864,3179432,3283936,3388320,3493664,3598864,3705024,3811376,3918296,4036232,4144128,4252560,4361536,4471024,4581072,4691216,4802288,4926096,5038368,5151152,5264032,5377776,220800,550736,836336,1100528,1352560,1595920,1833296,2065456,2294336,2519872,2749328,2970960,3190752,3409440,3627056,3843504,4059200,4274544,4499744,4714736,4929264,5143744,5358192,5572992,5787232,6002256,6230768,6446368,6662176,6878240,7094560,7311552,7528704,7746560,7981408,8200864,8420000,8640192,8860992,9082336,9304224,9526720,9769600,9993504,10218400,10443776,10670144,10896512,11124320,11375104,704736,1756064,2657696,3494048,4289440,5056768,5802432,6544320,7261056,7967328,8664480,9353952,10036736,10714176,11387328,12078400,12745472,13408832,14070272,14729024,15386304,16042368,16696704,17381696,18035648,18688896,19341824,19994304,20647168,21299392,21952448,22644928,23299008,23954176,24609216,25265344,25921984,26579456,27237952,27944192,28605440,29267584,29931136,30595456,31261184,31927680,32649984,33320064,33991936,34665088,852096,2121728,3209088,4215936,5180672,6103296,6998656,7873280,8729984,9572864,10403968,11224704,12055424,12860928,13660544,14453888,0];
  var clsLvs = [0,58,209,386,578,780,993,1213,1440,1673,1913,2156,2405,2658,2915,0,2724,9795,18029,26976,36459,46379,56668,67281,78181,89342,100741,112360,124182,136196,0,16004,57532,105896,158451,214155,272418,332856,395193,459220,524776,591731,659976,729420,799985,0,57976,208412,383617,573997,775787,986852,1205790,1431606,1663550,1901032,2143579,2390800,2642365,2897993,0,245833,883722,1626630,2433890,3289531,4184497,5112853,6070368,7053866,8060850,9089312,10137584,11204288,12288216,0,535630,1925481,3544152,5303036,7167333,9117312,11140044,13226312,15369180,17563232,19804080,22088096,24412240,26773952,0,1647370,5921956,10900296,16309870,22043652,28040952,34262008,40678472,47269040,54016992,60908880,67933504,75081664,82345216,0];
  var expCards = [ null,
    { base: 500, class: 385, min: 1 },
    { base: 2686, class: 2668, min: 5 },
    { base: 8442, class: 6500, min: 20 },
    { base: 22860, class: 17602, min: 40 },
    { base: 24571, class: 18919, min: 60 },
    { base: 60312, class: 46440, min: 70 },
    { base: 142150, class: 109455, min: 100 },
    { base: 209334, class: 161187, min: 120 },
    { base: 237943, class: 183216, min: 150 },
    { base: 541023, class: 416587, min: 180 },
    { base: 985061, class: 758496, min: 210 },
    { base: 2420348, class: 1863583, min: 250 },
    { base: 3630357, class: 2795374, min: 275 },
    { base: 13189741, class: 10156100, min: 210 },
    { base: 31212626, class: 24033722, min: 250 },
  ];

  var sum = 0;
  var baseTotals = [];
  baseLvs.forEach(function(n){
    sum += n;
    baseTotals.push(sum);
  })
  baseLvs.totals = baseTotals;

  var clsTotals = [];
  sum = 0;
  clsLvs.forEach(function(n){
    sum += n;
    clsTotals.push(sum);
  });
  clsLvs.totals = clsTotals;

  $(document).ready(function(){

    // var clipboard = new Clipboard('.clip_button');

    var ccrank = document.getElementById('ccrank');
    for(var i=1; i<=7; i++) {
      var el = document.createElement('option');
      el.setAttribute('value', i);
      el.appendChild(document.createTextNode('R'+i));
      ccrank.appendChild(el);
    }

    var cclv = document.getElementById('cclv');
    for(var i=1; i<=15; i++) {
      var el = document.createElement('option');
      el.setAttribute('value', i);
      el.appendChild(document.createTextNode(i));
      cclv.appendChild(el);
    }

    var cardHolder = document.getElementById('card_holder');
    for(var i=1; i<=15; i++) {
      var el = document.createElement('input');
      el.setAttribute('id', 'card'+i);
      el.setAttribute('class', 'card');
      el.setAttribute('type', 'number');
      el.setAttribute('min', '0');
      el.setAttribute('max', '9999');
      el.setAttribute('step', '1');
      el.setAttribute('placeHolder', 'Lv'+i);
      el.setAttribute('style', 'width: 3em;');
      cardHolder.appendChild(el);
    }

    $('#cblv,#cbpar,#ccrank,#cclv,#ccpar,.card').change(recalc);

    $('#update_btn').click(function(){
      try {
        recalc();
        location.hash = '#!'+saveData();
      } catch(e) {
        console.log(e);
        alert('URL生成に失敗しました');
      }
    });

    $('#load_btn').click(function(){
      loadData($('#load_data').val());
    })

    window.addEventListener('popstate', function(event){
      loadData(location.hash);
    });
    if (location.hash.startsWith('#!')) {
      loadData(location.hash);
    }
  });

  function levelStat(table, level, parcent) {
    var next = table[level];
    var total = table.totals[level-1];
    var exp = Math.floor(next * parcent / 100);
    return { level: level, parcent: parcent, next: next - exp, total: total + exp, exp: exp };
  }

  function expToLevel(table, total) {
    var totals = table.totals;
    for(var i=1; i<totals.length; i++){
      if(totals[i] > total){
        var exp = total - totals[i-1];
        var next = table[i];
        var parcent = Math.floor(1000 * exp / next + 0.5)/10;
        return { level: i, parcent: parcent, next: next - exp, total: total, exp: exp };
      }
    }
    var maxLv = totals.length-1;
    return { level: maxLv, parcent: 0, next: 0, total: totals[maxLv-1], exp: 0 };
  }

  function comma(n) {
    var s = (''+n).split('').reverse();
    var r = [];
    for(var i=0; i<s.length; i+=3) {
      r.unshift(s.slice(i, i+3).reverse().join(''));
    }
    return r.join(',');
  }

  function recalc() {

    var stats = {};
    var errors = [];

    var cblv = Math.max(Math.min($('#cblv').val(), baseLvs.length-1), 1);
    var cbpar = Math.max(Math.min($('#cbpar').val(), 100), 0);
    stats.base = levelStat(baseLvs, cblv, cbpar);

    var ccrank = $('#ccrank').val()|0;
    var cclv = $('#cclv').val()|0;
    var ccpar = Math.max(Math.min($('#ccpar').val(), 100), 0);
    stats.class = levelStat(clsLvs, ((ccrank-1)*15 + cclv), ccpar);

    for(var i=1; i<expCards.length; i++){
      var card = expCards[i];
      var amount = $('#card'+i).val() |0;
      if(amount){
        if(stats.base.level < card.min){
          errors.push('※ LV'+i+' EXP CARD は Lv'+card.min+' 以上で使用できます (あと '+(card.min-stats.base.level)+')');
        }
        stats.base.total += amount * card.base;
        stats.class.total += amount * card.class;
        stats.base = expToLevel(baseLvs, stats.base.total);
      }
    }
    if(errors.length){
      $('#alert').css('display', 'block');
      $('#alert').text(errors[0]);
    }else{
      $('#alert').css('display', 'none');
    }
    stats.base = expToLevel(baseLvs, stats.base.total);
    stats.class = expToLevel(clsLvs, stats.class.total);

    $('#rblv').val(stats.base.level);
    $('#rbpar').val(stats.base.parcent);
    $('#rbnext').val(comma(stats.base.next));
    $('#rbtotal').val(comma(stats.base.total));

    $('#rcrank').val('R'+(Math.floor(1 + stats.class.level / 15)));
    $('#rclv').val(stats.class.level % 15);
    $('#rcpar').val(stats.class.parcent);
    $('#rcnext').val(comma(stats.class.next));
    $('#rctotal').val(comma(stats.class.total));

    var savedata = saveData();
    $('#saved_data').val(savedata);
  }

  function saveData() {
    var savedata = [
      Math.max(Math.min($('#cblv').val(), baseLvs.length-1), 1)-1,
      Math.max(Math.min($('#cbpar').val(), 100), 0)*10,
      ($('#ccrank').val()|0)-1,
      ($('#cclv').val()|0)-1,
      Math.max(Math.min($('#ccpar').val(), 100), 0)*10,
    ];
    for(var i=1; i<expCards.length; i++) {
      savedata.push($('#card'+i).val()|0);
    }
    var o = savedata.reverse();
    while(o.length > 0 && o[0] == 0){
      o.shift();
    }
    savedata = o.reverse();

    var r = encode(savedata);
    var q = decode(r);
    if(JSON.stringify(savedata) != JSON.stringify(q)){
      console.log('SAVED: '+r, savedata, q);
      throw new Error('BAD SAVE DATA');
    }
    return r;
  }

  function loadData(data) {
    if (data.startsWith('#!')) {
      data = data.substr(2);
    }
    if(data.length > 1){
      try {
        var q = decode(data);
        q.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
        $('#cblv').val(q.shift()+1);
        $('#cbpar').val(q.shift()/10);
        $('#ccrank').val(q.shift()+1);
        $('#cclv').val(q.shift()+1);
        $('#ccpar').val(q.shift()/10);
        for(var i=1; i<expCards.length; i++) {
          var n = q.shift();
          if (n > 0) {} else { n = '' }
          $('#card'+i).val(n);
        }
        recalc();
        var newHash = '#!'+saveData();
        if(location.hash != newHash){
          location.hash = newHash;
        }
      } catch(e) {
        console.log(e);
        alert('このセーブデータは壊れています');
      }
    }
  }

  var encodeTab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

  function encode(data) {
    var s = [].concat(data);
    var r = [];
    s.unshift(s.length);
    s.forEach(function(n) {
      if (n < 0x29) {
        r.push(encodeTab[n]);
      } else if (n < 0x400) {
        var n0 = 0x20 + Math.floor(n/0x40), n1 = n%0x40;
        r.push(encodeTab[n0], encodeTab[n1]);
      } else if (n < 0x8000) {
        var n0 = 0x30 + Math.floor(n/0x1000), n1 = Math.floor((n/0x40)%0x40), n2 = n%0x40;
        r.push(encodeTab[n0], encodeTab[n1], encodeTab[n2]);
      } else {
        r.push('*');
      }
    });
    var sum = 0;
    r.forEach(function(n) {
      var c = encodeTab.indexOf(n);
      sum = (sum*2 + c + Math.floor(sum/32))&63;
    });
    r.push(encodeTab[sum]);
    return (r.join(''));
  }

  function decode(src) {
    var s = (''+src).split('');
    var expected = encodeTab.indexOf(s.pop());
    var sum = 0;
    s.forEach(function(n) {
      var c = encodeTab.indexOf(n);
      if(c < 0) {
        throw new Error('Unexpected Character Sequence');
      }
      sum = (sum*2 + c + Math.floor(sum/32))&63;
    });
    if (expected != sum) {
      throw new Error('Checksum Mismatch');
    }
    var l = encodeTab.indexOf(s.shift());
    var r = [];
    for(var i=0; i<l; i++) {
      var c = encodeTab.indexOf(s.shift());
      if (c < 0x20) {
        r.push(c);
      } else if (c < 0x30) {
        r.push((c-0x20)*0x40 + encodeTab.indexOf(s.shift()));
      }else if (c < 0x38) {
        var n = (c-0x30)*0x1000 + encodeTab.indexOf(s.shift())*0x40;
        n += encodeTab.indexOf(s.shift());
        r.push(n);
      } else {
        r.push(null);
      }
    }
    return r;
  }

})(jQuery);
