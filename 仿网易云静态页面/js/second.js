var index=0;

// 获取所有li元素
var li=$(".banner ul li");  

//获得播放器图片
var img=$(".music .m_img img");

//获得
var text=$(".music .m_text");

// 
var prev=$(".music .m_btn .m_prev");
// 
var play=$(".music .m_btn .m_play");
var next=$(".music .m_btn .m_next");

var mp3=$(".music .m_mp3");
// 获取歌曲

//false 表示播放音乐
var flag=false;
var close=true;

// 获取点击的li索引
li.click(function(){
    // console.log($(this).index())
    index=$(this).index();
    // 获取当前点击的li索引
    show();
    
});

function show(){
    // 改变背景
    change_bg(index+1);
    //改变播放器文本
    change_img_text(index+1);
    //改变播放器按钮
    change_btn_title();
    //图片旋转
    img_rotate();
    //音乐播放
    play_mp3();
}

// 更换背景
function change_bg(idx){
    $("body").css({
        "background":"url(image/main/"+idx+".jpg) no-repeat",
        "background-size": "cover",
    })
}

// 这里是更换播放器显示图片和标题
function change_img_text(idx){
    img.attr("src","image/main/"+idx+".jpg");
    text.html(li.eq(index).attr("title"))
}

// 改变播放器播放的样式
function change_btn_title(){
    play.removeClass("m_play"); //移除原有的播放样式
    play.addClass("m_pause");
    play.attr("title","暂停");
}

// 让图片开始旋转
function img_rotate(){
    // 防止全部都旋转
    li.children().removeClass("img_rotate");
    li.eq(index).children().addClass("img_rotate");
}
// 让音乐播放
function play_mp3(){
    mp3.attr("src",li.eq(index).attr("datasrc"));
    mp3.get(0).play();  
    // mp3.play();
    flag =true; //歌曲正在播放
}

play.click(function(){
    if(flag){
        mp3.get(0).pause();
        li.eq(index).children().removeClass("img_rotate");
        play.removeClass("m_pause").addClass("m_play").attr("title","播放");
        flag=false;
    }else{
        mp3.get(0).play();
        li.eq(index).children().addClass("img_rotate");
        play.removeClass("m_play").addClass("m_pause").attr("title","暂停");
        flag=true;
        change_bg(index+1); //如果是第一次进入，而且直接点播放按钮的话背景不会更换，所以要这一句处理这个bug
    }
})

// 上一首
prev.click(function(){
    index--;
    if(index<0){
        index=li.length-1;
    }
    show();
})

next.click(function(){
    index++;
    if(index>li.length-1)
    {
        index=0;
    }
    show();
})

$(".m_close").click(function(){
    if(close){
        $(this).addClass("m_open");
        $(".music").animate({"left":"-490px"},800)
        close=false;
    }
    else{
        $(this).removeClass("m_open");
        $(".music").animate({"left":"0px"},800)
        close=true;
    }
})