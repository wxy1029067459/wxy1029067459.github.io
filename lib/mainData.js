$(function () {
    $('#btn_sj').on('click', function () {
        $(this).css({
            backgroundColor: '#39a030',
            color: '#fff'
        }).siblings().css({
            backgroundColor: '#fff',
            color: '#666'
        });

        $.ajax({
            type: "get",
            url: "http://study.163.com/webDev/couresByCategory.htm",
            data: {
                pageNo: 1,
                psize: 20,
                type: 10
            },
            dataType: "jsonp",
            success: function (backData) {
                console.log(backData);
            }
        });
        // $.ajax({
        //     type: 'get',
        //     url: 'https://autumnfish.cn/api/cq/page',
        //     data: {
        //         query: '女',
        //         pageNum: 1,
        //         pageSize: 10
        //     },
        //     success: function (backData) {
        //         console.log(backData);
        //     }
        // });
    });

    $('#btn_bc').on('click', function () {
        $(this).css({
            'backgroundColor': '#39a030',
            color: '#fff'
        }).siblings().css({
            backgroundColor: '#fff',
            color: '#666'
        });
    });

    $('ul.lesson li').on('mouseenter', function () {
        var i=0,j=0;
        // console.log($(this).children('div.pic'));
        console.log(($(this).index()));
        var idx = $(this).index();
        if(idx==0 || idx==4 || idx==8 || idx==12 || idx==16){
            i=1;
        }else if(idx==1 || idx==5 || idx==9 || idx==13 || idx==17){
            i=2;
        }else if(idx==2 || idx==6 || idx==10 || idx==14 || idx==18){
            i=3;
        }else if(idx==3 || idx==7 || idx==11 || idx==15 || idx==19){
            i=4;
        }
        if(idx<4){
            j=0;
        }else if(idx>=4 && idx <8){
            j=1;
        }else if(idx>=8 && idx <12){
            j=2;
        }else if(idx>=12 && idx <16){
            j=3;
        }else if(idx>=16 && idx <20){
            j=4;
        }
        var x = i * 245;
        var y = j*248 + 75;
        $('.xuanFuKuang').stop(true,false);
        $('.xuanFuKuang').show().css({
            width:0,
            left:x,
            top:y
        });
        $('.xuanFuKuang').animate({
            width:470
            },300,'linear');
        });
        $('ul.lesson li').on('mouseleave', function () {
            $('.xuanFuKuang').stop(true,false);
            $('.xuanFuKuang').animate({
                width:0
                },300,'linear',function(){
                    $('.xuanFuKuang').hide();
                });
        });
        //点击的数字显示为绿色
        $('ul.foot .num').on('click', function () {
            $(this).css({
                color: 'green',
                fontWeight: 'bold'
            }).siblings('.num').css({
                color: '#333',
                fontWeight: 'normal'
            });
        });
    });