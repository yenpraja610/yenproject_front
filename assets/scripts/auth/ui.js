 'use strict';
 const config = require('../config');


const successSignUp = (data) => {
  config.user = data.user;
  $('#exampleModalUp').modal('hide');
  $('.signup-clean').val('');
  $('.message').text('');
  console.log(data);
};

const failureSignUp = (data) => {
  console.log(data);
  $('.message').text('Nope, you used this account already, try with a different account!');
};

const successSignIn = (data) => {
    config.user = data.user;
    $('#sign-up').val('');
    $('.clean-signin').val('');
    $('#exampleModalIn').modal('hide');
    $('.container_popovers').show();
    $('.pass').show();
    $('.top').hide();
    $('.bottom-page').hide();
    $('#change-password').show();
    $('.sign-out').show();
  };

const failureSignIn = (error) => {
if (error) {
  $('.message_two').text('Nope, please use the right email and password');
  }
};

const succesChangePassword = () =>  {
$('#messagePass').text('Great! Change is successful!');
};

const successSignOut = () => {
      $('.container_popovers').hide();
      $('.pass').hide();
      $('.sign-out').hide();
      $('.home-page').show();
      $('.bottom-page').show();
};

const failureSignOut = () => {
      $('.container_popovers').hide();
      $('.pass').hide();
      $('.sign-out').hide();
      $('.home-page').show();
      $('.bottom-page').show();


};


module.exports = {
  failureSignUp,
  successSignUp,
  successSignIn,
  failureSignIn,
  succesChangePassword,
  successSignOut,
  failureSignOut,
};
