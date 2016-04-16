$(document).ready(function () {
	$("#cover").click(function() { 
	    coverClick();
	    parent.displayCoverDiv();
	});
	$("#mainBody").click(function () {
	    mainBodyClick();
	    parent.displayMainBodyDiv();
	});
    $("#photo").click(function () { 
        photoClick();
        parent.displayPhotoDiv();
    });
    $("#map").click(function () { 
        mapClick();
        parent.displayMapDiv();
    });
	$("#contact").click(function() { 
	    contactClick();
	    parent.hideAllDiv();
    });
});

function coverClick() {
    $('#cover').addClass('buttonSelectedCover');
    $('#cover').removeClass('buttonUnSelectedCover');

    $('#mainBody').removeClass('buttonSelectedMainBody');
    $('#photo').removeClass('buttonSelectedPhoto');
    $('#map').removeClass('buttonSelectedMap');
    $('#contact').removeClass('buttonSelectedContact');
    $('#mainBody').addClass('buttonUnSelectedMainBody');
    $('#photo').addClass('buttonUnSelectedPhoto');
    $('#map').addClass('buttonUnSelectedMap');
    $('#contact').addClass('buttonUnSelectedContact');

    $('#cover').parent().parent().parent().parent().find(".cover").show();
    $('#cover').parent().parent().parent().parent().find(".mainBody").hide();
    $('#cover').parent().parent().parent().parent().find(".photo").hide();
    $('#cover').parent().parent().parent().parent().find(".map").hide();
    $('#cover').parent().parent().parent().parent().find(".contact").hide();
}

function mainBodyClick() {
    $('#mainBody').addClass('buttonSelectedMainBody');
    $('#mainBody').removeClass('buttonUnSelectedMainBody');
    $('#cover').removeClass('buttonSelectedCover');
    $('#photo').removeClass('buttonSelectedPhoto');
    $('#map').removeClass('buttonSelectedMap');
    $('#contact').removeClass('buttonSelectedContact');
    $('#cover').addClass('buttonUnSelectedCover');
    $('#photo').addClass('buttonUnSelectedPhoto');
    $('#map').addClass('buttoUnnSelectedMap');
    $('#contact').addClass('buttonUnSelectedContact');

    $('#mainBody').parent().parent().parent().parent().find(".cover").hide();
    $('#mainBody').parent().parent().parent().parent().find(".mainBody").show();
    $('#mainBody').parent().parent().parent().parent().find(".photo").hide();
    $('#mainBody').parent().parent().parent().parent().find(".map").hide();
    $('#mainBody').parent().parent().parent().parent().find(".contact").hide();
}

function photoClick() {
    $('#photo').addClass('buttonSelectedPhoto');
    $('#photo').removeClass('buttonUnSelectedPhoto');

    $('#cover').removeClass('buttonSelectedCover');
    $('#mainBody').removeClass('buttonSelectedMainBody');
    $('#map').removeClass('buttonSelectedMap');
    $('#contact').removeClass('buttonSelectedContact');
    $('#cover').addClass('buttonUnSelectedCover');
    $('#mainBody').addClass('buttonUnSelectedMainBody');
    $('#map').addClass('buttonUnSelectedMap');
    $('#contact').addClass('buttonUnSelectedContact');

    $('#photo').parent().parent().parent().parent().find(".cover").hide();
    $('#photo').parent().parent().parent().parent().find(".mainBody").hide();
    $('#photo').parent().parent().parent().parent().find(".photo").show();
    $('#photo').parent().parent().parent().parent().find(".map").hide();
    $('#photo').parent().parent().parent().parent().find(".contact").hide();
}

function mapClick() {
    $('#map').addClass('buttonSelectedMap');
    $('#map').removeClass('buttonUnSelectedMap');
    $('#cover').removeClass('buttonSelectedCover');
    $('#mainBody').removeClass('buttonSelectedMainBody');
    $('#photo').removeClass('buttonSelectedPhoto');
    $('#contact').removeClass('buttonSelectedContact');
    $('#cover').addClass('buttonUnSelectedCover');
    $('#mainBody').addClass('buttonUnSelectedMainBody');
    $('#photo').addClass('buttonUnSelectedPhoto');
    $('#contact').addClass('buttonUnSelectedContact');

    $('#map').parent().parent().parent().parent().find(".cover").hide();
    $('#map').parent().parent().parent().parent().find(".mainBody").hide();
    $('#map').parent().parent().parent().parent().find(".photo").hide();
    $('#map').parent().parent().parent().parent().find(".map").show();
    $('#map').parent().parent().parent().parent().find(".contact").hide();
}

function contactClick() {
    $('#contact').addClass('buttonSelectedContact');
    $('#contact').removeClass('buttonUnSelectedContact');
    $('#cover').removeClass('buttonSelectedCover');
    $('#mainBody').removeClass('buttonSelectedMainBody');
    $('#photo').removeClass('buttonSelectedPhoto');
    $('#map').removeClass('buttonSelectedMap');
    $('#cover').addClass('buttonUnSelectedCover');
    $('#mainBody').addClass('buttonUnSelectedMainBody');
    $('#photo').addClass('buttonUnSelectedPhoto');
    $('#map').addClass('buttonUnSelectedMap');

    $('#contact').parent().parent().parent().parent().find(".cover").hide();
    $('#contact').parent().parent().parent().parent().find(".mainBody").hide();
    $('#contact').parent().parent().parent().parent().find(".photo").hide();
    $('#contact').parent().parent().parent().parent().find(".map").hide();
    $('#contact').parent().parent().parent().parent().find(".contact").show();
}









