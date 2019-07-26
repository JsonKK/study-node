/**
 * name
 * @author lsujie@linewell.com
 * @since xxxx/xx/xx
 */
;
define(function (require, exports, module) {

    // 远程操作
    var remoteOperates = {

    };

    // 本地操作
    var localOperates = {

    };

    // 私有方法
    var privateMethods = {

    };

    /**
     * 初始化视图
     */
    var _initView = function () {

    };

    /**
     * 初始化数据
     */
    var _initData = function () {

    };

    /**
     * 初始化事件
     */
    var _initEvent = function () { 
        
        //异步提交表单
        $('#sub-form').on('click',function(){
            var $form = $('#form');
            var data = {},type,$obj;
            // $form.find('input').each(function(i,o){
            //     $obj = $(o);
            //     type = $obj.attr('type');
            //     switch(type){
            //         case 'text':
            //         case 'file':
            //             var name = $obj.attr('name');
            //             var value = $obj.val();
            //             break;
            //     }
            // });
            var form = new FormData(document.getElementById("form"))
            $.ajax({
                type: 'POST',
                // dataType: 'html',
                contentType: false,
                processData: false,
                url: '/sub-form',
                data: form,
                success: function (result) {
                    if(result && result.title){
                        alert(result.title);
                    }
                    else{
                        alert(result);
                    }
                   
                },
                error: function(data) {
                }
            });
        });
    };

    // 初始化
    var _init = function () {

        // 初始化视图
        _initView();

        // 初始化数据
        _initData();
        // 初始化事件
        _initEvent();
    };

    $(function () {
        _init();
    });
});