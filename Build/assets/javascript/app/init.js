(function($){
  $(function(){

    $(".callSlideout").sideNav({edge: 'right', menuWidth: 440, activationWidth: 70});
    $('select').material_select();
    $(".dropdown-button").dropdown({
      hover: false
    });
    $('.collapsible').collapsible();
    $(".button-collapse").sideNav();

    // pickadate init with preset Today
    $('.datepicker').pickadate({
       onStart: function ()
        {
          var date = new Date();
          this.set('select', [date.getFullYear(), date.getMonth() + 1, date.getDate()]);
        }
    });

    // wow.js init
    new WOW().init();

    // skillset.js init
    $("#skillset").skillset({
      object:object,
      duration:40
    });

    // init  dataTables
    // $('table.registry').DataTable({
    // });



  }); // end of document ready
})(jQuery); // end of jQuery name space

// you may need if dynamic content Waves.displayEffect(); to get pretty buttons. this should be called after the ajax call completes