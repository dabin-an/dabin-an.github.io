 $(function( ){
        $('#pc ul.menu>li,  .sub-box').mouseover(function( ){
                $('.sub').stop( ).slideDown( ) ; });
        $('.sub-box').mouseout(function( ){
                 $('.sub').stop( ).slideUp( ) ; });        


        // 버튼과메뉴
        $('#bt').click(
            function(){
                $('#mo nav').slideToggle();
                $('.mo-sub').hide();
            });
        $('.mo-menuul>li ').click(
            function(){
                $(this).children('.mo-sub').slideToggle();
                $(this).siblings('li').children('.mo-sub').hide();
            });



});