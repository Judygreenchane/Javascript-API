





const btnBiomerics = document.querySelector('#btnBiomerics')
const output = document.querySelector('#output')



function getApi(){
    const fullUri='https://www.swapi.tech/api/people/?name='+document.getElementById('characterName').value
    
    fetch (fullUri)
    .then (res=>res.json())
    .then(data =>
    {
       
       
     // output.value=''
      data.result.forEach(post =>{

        let s=`Name :${post.properties.name},   Gender :${post.properties.gender},   Height : ${post.properties.height},   Hair color :${post.properties.hair_color},    Skin :${post.properties.birth_year} `
         output.value=s
    })
      
   })
    .catch(err => console.log(err))

}



btnBiomerics.addEventListener('click', getApi)  

