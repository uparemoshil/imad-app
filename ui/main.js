// counter code
var counter=0;
var button=document.getElementById("counter");
button.onclick=function(){
    counter= counter+1;
    var span=document.getElementById("count");
    span.innerHTML= counter.toString();
};
 
 var nameinput=document.getElementById("name");
 var name = nameinput.value;
 var submit=document.getElementById("submit_btn");
  submit.onclick= function(){
      // capture a list of names and render it.
      var names=['name1', 'name2', 'name3','name4'];
      var list='';
      for(var i=0; i<name.lenght,i++)
      {
          list += "<li>" + names[i] + "</li>" ;
          
      }
      var ul=document.getElementById("namelist");
      ul.innerHTML= list;
  };
 