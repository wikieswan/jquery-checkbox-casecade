# jquery-checkbox-casecade
input:checkbox casecade --- jquery plug-in

## what is it ?

jquery-checkbox-casecade is a jqery plug-in that help html developers control input:checkbox act well .
Select all input means we should traversal all the checkboxs and ues jqery to make them seleced,eg...
AKa,do this in your codes is very troublesome , which will makes your code ugly . Then jquery-checkbox-casecade
will do all this for you .

## how to use it 

1 include jquery-checkbox-casecade.js in your html file . Please make sure you have included jquery before this.

	<script type="text/javascript" src="jquery.min.js"></script>
	<script type="text/javascript" src="jquery-checkbox-casecade.js"></script>

2 add an spacal attribute ```data-chk``` in html input:checkbox tag 

	<div id="checkboxContent1">
		<label>
			<input type="checkbox" name="name1" data-chk="1"/>all
		</label>
		<label>
			<input type="checkbox" name="name1" data-chk="0"/>item1
		</label>
		<label>
			<input type="checkbox" name="name1" data-chk="0"/>item2
		</label>
	</div>

```data-chk="1"``` means it is the "select all" guy. And ```data-chk="0"``` means it is the "select all"'s items
The "select all" and its items have the same name value.

3 do action ! 

	<script type="text/javascript">	
		$(function () {
			$('#checkboxContent1').casecade();
		})
	</script>

use jquery-checkbox-casecade plug-in just code  ```$('#checkboxContent1').casecade();``` .
 ```#checkboxContent1``` is input:checkbox's parent DOM. If you code does not has this Dom Structure ,ues ```body```instead .

To see more ,you can download and see ths demo file.
