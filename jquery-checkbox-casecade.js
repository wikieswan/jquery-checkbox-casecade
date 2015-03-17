/**
casecade -- input checkbox casecade jquery plug-in
*/
$.fn.casecade = function () {
	//this is input:checkbox DOM content , one of their parents
    var $chkContent = $(this);

    //bind change event to input:checkbox's parent . when someone change,we checkout all the seleced input:checkbox and make sure the others act in a right way
    $chkContent.off('change.casecade').on('change.casecade',':checkbox',function(e){ 
    	var target = e.target ? e.target : e.srcElement;
    	casecade(target);
    });

    function casecade(target){
	    var name = $(target).attr('name'),
		    chk =  $(target).data('chk'),
		    checked = target.checked,
		    $chks = $('input[name="'+name+'"][data-chk="0"]'),
		    $theAllOne = $('input[name="'+name+'"][data-chk="1"]'),
		    count = 0;
		if(chk==1){
			for(var i=0,len=$chks.length,e;i<len;i++){
				e = $chks[i];
				e.checked = checked;
			}
		}
		else{
			for(var i=0,len=$chks.length,e;i<len;i++){
				e = $chks[i];
				e.checked?count ++:'';
			}

			$theAllOne[0].checked = count==$chks.length;
		}
	}
};