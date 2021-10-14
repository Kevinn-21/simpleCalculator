// Javascript
console.log("Hewo world");

function makeBold(query, callback) {
  // document.getElementById("demo").style.fontWeight = '500';
 query.style.fontWeight = 'bold';
 console.log(query);
}

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
  var tee = document.getElementById("t1");
  makeBold(tee, function(tee) {
    console.log(query);
  });
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();

  req.open("GET", "https://kevinrollins.com/helloclass/hello.php");

  req.onreadystatechange = function () {
    if (req.status == 200) {
      console.log("State changed");
      console.log(this);
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  };
  console.log("Before send:");
  console.log(req);
  req.send();
}

getFile(myDisplayer);



// 🍂Form example
// slide 22🍃
// let form = document.querySelector("form");

// form.onsubmit = function (submitEvent) {
//   // var name = document.querySelector("input").value;
//   let name = "Jane Smith";

//   request(
//     {
//       uri: "https://kevinrollins.com/helloclass/hello.php",
//       body: name,
//       method: "POST",
//     },
//     function (err, response, body) {
//       var statusMessage = document.querySelector(".status");

//       if (err) return (statusMessage.value = err);

//       statusMessage.value = body;
//     }
//   );
// };