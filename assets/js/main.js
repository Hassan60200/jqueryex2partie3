var count = 0;
$('#moreClick').click(function(){
  count++;
  $('#result').attr('value', count);
});

$('#lessClick').click(function(){
  count--;
  $('#result').attr('value', count);
});
