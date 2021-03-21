var header = document.getElementById('body');
var footer = document.getElementById('body');

header.insertAdjacentHTML('afterbegin', '<header id="header" class="header"><div class="wrapper"><div class="nav"><div class="logo"></div><ul class="menu"><li><a href="#" class="icon">&#9776;</a></li><li><a href="org.html">Организатор</a></li><li><a href="guest.html">Гости</a></li><li><a href="stends.html">Стенды</a></li><li><a href="#">Математическая модель</a></li></ul></div></div></header>');
footer.insertAdjacentHTML('beforeend', '<footer id="footer" class = "footer"><div class="wrapper"><section class="nav social"><div class="logo"></div><div class="menu"><ul  class = ""><li><a href="#" class = "facebook"></a></li><li><a href="#" class = "instagram"></a></li><li><a href="#" class = "pinterest"></a></li><li><a href="#" class = "telegram"></a></li></ul></div></section></div></footer>');
    