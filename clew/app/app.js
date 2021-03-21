var header = document.getElementById('body');
var footer = document.getElementById('body');

header.insertAdjacentHTML('afterbegin', '<header id="header" class="header"><div class="wrapper"><div class="nav"><div class="logo"></div><ul class="menu"><li><a href="#" class="icon">&#9776;</a></li><li><a href="index2.html">Организатор</a></li><li><a href="#">Гости</a></li><li><a href="#">Стенды</a></li><li><a href="#">Выход</a></li></ul></div></div></header>');
footer.insertAdjacentHTML('beforeend', '<footer id="footer" class = "footer"><div class="wrapper"><section class="nav social"><div class="logo"></div><div class="menu"><ul  class = ""><li><a href="#" class = "facebook"></a></li><li><a href="#" class = "instagram"></a></li><li><a href="#" class = "pinterest"></a></li><li><a href="#" class = "telegram"></a></li></ul></div></section></div></footer>');
    