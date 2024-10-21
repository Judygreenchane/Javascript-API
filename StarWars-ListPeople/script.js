





























const btnPeople = document.querySelector('#btnPeople')
const output = document.querySelector('#listPeople')

const getPeople = () =>{
    fetch('https://www.swapi.tech/api/people',{
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res =>{
        if(res.ok)
            return res.json()
        throw new Error('Failed to get response')
    })
    .then(data=>{
        console.log(data)

        output.innerHTML = ''

        data.results.forEach(repo =>{
          output.innerHTML +=
            `
    <div class="card">
        <div class="card-body">
            
            <p class="card-text">name :${repo.name}</p>
         
           
        </div>
    </div>

            `
        })

        
                    
    })
}

btnPeople.addEventListener('click', getPeople) 

