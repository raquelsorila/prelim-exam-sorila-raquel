var checkbox = document.getElementById("checkbox");
var dropdown = document.getElementById("dropdown");
var textbox = document.getElementById("textbox");

function toggleCheck() {
    dropdown.classList.toggle("inactive");
    textbox.classList.toggle("inactive");
    textbox.value = "";
    dropdown.value = "";
}



/*
              <script>
                  var director = document.getElementById("dropdown"); //dropdown
                  var newDirector = document.getElementById("textbox"); //textbox input type
                  var checkBox = document.getElementById("checkbox"); //checkbox


                  function toggleCheck() {
                      //document.getElementById("dir").style.display = "none";
                      //document.getElementById("dir").text.display = "none";
                      director.classList.toggle("inactive");
                      newdirector.classList.toggle("inactive");
                      newdirector.value = "";
                      director.value = "";
                  }
              </script>*/