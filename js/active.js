$('document').ready(function() {
  //======>  Pricing Toggle Functionality
  $("[class*='btn--toggle']").on('change', function(e) {
    var getTarget = $(this).attr('data-tab-target');
    var inpSelect = $(this).children().children('input[type="checkbox"]');
    if ($(inpSelect).is(':checked')) {
      if ($(getTarget).hasClass('monthly')) {
        $(getTarget).removeClass('monthly');
        $(getTarget).addClass('yearly');

      }
    } else {
      // $(getTarget).removeClass('monthly');
      if ($(getTarget).hasClass('yearly')) {
        $(getTarget).removeClass('yearly');
        $(getTarget).addClass('monthly');

      }
    }
  })

  const url = 'https://script.google.com/macros/s/AKfycbzsSDsmAnquhhMES_GIWoIXoJxAKYchgoDMIV5wRRc1GiMx4nw/exec';
  $('#submit-email').on('click', function(e) {
    e.preventDefault();
    const email = $('#email-input').val();
    const timestamp = Date.now();
    $.getJSON("https://ipinfo.io/json", function(data) {
      $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: {
          email,
          timestamp,
          data: JSON.stringify(data),
        }
      }).success(() => {
        $('#submit-email').remove();
        $('#email-input').remove();
        $('#success-message').show();

        ga('send', 'event', 'Signup', 'Completed', email)
        FS.identify(email, {
          displayName: email,
          email,
        });
      });
    });
  });

  $('#submit-email2').on('click', function(e) {
    e.preventDefault();
    const email = $('#email-input2').val();
    const timestamp = Date.now();
    $.getJSON("https://ipinfo.io/json", function(data) {
      $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: {
          email,
          timestamp,
          data: JSON.stringify(data),
        }
      }).success(() => {
        $('#submit-email2').remove();
        $('#email-input2').remove();
        $('#success-message2').show();

        ga('send', 'event', 'Signup', 'Completed', email)
        FS.identify(email, {
          displayName: email,
          email,
        });
      });
    });
  });
});

//======>  Mobile Menu Activation
$('.main-navigation').meanmenu({
  meanScreenWidth: "992",
  meanMenuContainer: '.mobile-menu',
  meanMenuClose: "<i class='icon icon-simple-remove'></i>",
  meanMenuOpen: "<i class='icon icon-menu-34'></i>",
  meanExpand: "",
});
