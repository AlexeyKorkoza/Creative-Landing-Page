$(document).ready(function () {
  var htmlWidth = $("html").innerWidth();
  $(".home .container").addClass('animated zoomIn');

  $(".options .option").each(function (index) {
    if (index % 2 === 0) {
      $('.options .option').eq(index).addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 200
      });
    } else {
      $('.options .option').eq(index).addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 200
      });
    }
  });

  $(".features .feature").each(function () {
    $('.features .feature').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated zoomIn',
      offset: 200
    });
  });

  $(".company .container div").each(function () {
    $('.company .container div').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated zoomIn',
      offset: 200
    });
  });

  if (htmlWidth >= 992) {
    $(".work_tabs label").each(function (index) {
      $('.work_tabs label').eq(index).addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 200
      });
    });
  } else {
    $(".work_tabs label").each(function (index) {
      if (index % 2 === 0) {
        $('.work_tabs label').eq(index).addClass("hidden").viewportChecker({
          classToAdd: 'visible animated fadeInLeft',
          offset: 200
        });
      } else {
        $('.work_tabs label').eq(index).addClass("hidden").viewportChecker({
          classToAdd: 'visible animated fadeInRight',
          offset: 200
        });
      }
    });
  }

  $(".rows div div").each(function (index) {
    $('.rows div div').eq(index).addClass("hidden").viewportChecker({
      classToAdd: 'visible animated bounceIn',
      offset: 200
    });
  });

  if (htmlWidth >= 992) {
    $(".service_tabs label").each(function (index) {
      $('.service_tabs label').eq(index).addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 200
      });
    });
  } else {
    $(".service_tabs label").each(function (index) {
      if (index % 2 === 0) {
        $('.service_tabs label').eq(index).addClass("hidden").viewportChecker({
          classToAdd: 'visible animated fadeInLeft',
          offset: 200
        });
      } else {
        $('.service_tabs label').eq(index).addClass("hidden").viewportChecker({
          classToAdd: 'visible animated fadeInRight',
          offset: 200
        });
      }
    });
  }

  $(".service_tabs_cont .image").each(function (index) {
    $('.rows div div').eq(index).addClass("hidden").viewportChecker({
      classToAdd: 'visible animated slideInLeft',
      offset: 200
    });
  });

  $(".service_tabs_cont .content").each(function (index) {
    $('.rows div div').eq(index).addClass("hidden").viewportChecker({
      classToAdd: 'visible animated slideInRight',
      offset: 200
    });
  });

  $(".purchase1 .container").each(function (index) {
    $('.purchase1 .container').eq(index).addClass("hidden").viewportChecker({
      classToAdd: 'visible animated zoomIn',
      offset: 200
    });
  });

  if (htmlWidth < 992) {
    $(".news .new").each(function (index) {
      if (index % 2 === 0) {
        $('.news .new').eq(index).addClass("hidden").viewportChecker({
          classToAdd: 'visible animated fadeInLeft',
          offset: 200
        });
      } else {
        $('.news .new').eq(index).addClass("hidden").viewportChecker({
          classToAdd: 'visible animated fadeInRight',
          offset: 200
        });
      }
    });
  }

  if(htmlWidth >= 992){
    $(".news .new").each(function (index) {
        $('.news .new').eq(index).addClass("hidden").viewportChecker({
          classToAdd: 'visible animated fadeIn',
          offset: 200
        });
    });
  }

  $(".fact").each(function (index) {
    if (index % 2 === 0) {
      $('.fact').eq(index).addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 200
      });
    } else {
      $('.fact').eq(index).addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 200
      });
    }
  });

  $(".princingTable").each(function (index) {
    $('.princingTable').eq(index).addClass("hidden").viewportChecker({
      classToAdd: 'visible animated pulse',
      offset: 200
    });
  });

  $(".feedback .container").addClass('animated zoomIn');

  $(".our-team .team").each(function (index) {
    $(".our-team .team").eq(index).addClass("hidden").viewportChecker({
      classToAdd: 'visible animated pulse',
      offset: 200
    });
  });

  if(htmlWidth < 1200){
    $(".contact .image").addClass('animated fadeUpBig');
    $(".contact .contact-form").addClass('animated fadeDownBig');
  } else {
    $(".contact .image").addClass('animated fadeInLeft');
    $(".contact .contact-form").addClass('animated fadeInRight');
  }
});