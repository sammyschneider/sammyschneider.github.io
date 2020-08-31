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
      const $lyricButton = $('<button>').addClass('lyric-button').text('Lyrics').appendTo($h1)
    }
    $('.song').on('click', (event) => {
      const songTitle = $(event.target).text();
      $.ajax({
            url:'https://orion.apiseeds.com/api/music/lyric/' +userInput + '/' + songTitle + '?apikey=XTym7nXEaPHH63xM5ogFCgj1kKiAu0EppXgcwlSA0fktKSn3krwKrJIOmTAnZSZZ'
        }).then(
            (data)=>{
              // console.log(data.result.track.text);
              // $('.lyric-button').on('click', (data) => {
              //   const $songLrics = data.result.track.text
              //   console.log($songLrics);
                // $songLrics.appendTo('.lyrics');
              const $songLrics = data.result.track.text
              $('.lyrics').append($songLrics)
              console.log($songLrics);
              $('#modal').css('display','block')
              // })
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
    $('#modal').css('display','none')
  })

})



})
