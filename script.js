// Question 1
var cat = new Object();
cat.complain = function(){return "Meow";}

// Question 2
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h3></h3>
  </body>
  <script>
    var heading = document.querySelector("h3");
    heading.innerHTML = "Update heading";
  </script>
</html>


// Question 3
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h3 id="h3"></h3>
  </body>
  <script>
    var heading = document.querySelector("h3");
    heading.innerHTML = "Update heading";
    document.getElementById("h3").style.fontSize = "2em";
  </script>
</html>


// Question 4
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h3 id="h3"></h3>
  </body>
  <script>
    var heading = document.querySelector("h3");
    heading.innerHTML = "Update heading";
    document.getElementById("h3").style.fontSize = "2em";
    heading.classList.add("subheading");
  </script>
</html>

// Question 5
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
    <p>paragraph 3</p>
    <p>paragraph 4</p>
    <p>paragraph 5</p>
  </body>
  <script>
    var paragraphs = document.querySelectorAll("p");
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = "red";
    }
  </script>
</html>


// Question 6
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="DIV">
      <div class="results"></div>
    </div>
  </body>
  <script>
    var div = document.getElementById("DIV");
    var resultsContainer = div.getElementsByClassName("results")[0];
    resultsContainer.innerHTML = "<p>New paragraph</p>";
    resultsContainer.style.backgroundColor = "yellow";
  </script>
</html>

// Question 7
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
   
  </body>
  <script>
    function name(list) {
      for (let i = 0; i < list.length; i++) {
        var getNameProperty = list[i]["name"];
        console.log(getNameProperty);
      }
    }
  </script>
</html>

// Question 8
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button onclick="createCats(catsArray)">Submit</button>
  </body>
  <script>
    var div = document.createElement("div");

    div.classList.add("cat-container");
    document.body.appendChild(div);

    var catsArray = [
      { name: "test1", age: 30 },
      { name: "test2", age: 20 },
    ];

    function createCats(cats) {
      for (let i = 0; i < cats.length; i++) {
        var nameData = cats[i]["name"];
        var ageData = cats[i]["age"];

        var addDiv = document.createElement("div");
        var addH5 = document.createElement("h5");
        var addP = document.createElement("p");

        div.appendChild(addDiv);
        div.appendChild(addH5);
        div.appendChild(addP);

        addH5.innerHTML = nameData;
        if (ageData === null) {
          ageData.innerHTML = "Age unknown";
        } else {
          addP.innerHTML = ageData;
        }
      }
    }
  </script>
</html>

or 

if (ageData === null) {
          ageData.innerHTML = "Age unknown";
        } else {
          addP.innerHTML = ageData;
        }
