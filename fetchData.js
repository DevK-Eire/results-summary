fetch('/data.json')
.then(function(response) {
  return response.json();
})

.then(function(data) {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    const bgcolor = data[i].bgcolor;
    const textcolor = data[i].textcolor;
    const category = data[i].category;
    const score = data[i].score;
    document.getElementById("score-list").innerHTML +=   
       '<div class="flex flex-col space-y-4 p-2"></div>'      +
      `<div class="flex bg-${bgcolor} justify-center items-center rounded-xl  gap-2 p-3 ">` +
      '<img src="' + data[i].icon + '">' +
      `<div class="flex flex-col text-${textcolor}"> ${category}  </div>` +
      '<div class="ml-auto font-bold flex items-center gap-1">' + score + ' <div class="font-normal"> /100 </div></div>' 
  }
})
.catch(function(err) {
  console.log(err);
});