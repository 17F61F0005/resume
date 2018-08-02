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
  skills(data.skills);
  achivements(data.achivements)
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
  heading.textContent="Education Qualification";
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
//skills
function skills(skill){
  var heading=document.createElement("h2");
  heading.textContent="Technical skills";
  child1.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
  for(var i=0;i<skill.length;i++){
  var title=document.createElement("h4");
  title.textContent=skill[i].title;
  child1.appendChild(title);
  var list=document.createElement("ul");
  child1.appendChild(list);
  console.log(skill[i].set.length);
  for (var j=0;j<skill[i].set.length;j++){
    var listItem=document.createElement("li");
  listItem.textContent=skill[i].set[j];
list.appendChild(listItem);
  }
}
}
//achivement
function achivements(achivement){
  var heading=document.createElement("h2");
  heading.textContent="My Achievements";
  child1.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
  var list=document.createElement("ul");
  child1.appendChild(list);
  var i=0;
  while(i<achivement.length){
    var listItem=document.createElement("li");
    listItem.textContent=achivement[i].achivedData;
    list.appendChild(listItem);
    //console.log(listItem);

    i++;
  }
}
