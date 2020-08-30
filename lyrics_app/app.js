$(() => {


  // $.ajax({
  //           url:'https://sandbox-api.brewerydb.com/v2/locations?key=8851ebd04bbf1c458d5079340bb444d3',
  //           type: "GET",
  //           data: {limit: 5}
  //         })
  //       .then(
  //           (data)=>{
  //             for (let i =0;i<5;i++){
  //             console.log(data.data[i].name);
  //           }
  //
  //           },
  //           ()=>{
  //               console.log('bad');
  //           }
  //       );

  $('form').on('submit', (event) => {

    event.preventDefault();

    const userInput = $('input[type="text"]').val();
    $('form').trigger('reset')


  var settings = {
  	"async": true,
  	"crossDomain": true,
  	"url": "https://genius.p.rapidapi.com/search?q=" + userInput,
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "genius.p.rapidapi.com",
  		"x-rapidapi-key": "bc0b35f5bdmshcbb8935a94c132fp1abf85jsnb66bf20c2ba9"
  	}
  }

  $.ajax(settings).done(function (response) {
    for (let i =0;i<10;i++){
      const songTitles = response.response.hits[i].result.title
      const $h1 = $('<button>').addClass('song').text(songTitles).appendTo('.container')

    }
    $('.song').on('click', (event) => {
      console.log(event.target);
    })

  });

  $('.reset').on('click', () => {
    $('.container').text('')
  })


})


})
