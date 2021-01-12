require('dotenv').config()
$(() => {


  $('form').on('submit', (event) => {

    event.preventDefault();

    const userInput = $('input[type="text"]').val();
    $('form').trigger('reset')


    var settings = {
  	   "url": "https://genius.p.rapidapi.com/search?q=" + userInput,
  	   "method": "GET",
  	   "headers": {
  		   "x-rapidapi-host": "genius.p.rapidapi.com",
  	     "x-rapidapi-key": `${process.env.API_KEY}`
  	    }
    }

    $.ajax(settings)
        .then((data) => {
          for (let i = 0;i<10;i++){
            const songTitles = data.response.hits[i].result.title
            const $h1 = $('<button>').addClass('song').text(songTitles).appendTo('.container')
    }
    $('.song').on('click', (event) => {
        const songTitle = $(event.target).text();
        $.ajax({
              url:'https://orion.apiseeds.com/api/music/lyric/' +userInput + '/' + songTitle + '?' + `${process.env.API_KEY2}`
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
