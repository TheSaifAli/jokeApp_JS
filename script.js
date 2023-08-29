const api_key ='OW8VaQY/Vx8rv7cGI5d82w==qhKdtqaY9YzZGpvZ';
const option ={
    method:'GET',
    headers:{
        'X-Api-Key':api_key
    }
    
}
const olEL = document.querySelector('ol');

const apiURL ='https://api.api-ninjas.com/v1/jokes?limit=30'

const btnEl = document.querySelector('button');

let jokeLimit =1

const getJoke = async()=>{
    
    const res = await fetch(apiURL,option);
    const data =await res.json();
    console.log(data);
    btnEl.addEventListener('click',()=>{
        olEL.innerHTML = data.map((data,index)=>{
            if(index<jokeLimit)
            {
            return `<li><span>${index+1}</span><span >${data.joke}</li>`
            }
        }).join('');
        
        jokeLimit++;
        btnEl.innerText = "Show More";
    })
    
}

getJoke();

