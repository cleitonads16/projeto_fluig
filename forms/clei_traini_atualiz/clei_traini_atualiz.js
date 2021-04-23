"use strict";
$('#div-panel-3').hide();
function formulario(ativ){
    if(ativ == 1){
        $('#rd_banco').click(function(){
            if(this.value == "sim"){
                $('#div-panel-3').show();
            }else{
                $('#div-panel-3').hide();
            }
        });
    } 
}

