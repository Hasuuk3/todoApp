import { database, ref, set, push, onValue, remove } from "./firebaseconfig.js";

var inputval = document.getElementById("inputval")
var listval = document.getElementById("listval")
var btnrmv = document.getElementById("btnrmv")
var dltbtn = document.getElementById("dltbtn")
var mainArray = [];
var idRef;


window.add = function () {
  var idRef = ref(database, "todo/")
  var id = push(idRef).key;

  var obj = {
    todo: inputval.value,
    id: id,

  }
  var reference = ref(database, `todo/${id}`)
  set(reference, obj)
  //    console.log(obj)
  getData()
  // renderdata()

}

window.getData = function () {
  var reference = ref(database, "todo/")
  onValue(reference, function (data) {
    var datalist = data.val();
    var getvalues = Object.values(datalist)
    mainArray = getvalues;
    // console.log(getvalues);
    renderdata(getvalues)
    
  },)
}

window.renderdata = function (dataArr) {
  console.log(dataArr)
  listval.innerHTML = ""
  for (let i = 0; i < dataArr.length; i++) {
    // console.log(dataArr)
    listval.innerHTML += `<div class="p-2 mx-1  border-bottom row   justify-content-between  " >
    <li  class=" col-md-10 col-7  d-block  border-end    overflow-x-scroll ">
    ${dataArr[i].todo} 
    </li>
    <button onclick="removepara(this)" id="btnrmv" class="btn btn-warning fw-bold  rounded-pill col-md-2 col-4  " >Remove</button>
</div>
`
//     listval.innerHTML += `<div class="p-2  border-bottom row   justify-content-between  " >
//     <li  class=" col-md-10 col-8  d-block   overflow-x-scroll ">
//     ${dataArr[i].id} 
//     </li><button onclick="removepara(this)" id="btnrmv" class="btn btn-warning fw-bold  rounded-pill col-md-2 col-4  " >Remove</button>
// </div>
// `
  }

}

window.removepara = function (btnrmv) {
  
//   var id=btnrmv.previousSibling.innerHTML
// console.log(id);
// var reference=ref(database, `todo/${id}`)
// remove(reference)
// // console.log(reference);

// console.log(btnrmv)
// console.log(btnrmv.parentNode.childNodes[0].nextElementSibling.firstChild.id);
//   var index = btnrmv.parentNode.childNodes[0].nextElementSibling.firstChild.id;
//   btnrmv.parentNode.remove(database, "todo/".todo)

//   removeFromArray(index);
//   console.log(mainArray);
}

// function removeFromArray(e) {
//   var arr1 = mainArray.slice(0, parseInt(e));
//   var arr2 = mainArray.slice(parseInt(e) + 1);

//   for (var i = 0; i < arr2.length; i++) {
//     arr1.push(arr2[i]);
//   }
//   mainArray = arr1;
//   // console.log(mainArray);
// }

window.deleteall = function () {
  var todos = document.querySelectorAll('.item');

  todos.forEach(todo => {
    todo.remove();
    getvalues.remove()

  });



  mainArray = [];
  reference.remove();
  getvalues.remove()
  

  console.log(mainArray);
   
}
// reference.update (mainArray)


getData()

