$(() => {


  $('form').on('submit', (event) => {

    event.preventDefault();

    const userInput = $('input[type="text"]').val();
    $('form').trigger('reset')


  var settings = {
  	// "async": true,
  	// "crossDomain": true,
  	"url": "https://genius.p.rapidapi.com/search?q=" + userInput,
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "genius.p.rapidapi.com",
  		"x-rapidapi-key": "bc0b35f5bdmshcbb8935a94c132fp1abf85jsnb66bf20c2ba9"
  	}
  }

  $.ajax(settings)
      .then(function (response) {
    for (let i = 0;i<10;i++){
      const songTitles = response.response.hits[i].result.title
      const $h1 = $('<button>').addClass('song').text(songTitles).appendTo('.container')
    }
    $('.song').on('click', (event) => {
      const songTitle = $(event.target).text();
      $.ajax({
            url:'https://orion.apiseeds.com/api/music/lyric/' +userInput + '/' + songTitle + '?apikey=XTym7nXEaPHH63xM5ogFCgj1kKiAu0EppXgcwlSA0fktKSn3krwKrJIOmTAnZSZZ'
        }).then(
            (data)=>{
              const $songLrics = data.result.track.text
              $('.lyrics').append($songLrics)
              $('#modal').css('display','block')
            },
            ()=>{
                console.log('bad');
            }
        );
    })

  });

  $('.reset').on('click', () => {
    $('.container').text('')
  })
  $('#close-modal').on('click', () => {
    $('#modal').css('display','none');
    $('p').text('')
  })

}) 



})
