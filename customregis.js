(function ($) {
	
	$(document).ready(function(){
     
	    var fv = localStorage.getItem("srteetaddr");
		$("#edit-field-street-address-ph-und-0-value").val(fv);
		
	    $('#edit-field-expiry-date-und-0-value-datepicker-popup-0').attr('readonly', 'true'); 
		$('#edit-field-expiry-date-und-0-value-datepicker-popup-0').val('');
		$("#edit-field-effective-date-und-0-value-datepicker-popup-1").change(function(){
			
			var dat = $("#edit-field-effective-date-und-0-value-datepicker-popup-1").val();
			//var myDate = new Date(dat);
			var res = dat.split("/");
			var df = parseInt(res[2])+1;
			var str1= res[0]+'/'+ res[1]+'/'+df;
			$("#edit-field-expiry-date-und-0-value-datepicker-popup-0").val(str1);
		      
		});
	  $("#edit-next").click(function() {
		  var pass = $("#edit-field-password-und-0-value").val();
	      var repass = $("#edit-field-re-enter-password-und-0-value").val();
		  if(repass != pass) {
			 $('#edit-field-re-enter-password').after('<div id="errorpass" class="errordiv">Password field and Re-Enter Password not match</div>');
			 $("#edit-field-re-enter-password-und-0-value").css("border", "5px solid red");
			 $(".errordiv").css("background-color", "#FF898D");
			 $(".errordiv").css("border", "1px solid #000;");
			 return false;  
		  } 
		  if(repass == pass) {
			 $('div').remove(".errordiv");
			 $("#edit-field-re-enter-password-und-0-value").css("border", ""); 
		  }
		   var df = $("#edit-field-street-address-mi-und-0-value").val();
		   
		   if(df !='') {
			  localStorage.setItem("srteetaddr", df);
			  
		   }
		 
		  
	  });
	  
	  
	  /*
		   ***************************************************************************************************
		   Disable save button
		   *************************************************************************************************** */
		   var nextVal = $('#edit-next').val();
		   //console.log(nextVal);
		   if(nextVal == 'Next') {
			 $("#edit-submit").hide();   
		   }
		
		/*
		  *******************************************************************************************************
		*/
	  
	  
    
	});
	
	
	
	

}(jQuery));