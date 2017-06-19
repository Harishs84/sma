 // When the browser is ready...
  $(function() {
  
    $.get( "js/db.json", function( data ) {
        $.each(data.items, function(n, elem) {
              var list = $('<ul class="flex-container"></ul>');
              $('.results').append(list);
              list.append('<li class="flex-items items">' + elem.socialNetwork + '</li>',
                '<li class="flex-items items">' + elem.verizonHandle + '</li>',
                '<li class="flex-items items">' + elem.chID + '</li>',
                '<li class="flex-items items">' + elem.mtn + '</li>',
                '<li class="flex-items items">' + elem.accountNumber + '</li>',
                '<li class="flex-items items">' + elem.myVerizonId + '</li>',
                '<li class="flex-items items">' + elem.time + '</li>',
                '<li class="flex-items items">' + elem.valid + '</li>'
              );
        })  
    });

  });