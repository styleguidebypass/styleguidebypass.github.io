/*******************************
            Date picker
*******************************/    
    $(function() {
          $('.datepicker').datepicker({dateFormat: 'dd.mm.y', changeMonth: true, changeYear: true}).
                datepicker('setDate', '+0d');
    });

    $(function() {
      $( ".datepicker" ).datepicker();
    });

    $( ".datepicker" ).datepicker({
    inline: true
    });

/*******************************
            dropdown
*******************************/
    $('.ui.dropdown')
  .dropdown()
  ;