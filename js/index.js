
    // 初始化一个jsPlumb实例
    var instance = jsPlumb.getInstance(cfg.initJsPlumb);
    /*instance.importDefaults({
      ConnectionsDetachable:true,
      ReattachConnections:true
    });*/

    /*instance.registerConnectionType("basic", { anchor:"Continuous", connector:"StateMachine" });*/

    // 获取连接id 禁止连接自己
    instance.bind("connection", function (connInfo, originalEvent) {
      if (connInfo.connection.sourceId == connInfo.connection.targetId){
        instance.detach(connInfo.connection);
        alert("不能连接自己！");
      }else{
        alert("连接"+connInfo.connection.sourceId+"==="+connInfo.connection.targetId);
      }
    });
    //删除连接线
    instance.bind("click", function (c) {
      instance.detach(c);
    });

    window.jsp = instance
    console.log(window.jsp)

    // 初始化右边功能
    var element_str = _.template(cfg.initRightFu,cfg.rightData);
    $("#rightMenu").append(element_str);

    //右边功能拖拽到容器 container 设置
    $("#rightMenu > li:lt(6)").draggable({
      helper: "clone",
      scope: "plant"
    });
    $("#container").droppable({
      scope: "plant",
      drop: function(event, ui){
        cfg.createModel(ui, $(this));
      }
    });

  /*测试右键菜单*/
  $('#update').click(function () {
    $('#rightClickMenu').css(cfg.display_hide)
    console.log($('#' + cfg.modelCunId))
  })

  /*标签弹框关闭 close*/
  $('.popUpClose').on('click', function(){
    $('.popUpBg').css(cfg.display_hide)
    $('.popUp').css(cfg.display_hide)
  })
  /*选择弹框确定事件*/
  $('#popUp_submit').on('click', function(){
    var text = $('#tagSelection').text()
    $('#' + cfg.cunId).children('h4').children('span').text(text)
    $('.popUpBg').css(cfg.display_hide)
    $('.popUp').css(cfg.display_hide)
  })

  /*弹框table初始化*/
    var popUpTable = _.template(cfg.popUpTableElement,cfg.popUpTableData)
    $("#popUpButton_table > tbody").append(popUpTable);
    // $('#popUpButton_table').treetable({expandAll:false})  // 设置全部展开
    $("#popUpButton_table").treetable({expandable: true});



