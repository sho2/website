$('#subscribeform').submit(function(){
	var action = $(this).attr('action');
		$("#masonry").slideUp(750,function() {
		$('#masonry').hide();
	$('#subsubmit')
			.after('')
			.attr('disabled','disabled');
	$.post(action, {
			email: $('#subemail').val()
		},function(data){
				document.getElementById('masonry').innerHTML = data;
				$('#masonry').slideDown('slow');
				$('#subscribeform img.subscribe-loader').fadeOut('slow',function(){$(this).remove()});
				$('#subsubmit').removeAttr('disabled');
				if(data.match('success') != null) $('#subscribeform').slideUp('slow');
			}
		);});
		return false;
});
/*  ScrollTop */
$(document).ready(function() {
  var scrollTop = $("#stop");
  $(window).scroll(function() {
    var topPos = $(this).scrollTop();
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  });
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
/* main */
$(document).ready(function() {
	$('.menu , .linee').on('click', function() {
	  $('.menu').toggleClass('over')
	  $('.linea1').toggleClass('overL1')
	  $('.linea2').toggleClass('overL2')
	  $('.linea3').toggleClass('overL3')
	  $('.main-menu').toggleClass('overmain')
	});
	$("html").niceScroll({cursorwidth: '8px',cursorcolor:"#222222" , cursorborder:"1px solid #FFF" , autohidemode: false, zindex: 9999 });
});