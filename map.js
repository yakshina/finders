(function () {
    var setting = {"height":600,"width":1400,"zoom":20,"queryString":"Ботаническая улица, 70, Санкт-Петербург, Россия","place_id":"ChIJK6VXXjtBlkYRhhQwA0sTnZY","satellite":false,"centerCoord":[59.87498591133088,29.827375199999988],"cid":"0x969d134b03301486","lang":"ru","cityUrl":"/russia/peterhof-36686","cityAnchorText":"Карта [CITY1], Северо-Западный регион, Россия","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"421403"};
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=421403';
    s.async = true;
    s.onload = function (e) {
      window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
  })();