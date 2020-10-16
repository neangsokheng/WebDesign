function login(){
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var checks=document.getElementsByName("one");
    var txt="";
    if(user!=""){
        if(pass!=""){
            if(email!=""){
                if(phone!=""){
                        var x=document.getElementsByName("one");
                        for(var i=0;i<x.length;i++){
                            if(x[i].checked){
                                alert("Scuess!");
                                txt=x[i].value;
                            }
                        }
                }else{
                    alert("Place Input Phone");
                }
            }else{
                alert("Place Input email");
            }
        }else{
            alert("Place Input Pass");
        }
    }
    else{
        alert("Place input User And Pass");
    }
    
}




var i=0;
function shows(){
 
   if(i==0){
        document.getElementById("show").style.display="none";
        i=1;
    }else if(i==1){
        document.getElementById("show").style.display="block";
        i=0;
   }
}


var arr=new Array();
    var i=0;
    function Views(){
        arr[i][0]=document.getElementById("user").value;
        arr[i][1]=document.getElementById("pass").value;
        arr[i][2]=document.getElementById("email").value;
        arr[i][3]=document.getElementById("phone").value;
        arr[i][4]=document.getElementsByName("one").value;
        var str="<table border=1>";
            str+="<tr><th>Username</th><th>PassWord</th><th>Email</th><th>Phone</th><th>Gender</th></tr>";
            for(i=0;i<arr.length;i++){
                str+="<tr><td>"+arr[i][0]+"</td><td>"+arr[i][1]+"</td><td>"+arr[i][2]+"</td><td>"+arr[i][3]+"</td><td>"+arr[i][4]+"</td></tr>";
            }
            str+="</table>";
            document.write(str);

    }








