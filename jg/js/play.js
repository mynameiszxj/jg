var content_new = document.querySelector('.content_new');
var category = document.querySelector('.category');
var item_th = document.querySelector('.item_th');
item_th.children[0].onclick = function () {
    ajax({
        url: address + "/play/new"
    });
    category.style.display = 'none';
    content_new.style.display = 'block';
}
item_th.children[1].onclick = function () {
    ajax({
        url: address + "/play/hot"
    });
    category.style.display = 'none';
    content_new.style.display = 'block';
}
item_th.children[2].onclick = function () {
    content_new.style.display = 'none';
    category.style.display = 'block';
}
function ajax(options) {
    var defaults = {
        type: 'get',
        url: address + "/play/new",
        async: true,
    }
    Object.assign(defaults, options);
    var xhr = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open(defaults.type, defaults.url, defaults.async);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var str = xhr.responseText;
            // 2. 拿到数据
            var arr = JSON.parse(str);
            // 5. 数据与模板展示先关联            
            var inner = doT.template(document.getElementById('test').innerText);
            document.getElementById('list').innerHTML = inner(arr);
        }
    }
}
ajax();
$(".item_th a").each(function (index, item) {
    $(item).on('click', function (e) {
        e = e || window.event;
        e.preventDefault();
        $(".item_th a").removeClass('b');
        $(this).addClass('b');
    });
})
var timer = null;
$('.more').on('click', function () {
    var height = $("#list").height();
    timer = setInterval(function () {
        height = height + 100;
        if (height >= 2048) {
            clearInterval(timer);
            $('.more').html('没有更多了');
        }
        $("#list").height([height]);
    }, 100)
});