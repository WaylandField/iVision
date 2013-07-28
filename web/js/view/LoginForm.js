define(['backbone'], function(Backbone){
    var Modal = Backbone.View.extend({
	tagName: 'div',
	className: 'modal',
	events: {
	    "click #sign_in": "login",
	    "submit #loginForm" : "login"
	},
	
	render: function(){
	    var form = document.createElement("form");
	    $(this.el).append(form);
	    $(form).attr("id", "loginForm");
	    var header = document.createElement('div');
	    $(header).addClass('modal-header');
	    var title = document.createElement('h3');
	    $(title).text(MSGS['app_title']);
	    $(header).append(title);
	    $(form).append(header);

	    var body = document.createElement('div');
	    $(body).addClass('modal-body');
	    var formHtml = [];
	    formHtml.push('<div class="alert alert-info alert-login">' + MSGS.login_title +
			  '</div><div class="cnt_b"><div class="formRow"><div class="input-prepend">'+
			  '<span class="add-on"><i class="icon-user"></i></span><input type="text" value="" placeholder="'+MSGS.login_username+'" name="username" id="username">'+
			  '<label for="username" generated="true" class="error" style="display: none;">Please enter at least 3 characters.</label></div>'+
			  '</div><div class="formRow"><div class="input-prepend">'+
			  '<span class="add-on"><i class="icon-lock"></i></span><input type="password" placeholder="'+MSGS.login_pwd+'" name="password" id="password">'+
			  '<label for="password" generated="true" class="error" style="display: none;">Please enter at least 3 characters.</label></div>'+
			  '</div><div class="formRow clearfix"><label class="checkbox"><input type="checkbox">'+MSGS.remember_me+'</label>'+
			  '<div></div>');
	    $(body).html(formHtml.join(""));
	    $(form).append(body);
	    
	    var footer = document.createElement('div');
	    $(footer).addClass('modal-footer');
	    $(footer).html('<button class="btn btn-inverse pull-right" type="submit" id="sign_in">'+ MSGS['sign_in']+'</button>'+
			   '<span class="link_reg pull-left"><a href="#reg_form">'+ MSGS['not_registered']+'</a></span>');
	    $(form).append(footer);
	},

	login:function (event) {
            event.preventDefault(); // Don't let this button submit the form
            $('.alert-error').hide(); // Hide any errors on a new submit
            var url = '/api/session';
            console.log('Loggin in... ');
            var formValues = {
		username: $('#username').val(),
		password: $('#password').val()
            };

            $.ajax({
		url:url,
		type:'POST',
		dataType:"json",
		data: formValues,
		success:function (data) {
		    window.location='#navi/home';
		}
            });
	}
    });
    return Modal;
});