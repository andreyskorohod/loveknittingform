'use strict';

function formSubmission(formg) {
    var $submit = $('input.button');
    var $fields = $('.form-line input')//$('.form-line input');
    var $password = $('#password-line');
    var $confirmPassword = $('#confirm-password-line');
    var $date = $('#birthday-line');

        for (var i = 0; i < $fields.length; i++) {
            if ($fields.eq(i).val() == '') {
                $fields.eq(i).addClass('alert-field');
                $('.validation').text('Fields are required!');
            } else {
                $fields.eq(i).removeClass('alert-field');
            }
        }

        if ($('.alert-field').length == 0){
            if ($password.val() == $confirmPassword.val()){
                $password.removeClass('alert-field');
                $confirmPassword.removeClass('alert-field');
                if (dateValidation($date.val())) {} else {
                    return true;
                    $('.validation').text('Incorrect date!');
                    return false;
                }
            } else {
                $('.validation').text('Passwords don`t match!');
                $password.addClass('alert-field');
                $confirmPassword.addClass('alert-field');
                return false;
            }
        } else {
            return false;
        }


};

function dateValidation(dateString)
{
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)){
        return false;
    }

    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if (yyyy < year) {
        console.log('Incorrect date!');
        return false;
    } else {
        if (yyyy == year){
            if (mm < month) {
                console.log('Incorrect date!');
                return false;
            } else {
                if (mm == month) {
                    if (!(dd > day)) {
                        console.log('Incorrect date!');
                        return false;
                    }
                }
            }
        }
    }
    return day > 0 && day <= monthLength[month - 1];
};

$(document).ready(function(){
    $('input.button').prop("disabled", false);
});
