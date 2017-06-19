 // When the browser is ready...
  $(function() {
  
    // Setup form validation on the #register-form element
    $("#register-form").validate({
    
        // Specify the validation rules
        rules: {
            mtn: "required",
            password: {
                required: true,
                minlength: 4,
                maxlength: 4
            }
        },
        
        // Specify the validation error messages
        messages: {
            mtn: "Please enter your Mobile Telephone Number",           
            password: {
                required: "Please provide the Billing Pin Number",
                minlength: "Your Billing Pin Number must be at least 4 characters long"
            }
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });


    $("#mtn, #password").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

  });