const joke=document.getElementById('joke')
const jokebtn=document.getElementById('jokebtn')

jokebtn.addEventListener('click',generatejoke)

generatejoke()

async function generatejoke()
{
 const config={
        headers:{
            'Accept':'application/json',
        },
    }
    
   const res= await fetch('https://icanhazdadjoke.com',config)
    const data= await res.json()
    joke.innerHTML=data.joke
    
}
// function generatejoke()
// {
//     const config={
//         headers:{
//             'Accept':'application/json',
//         },
//     }
    
//     fetch('https://icanhazdadjoke.com',config)
//     .then((res)=>res.json())
//     .then((data)=>{
//         joke.innerHTML=data.joke
//     })
// }