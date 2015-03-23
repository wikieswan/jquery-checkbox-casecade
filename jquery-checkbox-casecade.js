/**
casecade -- input checkbox casecade jquery plug-in
wikies.wan
*/
$.fn.casecade = function () {
	//this is input:checkbox DOM content , one of their parents
    var $chkContent = $(this);

    //bind change event to input:checkbox's parent . when someone change,we checkout all the seleced input:checkbox and make sure the others act in a right way
    $chkContent.off('change.casecade').on('change.casecade',':checkbox',function(e){ 
    	var target = e.target ? e.target : e.srcElement;
    	eventDo(target);
    });

    
	function eventDo(target){
		var name = $(target).attr('name'),
		    id = $(target).data('id'),
		    parent = $(target).data('parent'),
		    checked = target.checked,

		    $chks = $('input[name="'+name+'"]'), //all checkbox		    
		    $rootChk = $('input[name="'+name+'"][data-parent="-1"]'), // root checkbox
		    $parentChk = $('input[name="'+name+'"][data-id="'+parent+'"]'), // target's parent checkbox
		    $brotherChks = $('input[name="'+name+'"][data-parent="'+parent+'"]'), // target's brothers checkbox
		    $childrenChks = $('input[name="'+name+'"][data-parent="'+id+'"]'), // target's brothers checkbox
		    $offspring, //target's all offspring
		    count = 0;
		if(parent===0){//reverse select
			for(var i=0,len=$chks.length,e,e,eId,eChildren;i<len;i++){
				e = $chks[i];
				eId = $(e).data('id');
				$eChildren = $('input[name="'+name+'"][data-parent="'+eId+'"]');
				if($eChildren.length===0){
					$(e).click();
				}
			}
			return ;
		}


		if($childrenChks.length===0){// leaf node change event
			if(parent===-1){
				return ;
			}
			for(var i=0,len=$brotherChks.length,e;i<len;i++){ // for-each it's brothers ,make sure it's parent is checked or not
				e = $brotherChks[i];
				e.checked?count ++:'';
			}
			
			$parentChk[0].checked = count===$brotherChks.length;
			casecadeDo(target);
		}
		else{//not leaf node change event
			$offspring = getOffspring(target,[])
			for(var i=0,len=$offspring.length,e;i<len;i++){
				e = $offspring[i];
				e.checked = checked;
			}

			casecadeDo(target);
		}

		
	}
	function casecadeDo(target){
		var name = $(target).attr('name'),
		    id = $(target).data('id'),
		    parent = $(target).data('parent'),
		    checked = target.checked,
		    $parentChk = $('input[name="'+name+'"][data-id="'+parent+'"]'), // target's parent checkbox
		    $brotherChks = $('input[name="'+name+'"][data-parent="'+parent+'"]'), // target's brothers checkbox
		    count = 0;
		
		if(parent==-1){
			return ;
		}
		else{
			target = $parentChk[0];
			casecadeDo(target);
		}

		for(var i=0,len=$brotherChks.length,e;i<len;i++){ // for-each it's brothers ,make sure it's parent is checked or not
			e = $brotherChks[i];
			e.checked?count ++:'';
		}
		
		$parentChk[0].checked = count===$brotherChks.length;		
		
	}

	function getOffspring(target,obj){
		var name = $(target).attr('name'),
		    id = $(target).data('id'),
		    parent = $(target).data('parent'),
		    checked = target.checked,
		    $childrenChks = $('input[name="'+name+'"][data-parent="'+id+'"]'); 
		
		if($childrenChks.length===0){
			return obj
		}
		else {
			var result;
			for(var i=0,len=$childrenChks.length,e;i<len;i++){
				e = $childrenChks[i];
				target = e;
				obj.push(target)
				result = getOffspring(target,obj)
			}
			return result;
		}
		
	}

};