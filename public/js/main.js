

const submitbtn= document.getElementById('submit_btn')
const city=document.getElementById('city')
const cityname=document.getElementById('city_name')
const temp=document.getElementById('temp')
const temp_status=document.getElementById('temp_status')

const getinfo=async(event)=>{
   event.preventDefault();
   let cityval=city.value
   if(cityval==="") {
     cityname.innerText=`Enter the city name`;
   }
   else{
      try{
          let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=7f336390908f3421bd53010bc9f94206`
           const data=await fetch(url)
           const response= await data.json()
           const arrdata=[response]
           temp.innerText=arrdata[0].main.temp;
           cityname.innerHTML=arrdata[0].name;
           let tempicons=arrdata[0].weather[0].main;
           if(tempicons=='Clear'){
           temp_status.innerHTML=
           "<i class='fas fa-sun' style='color:#eccc68;'></i>"
           }else if(tempicons=='Clouds'){
            temp_status.innerHTML=
            "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }else if(tempicons=='Rain'){
               temp_status.innerHTML=
               "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
               }else{
                  temp_status.innerHTML=
                  "<i class='fas fa-sun' style='color:#f1f2f6;'></i>"
                  }
         }
      catch{
         cityname.innerText=`Enter the city valid name`;

      }
   }
}

submitbtn.addEventListener('click',getinfo)