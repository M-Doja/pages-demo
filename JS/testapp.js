// This function calls the server to display the data on the server (In the 'blogs' Array)
function getBlogs(){
  var req = new XMLHttpRequest();
  req.open("GET", "https://pages-blog.firebaseio.com/.json");
  req.onload = function(){
  console.log(req);
  if (200 <= this.status < 400){
    // console.log(this.response);
    var res = JSON.parse(this.response);
    var elemStr = "";
    blogs.length = 0; // empties the array
    for (var prop in res){
      res[prop]._id = prop;
      blogs.push(res[prop]);
      elemStr += "<hr><br><li><b><a type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target=''#myModal'>" + res[prop].title + "</a></b> "
      <div id='myModal' class='modal fade' role='dialog'>
        <div class='modal-dialog'>

          <!-- Modal content-->
          <div class='modal-content'>
            <div class='modal-header'>
              <button type='button' class='close' data-dismiss='modal'>&times;</button>
              <h4 class='modal-title'>res[prop].title</h4>
            </div>
            <div class='modal-body'>
              "<hr><li><b>" + res[prop].title + "</a></b>: " + res[prop].description + " <br> " + res[prop].body + "<br><br> Author:" +  res[prop].author + "<br>" +  res[prop].date + "<br><br><button style='margin-left:10px; text-align:center;' class='btn btn-warning btn-sm' onclick='startEdit(" + (blogs.length - 1) + ")'>Edit</button></li>"

            </div>
            <div class='modal-footer'>
              <button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>
            </div>
          </div>

        </div>
      </div>



      //  + res[prop].description + " <br> " + res[prop].body + "<br><br> Author:" +  res[prop].author + "<br>" +  res[prop].date + "<br><br><button style='margin-left:10px; text-align:center;' class='btn btn-warning btn-sm' onclick='startEdit(" + (blogs.length - 1) + ")'>Edit</button></li>"
      console.log(res[prop]);
      $("#blogMessage").hide();
      $("#buttonsGoHere").html('');
    }
    document.getElementById('blogs').innerHTML = elemStr;
    // console.log(res);
    }else {
      console.log(this.response);
    }
  }
  req.send();
}
getBlogs();


// ORIGINAL HERE

// This function calls the server to display the data on the server (In the 'blogs' Array)
function getBlogs(){
  var req = new XMLHttpRequest();
  req.open("GET", "https://pages-blog.firebaseio.com/.json");
  req.onload = function(){
  console.log(req);
  if (200 <= this.status < 400){
    // console.log(this.response);
    var res = JSON.parse(this.response);
    var elemStr = "";
    blogs.length = 0; // empties the array
    for (var prop in res){
      res[prop]._id = prop;
      blogs.push(res[prop]);
      elemStr += "<hr><br><li><b>" + res[prop].title + "</b>: " + res[prop].description + " <br> " + res[prop].body + "<br><br> Author:" +  res[prop].author + "<br>" +  res[prop].date + "<br><br><button style='margin-left:10px; text-align:center;' class='btn btn-warning btn-sm' onclick='startEdit(" + (blogs.length - 1) + ")'>Edit</button></li>"
      console.log(res[prop]);
      $("#blogMessage").hide();
      $("#buttonsGoHere").html('');
    }
    document.getElementById('blogs').innerHTML = elemStr;
    // console.log(res);
    }else {
      console.log(this.response);
    }
  }
  req.send();
}
getBlogs();
