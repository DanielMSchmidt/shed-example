function log (text) {
  var now = new Date(),
      logEntry = $('<tr><td>' + now.toTimeString() + '</td><td>' + text + '</td></tr>');

  $('#logTarget').append(logEntry);
}

function clear () {
  $('#logTarget').empty();
}

$(function () {
  $('.js-clear').on('click', function (e) {
    e.preventDefault();

    clear();
  });
});
