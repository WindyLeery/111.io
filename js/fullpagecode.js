$(function () {
    var animateTime = 1000,
        $group = $('.section-group'),
        $sections = $group.find('>section'),$sectionCount = $sections.length,
        html = ['<ul class=nav_rp>'],
        mFlag = false;
    /*当前所在页标*/
    $group.data('index_flag',0);
    /*初始化页码*/
    for(var i = 0;i < $sectionCount; i ++) {
        html.push('<li><span></span></li>');
    }
    html.push('</ul>');
    var $pagination = $(html.join('')),
        $paginations = $pagination.find('>li');
  
    $pagination.appendTo($('body'));
    $pagination.children('li:eq(0)').children('span').addClass('active');
    $paginations.click(function () {
        if(mFlag) return; //如果此时正在动画中，则不再继续
        var $this = $(this),
            index = $this.index(),
            translateY = index * 100;

        $pagination.children('li').children('span').removeClass('active');
        $this.children('span').addClass('active');

        mFlag = true;
        $group.data('index_flag', index) //储存当前页标
            .css({
                '-webkit-transform':'translateY(-'+ translateY +'%)',
                'transform':'translateY(-'+ translateY +'%)'
            });
        setTimeout(function () {
            mFlag = false;
        }, animateTime);
    });
  
    /*滚轮事件入口,也可以是上一页，写一页的入口*/
    function wheelevent (delta) {
        if(mFlag = false) return;
        delta = delta > 0 ? 1 : -1;
        var index = $group.data('index_flag');
        index -= delta;
        index = index < 0 ? 0 : index = index > ($sectionCount -1 ) ? ($sectionCount -1 ) : index;
        /*触发页码点击事件*/
        $paginations.eq(index).click();
    }
  
    /*绑定滚轮事件*/
    $(document).bind('mousewheel',function (event, delta) {
        wheelevent(delta);
    });
})