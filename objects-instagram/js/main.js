//API Boiler plate
// fetch(url)
// .then(res => res.json()) // parse response as JSON
// .then(data => {
//   console.log(data)
// })
// .catch(err => {
//     console.log(`error ${err}`)
// });


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5580c0c034msh313e3f481bde8e6p178c85jsnc562c7c0cc32',
		'X-RapidAPI-Host': 'instagram47.p.rapidapi.com'
	}
};

fetch('https://instagram47.p.rapidapi.com/user_followers?userid=1718924098', options)
	.then(response => response.json())
	.then(response => {
        
        console.log(response)
      


    
    
    
    
    })
	.catch(err => console.error(err)); 

