$(document).ready(function() {
  $('a.edit_train').click(function(e) {
  	e.preventDefault();

    var train_id = $(this).data('trainId');
    var form = $('#edit_train_' + train_id);
    var number = $('#train_number_' + train_id);

    if (!$(this).hasClass('cancel')) {
      $(this).html('Cancel');
      $(this).addClass('cancel');
    } else {
      $(this).html('Edit');
      $(this).addClass('cancel');
    }
      form.toggle();
      number.toggle();
  });
});