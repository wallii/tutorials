(function ($) {
	
	$(document).ready(function(){
     
	    var fv = localStorage.getItem("srteetaddr");
		$("#edit-field-street-address-ph-und-0-value").val(fv);
		
		 var cityaddrv = localStorage.getItem("cityaddr");
	     $("#edit-field-city-ph-und-0-value").val(cityaddrv);
		 
		  var postelcodeaddrv = localStorage.getItem("postelcodeaddr");
		  $("#edit-field-postal-code-ph-und-0-value").val(postelcodeaddrv);
		  
		  var proviaddrv = localStorage.getItem("proviaddr");
		  $("#edit-field-province-ph-und").val(proviaddrv);
		  
		  var fnameaddrv = localStorage.getItem("fnameaddr");
		  var mnameaddrv = localStorage.getItem("mnameaddr");
		  var lnameaddrv = localStorage.getItem("lnameaddr");
		  if(mnameaddrv !='') {
			 var fmnavf = fnameaddrv+' '+ mnameaddrv + ' '+ lnameaddrv; 
		  } else {
			   var fmnavf = fnameaddrv+' '+ mnameaddrv + ' '+ lnameaddrv; 
		  }
		  
		  
		  $("#edit-field-name-of-policy-holder-und-0-value").val(fmnavf);
		  
		
	    $('#edit-field-expiry-date-und-0-value-datepicker-popup-0').attr('readonly', 'true'); 
		//$('#edit-field-expiry-date-und-0-value-datepicker-popup-0').val('');
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
		   var hello = localStorage.getItem("srteetaddr");
		   var dfw = $("#edit-field-street-address-mi-und-0-value").val();
		   
		   var cityp = $("#edit-field-city-mi-und-0-value").val();
		   var proviencef = $("#edit-field-province-und").val();
		   var postelcodef = $("#edit-field-postal-code-mi-und-0-value").val();
		   var fnamef = $("#edit-field-full-name-und-0-value").val();
		   var mnamef = $("#edit-field-middle-name-und-0-value").val();
		   var lnamef = $("#edit-field-lastr-name-und-0-value").val();
		   
		   var membertype = $("#edit-field-member-type-und").val();
		   
		   if(membertype != undefined) {
			  localStorage.setItem("membertypeva", membertype);
			  
		   }
		 
		   if(dfw != undefined) {
			  localStorage.setItem("srteetaddr", dfw);
			  
		   }
		   if(cityp != undefined) {
			  localStorage.setItem("cityaddr", cityp);
			  
		   }
		   if(proviencef != undefined) {
			  localStorage.setItem("proviaddr", proviencef);
			  
		   }
		   if(postelcodef != undefined) {
			  localStorage.setItem("postelcodeaddr", postelcodef);
			  
		   }
		   if(fnamef != undefined) {
			  localStorage.setItem("fnameaddr", fnamef);
			  
		   }
		   if(mnamef != undefined) {
			  localStorage.setItem("mnameaddr", mnamef);
			  
		   }
		   if(lnamef != undefined) {
			  localStorage.setItem("lnameaddr", lnamef);
			  
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
		  var proviaddrv = parseInt(localStorage.getItem("membertypeva"));
		  var stepname = $('.step-brokerage-agency h3').html();
		  if(proviaddrv == 24  && stepname == 'Brokerage/Agency/Directwriter') {
			  $('#edit-next').hide();
			  $("#edit-submit").show();  
			  
		  }
		/*
		  *******************************************************************************************************
		*/
	  
	  
    
	});
	
	
	
	

}(jQuery));