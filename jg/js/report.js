$(document).ready(function () {
    // $(".item_th a").eq(0).css({
    //     'color': '#ff442e',
    //     'borderBottom': '4px solid #fd5238'
    // });
    $(".item_th a").each(function (index, item) {
        $(item).on('click', function (e) {
            e = e || window.event;
            e.preventDefault();
            // $(".item_th a").css({
            //     'color': '#a4a3a9',
            //     'borderBottom': ''
            // });
            // $(this).css({
            //     'color': '#ff442e',
            //     'borderBottom': '4px solid #fd5238'
            // });
            $(".item_th a").removeClass();
            $(this).toggleClass('b');
        });
    })
    $(".item_th a").eq(0).on('click', function () {
        ajax({
            url: address + "/guid/new"
        });
    });
    $(".item_th a").eq(1).on('click', function () {
        ajax({
            url: address + "/guid/hot"
        });
    });
    var timer = null;
    $('.more').on('click', function () {
        $('.more img').attr("src", './img/login/loading-icon.gif');
        var height = $("#list").height();
        timer = setInterval(function () {
            height = height + 100;
            if (height >= 1080) {
                clearInterval(timer);
                $('.more').html('没有更多了');
            }
            $("#list").height([height]);
        }, 1000)
    });
})
function ajax(options) {
    var defaults = {
        type: 'get',
        url: address + "/guid/new",
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
