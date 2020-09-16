function ajax01() {
    $.ajax({
        url: address + '/useing/public',
        success(data) {
            var innerT = doT.template($('#test').text());
            $('#list').html(innerT(data));
        }
    });
}
function ajax1() {
    $.ajax({
        url: address + '/useing/public',
        success(data) {
            var innerT = doT.template($('#test1').text());
            $('#list1').html(innerT(data.slice(0, 8)));
        }
    });
}
ajax1();
function ajax2() {
    $.ajax({
        url: address + '/useing/public',
        success(data) {
            var innerT = doT.template($('#test2').text());
            $('#list2').html(innerT(data.slice(0, 8)));
        }
    });
}
function ajax3() {
    $.ajax({
        url: address + '/useing/public',
        success(data) {
            var innerT = doT.template($('#test3').text());
            $('#list3').html(innerT(data.slice(0, 8)));
        }
    });
}
function ajax4() {
    $.ajax({
        url: address + '/useing/public',
        success(data) {
            var innerT = doT.template($('#test4').text());
            $('#list4').html(innerT(data.slice(0, 8)));
        }
    });
}
function ajax02() {
    $.ajax({
        url: address + '/useing/master',
        success(data) {
            var innerT = doT.template($('#test').text());
            $('#list').html(innerT(data.slice(0, data.length - 1)));
        }
    });
}
function ajax11() {
    $.ajax({
        url: address + '/useing/master',
        success(data) {
            var innerT = doT.template($('#test1').text());
            $('#list1').html(innerT(data.slice(0, 8)));
        }
    });
}
$(".header a").eq(0).css({
    'color': '#ff442e',
    'borderBottom': '4px solid #fd5238'
});
$(".try_th a").eq(0).css({
    'color': '#3b3f48',
});
$(".header a").eq(0).on('click', function () {
    $('.apply,.trial,.finish').hide();
    $('.all').show();
    ajax1();
    $(".try_th a").css('color', '#c6c6c6')
    $(".try_th a").eq(0).css({
        'color': '#3b3f48',
    });
});
$(".header a").eq(1).on('click', function () {
    $('.apply,.trial,.finish').hide();
    $('.all').show();
    ajax1();
    $(".try_th a").css('color', '#c6c6c6')
    $(".try_th a").eq(0).css({
        'color': '#3b3f48',
    });
})
$(".header a").each(function (index, item) {
    $(item).on('click', function (e) {
        e = e || window.event;
        e.preventDefault();
        $(".header a").css({
            'color': '#a4a3a9',
            'borderBottom': ''
        });
        $(this).css({
            'color': '#ff442e',
            'borderBottom': '4px solid #fd5238'
        });
    });
});
$(".try_th a").eq(0).on('click', function () {
    $('.apply,.trial,.finish').hide();
    $('.all').show();
    ajax1();
});
$(".try_th a").eq(1).on('click', function () {
    $('.all,.trial,.finish').hide();
    $('.apply').show();
    ajax2();
});
$(".try_th a").eq(2).on('click', function () {
    $('.all,.apply,.finish').hide();
    $('.trial').show();
    ajax3();
});
$(".try_th a").eq(3).on('click', function () {
    $('.all,.trial,.apply').hide();
    $('.finish').show();
    ajax4();
});

$("#more").hover(function () {
    $(this).css('cursor', 'pointer');
})
$('.more1').on('click', function () {
    $('.more1 img').attr("src", './img/login/loading-icon.gif');
    $.ajax({
        url: address + '/useing/public',
        success(data) {
            var innerT = doT.template($('#test1').text());
            $('#list1').html(innerT(data.slice(0, data.length - 1)));
        }
    });
})
$('.more2').on('click', function () {
    $('.more2 img').attr("src", './img/login/loading-icon.gif');
    $.ajax({
        url: address + '/useing/public',
        success(data) {
            var innerT = doT.template($('#test2').text());
            $('#list2').html(innerT(data.slice(0, data.length - 1)));
        }
    });
})
$('.more3').on('click', function () {
    $('.more3 img').attr("src", './img/login/loading-icon.gif');
    $.ajax({
        url: address + '/useing/public',
        success(data) {
            var innerT = doT.template($('#test3').text());
            $('#list3').html(innerT(data.slice(0, data.length - 1)));
        }
    });
})
$('.more4').on('click', function () {
    $('.more4 img').attr("src", './img/login/loading-icon.gif');
    $.ajax({
        url: address + '/useing/public',
        success(data) {
            var innerT = doT.template($('#test4').text());
            $('#list4').html(innerT(data.slice(0, data.length - 1)));
        }
    });
})
$('.try>div').eq(0).on('click', function () {
    $('.try>div').hide();
    $(this).show();
});
$('.try>div').eq(1).on('click', function () {
    $('.try>div').hide();
    $(this).show();
});
$(".header a").eq(1).on('click', function () {
    ajax11();
});
$(".try_th a").each(function (index, item) {
    $(item).on('click', function (e) {
        e = e || window.event;
        e.preventDefault();
        $(".try_th a").css({
            'color': '#c6c6c6',
        });
        $(this).css({
            'color': '#3b3f48',
        });
    });
})
$(".try_th1 a").eq(0).css({
    'color': '#3b3f48',
});
$(".try_th1 a").each(function (index, item) {
    $(item).on('click', function (e) {
        e = e || window.event;
        e.preventDefault();
        $(".try_th a").css({
            'color': '#c6c6c6',
        });
        $(this).css({
            'color': '#3b3f48',
        });
    });
})
function time1(all_data) {
    return new Date(all_data).getTime();
}
function time2() {
    // 当前时间戳
    return +new Date();
}
function day(old_time, new_time) {
    return parseInt((old_time - new_time) / 1000 / 60 / 60 / 24);
}

