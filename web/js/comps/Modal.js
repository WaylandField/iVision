define(['backbone'], function(Backbone){
    var Modal = Backbone.View.extend({
	tagName: 'div',
	className: 'modal hide fade',
	render: function(){
	    var header = document.createElement('div');
	    $(header).addClass('modal-header');
	    var title = document.createElement('h3');
	    $(title).text("Login");
	    $(header).append(title);
	    $(this.el).append(header);

	    var body = document.createElement('div');
	    $(body).addClass('modal-body');
	    var formHtml = [];
	    formHtml.push('
<div class="alert alert-info alert-login">
					Clear username and password field to see validation.
				</div>
<div class="cnt_b">
					<div class="formRow">
						<div class="input-prepend">
							<span class="add-on"><i class="icon-user"></i></span><input type="text" value="John Smith" placeholder="Username" name="username" id="username">
						<label for="username" generated="true" class="error" style="display: none;">Please enter at least 3 characters.</label></div>
					</div>
					<div class="formRow">
						<div class="input-prepend">
							<span class="add-on"><i class="icon-lock"></i></span><input type="password" value="password" placeholder="Password" name="password" id="password">
						<label for="password" generated="true" class="error" style="display: none;">Please enter at least 3 characters.</label></div>
					</div>
					<div class="formRow clearfix">
						<label class="checkbox"><input type="checkbox"> Remember me</label>
					</div>
				</div>
            ');
	    $(body).html(formHtml.join(""));
	    $(this.el).append(body);
	    
	    var footer = document.createElement('div');
	    $(footer).addClass('modal-footer');
	    $(footer).html('
					<button class="btn btn-inverse pull-right" type="submit">Sign In</button>
					<span class="link_reg"><a href="#reg_form">Not registered? Sign up here</a></span>
				');
	    $(this.el).append(footer);
	},

	login:function (event) {
            event.preventDefault(); // Don't let this button submit the form
            $('.alert-error').hide(); // Hide any errors on a new submit
            var url = '../api/login';
            console.log('Loggin in... ');
            var formValues = {
		email: $('#inputEmail').val(),
		password: $('#inputPassword').val()
            };

            $.ajax({
		url:url,
		type:'POST',
		dataType:"json",
		data: formValues,
		success:function (data) {
                    console.log(["Login request details: ", data]);
		    
                    if(data.error) {  // If there is an error, show the error messages
			$('.alert-error').text(data.error.text).show();
                    }
                    else { // If not, send them back to the home page
			window.location.replace('#');
                    }
		}
            });
	}
    });
});