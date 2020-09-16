function ajax1() {
    $.ajax({
        url: address + '/report/new',
        success(data) {
            var innerT = doT.template($('#test1').text());
            // 页面与数据的连接
            $('#list1').html(innerT(data.slice(0, 6)));
        }
    });
}
ajax1();
function ajax2() {
    $.ajax({
        url: address + '/report/hot',
        success(data) {
            var innerT = doT.template($('#test2').text());
            // 页面与数据的连接
            $('#list2').html(innerT(data.slice(0, 6)));
        }
    });
}
$('.title span').on('click', function () {
    $('.title span').removeClass('zx');
    $(this).toggleClass('zx');
});
$('.title span').eq(0).on('click', function () {
    $('.new_hot').hide();
    $('.new_max').show();
    ajax1();
});
$('.title span').eq(1).on('click', function () {
    $('.new_hot').show();
    $('.new_max').hide();
    ajax2();
})
$('.more1').on('click', function () {
    $('.more1 img').attr("src", './img/login/loading-icon.gif');
    $.ajax({
        url: address + '/report/new',
        success(data) {
            var innerT = doT.template($('#test1').text());
            // 页面与数据的连接
            $('#list1').html(innerT(data));
        }
    });
})
$(".more1,.more2").hover(function () {
    $(this).css('cursor', 'pointer');
})
$('.more2').on('click', function () {
    $('.more2 img').attr("src", './img/login/loading-icon.gif');
    $.ajax({
        url: address + '/report/hot',
        success(data) {
            console.log(data.slice(6, data.length - 1));
            var innerT = doT.template($('#test2').text());
            // 页面与数据的连接
            $('#list2').html(innerT(data));
        }
    });
})

