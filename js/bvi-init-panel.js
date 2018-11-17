
$(document).ready(function($) {

    // if (bvi['bvi_setting'].BviPanelActive == 1) {
    //     $().bvi('Active', bvi['bvi_setting']);
    // } else {
    //     $('.bvi-panel-open').bvi('Init', bvi['bvi_setting']);
    // }

    // $('.bvi-panel-open').bvi('Init');
});


$(document).ready(function($) {
    $('.bvi-panel-open').bvi('Init',
        {
            "BviPanel" : "1",
            "BviPanelBg" : "white",
            "BviPanelFontSize" : "12",
            "BviPanelLetterSpacing" : "normal",
            "BviPanelLineHeight" : "normal",
            "BviPanelImg" : "1",
            "BviPanelImgXY" : "1",
            "BviPanelReload" : "0",
            "BviCloseClassAndId" : ".hide-screen-fixed",
            "BviFixPanel" : "1",
            "BviPlay" : "1"
        });
});