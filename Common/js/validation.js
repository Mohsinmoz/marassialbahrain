var errorClass = "validation_error";

function ValidateDropDown(lbl, ddl) {
    if (ddl.val() == '--') {
        ddl.addClass(errorClass);
        lbl.addClass(errorClass);
        return false;
    }
    else {
        ddl.removeClass(errorClass);
        lbl.removeClass(errorClass);
        return true;
    }
}

function ValidateText(lbl, txt) {

    //var strRegx = /^[a-zA-Z .]*$/;
   // var strRegx = /^[a-zA-Zا-ی .]*$/;

    var strRegx = /^(([a-zA-Z, ]+)$|([ ,ء-ي ]+) |([\u0600-\u06FF]+)$)/;
    if (txt.val() == "" || txt.val().trim().length == 0) {

     
        txt.addClass(errorClass);
        lbl.addClass(errorClass);
        return false;
    }
    else {
        if (!strRegx.test(txt.val())) {
            txt.addClass(errorClass);
            lbl.addClass(errorClass);
            return false;
        }
        else {
            txt.removeClass(errorClass);
            lbl.removeClass(errorClass);
            return true;
        }
    }
}

function ValidateEmail(lbl, txt) {
    var emailRegx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!emailRegx.test(txt.val())) {
        txt.addClass(errorClass);
        lbl.addClass(errorClass);
        return false;
    }
    else {
        txt.removeClass(errorClass);
        lbl.removeClass(errorClass);
        return true;
    }
}

function ValidatePhoneNumber(lbl, txt) {
    var phone = txt.val().replace(/\s/g, '');
    var phoneRegx = /^\+?[\d]{6,20}$/;

    if (!phone.match(phoneRegx)) {
        txt.addClass(errorClass);
        lbl.addClass(errorClass);
        return false;
    }
    else {
        txt.removeClass(errorClass);
        lbl.removeClass(errorClass);
        return true;
    }
}

function ValidateCheckBox(lbl, chk) {
    if (!chk.is(':checked')) {
        return false;
    }
    else {
        return true;
    }
}

function SetCheckBoxErrorClass(field) {
    field.each(function () {
        $(this).addClass(errorClass);
    });
}

function RemoveCheckBoxErrorClass(field) {
    field.removeClass(errorClass);
}