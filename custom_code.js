jQuery(document).ready(function(){
	
	 //alert(123);
	
	jQuery("#edit-field-quantity-und-0-value" ).attr("type","number");
	//alert('done')
    jQuery("#edit-field-year-purchased-und-0-value" ).attr("type","number");
	jQuery("#edit-field-year-purchased-und-0-value" ).attr("type","number");
	jQuery("#edit-field-year-purchased-und-0-value" ).attr("placeholder","2002");
	jQuery("#edit-field-tax-und-0-value" ).attr("type","number");
	
	jQuery("#edit-field-year-purchased-und-0-value").focusout(function(){
        var purcye = jQuery("#edit-field-year-purchased-und-0-value").val();
	    var d = new Date();
        var n = d.getFullYear();
		var fg = n - purcye;
		jQuery("#edit-field-age-und-0-value").val(fg);
    });
	
	
	jQuery('#inventory-node-form #edit-submit').val('Add Inventory Item');
	var delitem = jQuery('#inventory-node-form #edit-delete').val();
	if(delitem =='Delete') {
		jQuery('#inventory-node-form #edit-submit').val('Update Inventory Item');
	}
	
	
	 jQuery('#inventory-node-form #edit-field-total-cost-und-0-value').attr('readonly', 'true'); 
	 jQuery('#inventory-node-form #edit-field-tax-und-0-value').after('<div id="errorpass" class="errordiv"></div>');
	 jQuery("#inventory-node-form #edit-field-tax-und-0-value").change(function(){
			
		var taxrate = jQuery("#inventory-node-form #edit-field-tax-und-0-value").val();
		var ftaxrate = parseInt(taxrate);
		var getquantity = jQuery("#inventory-node-form #edit-field-quantity-und-0-value").val();
        var fquantity = parseInt(getquantity);
          if(isNaN(fquantity)) {
			  jQuery("#inventory-node-form #edit-field-quantity-und-0-value").css("border", "1px solid red");
			  jQuery('#errorpass').html('Kindly Enter Quantity');
			  jQuery("#inventory-node-form #edit-field-tax-und-0-value").val(''); 
			  $(".errordiv").css("background-color", "#FF898D");
			  $(".errordiv").css("border", "1px solid #000;");
			  return false;
		  }
         if(!isNaN(fquantity)) {
			jQuery("#inventory-node-form #edit-field-quantity-und-0-value").css("border", "");
             jQuery('#errorpass').html('');			
		 }
          var getorigcost = jQuery("#inventory-node-form #edit-field-original-cost-und-0-value").val();
		  var forigcost = parseInt(getorigcost);
		  if(isNaN(forigcost)) {
			  jQuery("#inventory-node-form #edit-field-original-cost-und-0-value").css("border", "1px solid red");
			  jQuery('#errorpass').html('Kindly Enter Original Cost');
			  jQuery("#inventory-node-form #edit-field-tax-und-0-value").val(''); 
			  $(".errordiv").css("background-color", "#FF898D");
			  $(".errordiv").css("border", "1px solid #000;");
			  return false;
		  }
         if(!isNaN(forigcost)) {
			jQuery("#inventory-node-form #edit-field-original-cost-und-0-value").css("border", "");
              jQuery('#errorpass').html('');			
		 }
		 
		 var finalvalue = fquantity*forigcost+(ftaxrate/100*(fquantity*forigcost));
		 var finalcurrc = formatCurrency(finalvalue);
		
		 
		
		jQuery("#inventory-node-form #edit-field-total-cost-und-0-value").val(finalcurrc); 
        		 
	 });
	 
	 /*   */
	   jQuery("#inventory-node-form #edit-field-quantity-und-0-value").change(function(){
		   
		 var getquantity = jQuery("#inventory-node-form #edit-field-quantity-und-0-value").val();
         var fquantity = parseInt(getquantity);
		 var taxrate = jQuery("#inventory-node-form #edit-field-tax-und-0-value").val();
		 var ftaxrate = parseInt(taxrate);
		 var getorigcost = jQuery("#inventory-node-form #edit-field-original-cost-und-0-value").val();
		 var forigcost = parseInt(getorigcost);	
		 if(!isNaN(fquantity) && !isNaN(ftaxrate) && !isNaN(forigcost)) {
		var finalvalue = fquantity*forigcost+(ftaxrate/100*(fquantity*forigcost));
		 var finalcurrc = formatCurrency(finalvalue);
		 jQuery("#inventory-node-form #edit-field-total-cost-und-0-value").val(finalcurrc); 
		
		}	
        		 
	   });
	   
	   jQuery("#inventory-node-form #edit-field-quantity-und-0-value").keyup(function(){
		   
		 var getquantity = jQuery("#inventory-node-form #edit-field-quantity-und-0-value").val();
         var fquantity = parseInt(getquantity);
		 var taxrate = jQuery("#inventory-node-form #edit-field-tax-und-0-value").val();
		 var ftaxrate = parseInt(taxrate);
		 var getorigcost = jQuery("#inventory-node-form #edit-field-original-cost-und-0-value").val();
		 var forigcost = parseInt(getorigcost);	
		 if(!isNaN(fquantity) && !isNaN(ftaxrate) && !isNaN(forigcost)) {
			// alert(123);
		 var finalvalue = fquantity*forigcost+(ftaxrate/100*(fquantity*forigcost));
		 var finalvalue = fquantity*forigcost+(ftaxrate/100*(fquantity*forigcost));
		 var finalcurrc = formatCurrency(finalvalue);
		 jQuery("#inventory-node-form #edit-field-total-cost-und-0-value").val(finalcurrc); 
		
		}	
        		 
	   });
	   jQuery("#inventory-node-form #edit-field-original-cost-und-0-value").keyup(function(){
		   
		 var getquantity = jQuery("#inventory-node-form #edit-field-quantity-und-0-value").val();
         var fquantity = parseInt(getquantity);
		 var taxrate = jQuery("#inventory-node-form #edit-field-tax-und-0-value").val();
		 var ftaxrate = parseInt(taxrate);
		 var getorigcost = jQuery("#inventory-node-form #edit-field-original-cost-und-0-value").val();
		 var forigcost = parseInt(getorigcost);	
		 if(!isNaN(fquantity) && !isNaN(ftaxrate) && !isNaN(forigcost)) {
			var finalvalue = fquantity*forigcost+(ftaxrate/100*(fquantity*forigcost));
		 var finalcurrc = formatCurrency(finalvalue);
		 jQuery("#inventory-node-form #edit-field-total-cost-und-0-value").val(finalcurrc); 
		
		}	
        		 
	   });
	    jQuery("#inventory-node-form #edit-field-tax-und-0-value").keyup(function(){
			
		var taxrate = jQuery("#inventory-node-form #edit-field-tax-und-0-value").val();
		var ftaxrate = parseInt(taxrate);
		var getquantity = jQuery("#inventory-node-form #edit-field-quantity-und-0-value").val();
        var fquantity = parseInt(getquantity);
          if(isNaN(fquantity)) {
			  jQuery("#inventory-node-form #edit-field-quantity-und-0-value").css("border", "1px solid red");
			  jQuery('#errorpass').html('Kindly Enter Quantity');
			  jQuery("#inventory-node-form #edit-field-tax-und-0-value").val(''); 
			  $(".errordiv").css("background-color", "#FF898D");
			  $(".errordiv").css("border", "1px solid #000;");
			  return false;
		  }
         if(!isNaN(fquantity)) {
			jQuery("#inventory-node-form #edit-field-quantity-und-0-value").css("border", "");
             jQuery('#errorpass').html('');			
		 }
          var getorigcost = jQuery("#inventory-node-form #edit-field-original-cost-und-0-value").val();
		  var forigcost = parseInt(getorigcost);
		  if(isNaN(forigcost)) {
			  jQuery("#inventory-node-form #edit-field-original-cost-und-0-value").css("border", "1px solid red");
			  jQuery('#errorpass').html('Kindly Enter Original Cost');
			  jQuery("#inventory-node-form #edit-field-tax-und-0-value").val(''); 
			  $(".errordiv").css("background-color", "#FF898D");
			  $(".errordiv").css("border", "1px solid #000;");
			  return false;
		  }
         if(!isNaN(forigcost)) {
			jQuery("#inventory-node-form #edit-field-original-cost-und-0-value").css("border", "");
              jQuery('#errorpass').html('');			
		 }
		 
		var finalvalue = fquantity*forigcost+(ftaxrate/100*(fquantity*forigcost));
		 var finalcurrc = formatCurrency(finalvalue);
		 jQuery("#inventory-node-form #edit-field-total-cost-und-0-value").val(finalcurrc); 
        		 
	 });
	 
	 
	function formatCurrency(total) {
		var neg = false;
		if(total < 0) {
			neg = true;
			total = Math.abs(total);
		}
		return (neg ? "-$" : '$') + parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
	}
	 
	 /*   */
	 
	 
	 
	 
	 
	 
	 
	 jQuery('#inventory-node-form #edit-field-room-und-0-value').attr("list","hidennroomid");
	 jQuery('#inventory-node-form #edit-field-room-und-0-value').after('<datalist id="hidennroomid"></datalist>');
	 var hinndenroomval = jQuery("#roomhiddenval").val();
	 var res = hinndenroomval.split(" ");
	 var length = res.length;
	 //console.log(res);
	 //console.log(length);
	 for (i = 0; i <=length-1; i++) {
		 
		 jQuery("#hidennroomid").append("<option value='" + 
                res[i]+ "'></option>");
		 
		// console.log([res[i]]);
	 }
	 /*
	   default subcategory on inventory list  page
	 */
	  var lengthhh =  jQuery('.form-item-field-category-tid').children('div').length;
	  console.log(lengthhh);
	  jQuery('.form-item-field-category-tid .select-wrapper').after('<div class="select-wrapper"><label></label><select class="form-select simpler-select"><option value="_none" data-parent-value="18">- Please select -</option></select></div>');
	 
		jQuery(document).ajaxComplete(function() {
		  var ght = jQuery('.form-item-field-category-tid .simpler-select').val();
		   if(ght =='_none') {
			  jQuery('.form-item-field-category-tid .select-wrapper').after('<div class="select-wrapper"><label></label><select class="form-select simpler-select"><option value="_none" data-parent-value="18">- Please select -</option></select></div>'); 
		   }
		});
		jQuery(".form-item-field-category-tid .simpler-select").change(function(){
			var ght = jQuery('.form-item-field-category-tid .simpler-select').val();
			 if(ght =='_none') {
			  jQuery('.form-item-field-category-tid .select-wrapper').after('<div class="select-wrapper"><label></label><select class="form-select simpler-select"><option value="_none" data-parent-value="18">- Please select -</option></select></div>'); 
		   }
		});
	
	/*
	    Code End.
	 */
	

});