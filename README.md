# jquery-checkbox-casecade
input:checkbox casecade --- jquery plug-in

## what is it ?

jquery-checkbox-casecade is a jqery plug-in that help html developers control input:checkbox act well .
Select all input means we should traversal all the checkboxs and ues jqery to make them seleced,eg...
AKa,do this in your codes is very troublesome , which will makes your code ugly . Then jquery-checkbox-casecade
will do all this for you .

## how to use it 

###1 include jquery-checkbox-casecade.js in your html file . 

Please make sure you have included jquery before this.

	<script type="text/javascript" src="jquery.min.js"></script>
	<script type="text/javascript" src="jquery-checkbox-casecade.js"></script>

###2 add an spacial attribute ```data-id``` ```data-parent``` in html input:checkbox tag 

	<div id="checkboxContent1">
		<label>
			<input type="checkbox" name="name1" data-id="p0" data-parent="-1"/>all-0</label>
		<label>
			<input type="checkbox" name="name1" data-id="p1" data-parent="0"/>reverse-select</label>
		<br>
		<label>
			<input type="checkbox" name="name1" data-id="p10" data-parent="p0"/>p0-10</label>
		<label>
			<input type="checkbox" name="name1" data-id="p11" data-parent="p0"/>p0-11</label>
		<br>
		<label>
			<input type="checkbox" name="name1" data-id="p20" data-parent="p10"/>p10-20</label>
		<label>
			<input type="checkbox" name="name1" data-id="p21" data-parent="p10"/>p10-21</label>
	</div>

Every input:checkbox has ```data-id``` and ```data-parent``` attr;```data-id``` means its own ID----only one;```data-parent``` means its parent's ID.Whit the two att, you can find every checkbox in the tree.

```data-parent="-1"``` means it is the root selection.  ```data-parent="0"``` means it is reverse selecttion  


###3 do action ! 

	<script type="text/javascript">	
		$(function () {
			$('#checkboxContent1').casecade();
		})
	</script>

use jquery-checkbox-casecade plug-in just code  ```$('#checkboxContent1').casecade();``` .
 ```#checkboxContent1``` is input:checkbox's parent DOM. If you code does not has this Dom Structure ,use ```body```instead .

To see more ,you can download and see the demo file.
