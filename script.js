var disp = 0;
function oops(){
    disp ++;
    if(disp%2!=0){
        document.getElementById("oops").innerHTML="Future Projects are yet to be updated . Keep in touch or  <a class='oopslink' href='#contact'>subscribe</a>  for updates"
    }
    else{
        document.getElementById("oops").innerHTML=""
    }
}

var i=10;

function pst(){
    document.getElementById("pstbutton").style.display="none";
    document.getElementById("psttxt1").innerHTML="No Bootstrap / React were harmed in making of this Portfolio <div style='color:darkorange'> For Best Experience View in Google Chrome</div>"
    var interval = setInterval(() => {
        console.log(i);
        document.getElementById("psttxt2").innerHTML="This Message will self - destruct in "+i+" seconds"
        i--;
        if(i==0){
            clearInterval(interval)
        }
    }, 1000);
    
    setTimeout(()=>{
        document.getElementById("psttxt1").style.display="none";
        document.getElementById("psttxt2").style.display="none";
        
    },11000)
}


const scriptURL ="https://script.google.com/macros/s/AKfycbwoJ0lMOlNaCp0_wpzkcutISBL6FM16QGEIQg8J2cuPGOJO8HY/exec"
const form = document.forms['submit-to-google-sheet']


function contact(e){
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    console.log(name,email)


}

