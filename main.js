function loadJSON(file){
   return new Promise((resolve,reject)=>{
     return fetch(file).then(response=>{
       if(response.ok){
         resolve(response.json());
       } else{
         reject(new Error('error'));
       }
     })
   })
}
var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
})

var child1=document.querySelector("#child1");
//career
function career(car){
  var heading=document.createElement("h2");
  heading.textContent="career objective";
  child1.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
var p=document.createElement("p");
p.textContent=car.info;
child1.appendChild(p);
}
//education
function education(edu){
  var heading=document.createElement("h2");
  heading.textContent="education qualification";
  child1.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
  var table=document.createElement("table");
  child1.appendChild(table);
    var tr="<tr> <td> S.NO</td> <td> degree</td> <td> Institute</td> <td> data</td> </tr> ";
    //table.innerHTML=tr;
    table.border="1";
     var tr1="";
    for (var i=0;i<edu.length;i++){
    tr1+="<tr> <td>"+i+1+" </td> <td>"+edu[i].degree+"</td> <td>"+edu[i].institute+"</td><td>"+edu[i].data+"</td> </tr>";
}
table.innerHTML=tr+tr1;
}
