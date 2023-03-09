(function($){

    //banner swiper
    const swiper = new Swiper('.swiper', {
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        
        autoplay: {
        delay: 4000,
        },
    });

    //sec3 swiper
    var s3 = new Swiper(".s3-swiper", {
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    }
    });

    // sec5 swiper
    var s5 = new Swiper(".s5-swiper", {

    });


   

    //pc버전 menu
    $(".pNav>.menu>li").mouseover(function(){
        $("#header").css("backgroud","rgb(255,255,255)").css("height","250px");
        $(this).find(".sub_menu").stop().slideDown(400);
        $(".pNav>.menu>li:last-child").off("mouseover");
    }).mouseout(function(){
        $(this).find(".sub_menu").stop().slideUp(200),
        $("#header").css("height","auto");
        $(".pNav>.menu>li:last-child").off("mouseout");
    });

    $(window).scroll(function(){
        var sct = $(window).scrollTop();

        if(sct>0){
            $("#header").addClass('scroll');   
            $(".pNav>.menu>li").mouseout(function(){
                $("#header").addClass('scroll');
            }); 

        }else{
            $("#header").removeClass('scroll');

            $(".pNav>.menu>li").mouseover(function(){
                $("#header").addClass('scroll');
            }).mouseout(function(){
                $("#header").removeClass('scroll');
            });
        }

        if(sct > 500){
            $(".top_btn").css("display","block");
        }else{
            $(".top_btn").css("display","none");
        }
    });
   
    $(".top_btn").click(function(){
        $('html').animate({scrollTop:0},600);
    });

    //tap,mo버전 menu
    $("#mBtn").click(function(){

        if($("#ham").hasClass('on')){
            $(".mNav>.menu>li").children('a').removeClass('on');
            $(".mNav>.menu>li").children('ul').stop().slideUp();

            $("#ham").removeClass('on');
            $(".mNav").removeClass('on');
        }else{
            $("#ham").addClass('on');
            $(".mNav").addClass('on');
        }

    });

    //tap,mo submenu
    $(".mNav>.menu>li>a").click(function(e){
        e.preventDefault(); //고유동작 중단

        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(this).siblings('ul').stop().slideUp(500);
        }else{
            $(".mNav>.menu>li").children('a').removeClass('on');
            $(".mNav>.menu>li").children('ul').stop().slideUp();
            $(this).addClass('on');
            $(this).siblings('ul').stop().slideDown(500);
        }
        

    });

    //배경 클릭해도 메뉴 사라지게
    $(".mNav").click(function(){
        $("#mBtn").click();
    });
    
    $(".mNav>.menu").click(function(e){
        e.stopPropagation(); // 상위 엘리먼트 이벤트 중단
    });

    
    //sec4 btn 클릭 시
    $(".sec4 .btn1").click(function(e){
        e.preventDefault();

        $(".sec4 .box1").css("display","block");
        $("#s4_btn1").click(function(){
            $(".sec4 .box1").css("display","none");
        });
    });
    $(".sec4 .btn2").click(function(e){
        e.preventDefault();

        $(".sec4 .box2").css("display","block");
        $("#s4_btn2").click(function(){
            $(".sec4 .box2").css("display","none");
        });
    });
    $(".sec4 .btn3").click(function(e){
        e.preventDefault();

        $(".sec4 .box3").css("display","block");
        $("#s4_btn3").click(function(){
            $(".sec4 .box3").css("display","none");
        });
    });














})(jQuery);