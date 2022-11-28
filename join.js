var id;
var pw;
var pw_check;
var U_name;
var sex;
var pass;
var ipBirth_y;
var ipBirth_m;
var ipBirth_d;

var IP_id;
var IP_pw;
var IP_check;
var IP_name;
var IP_Sexes;
var IP_pass;
var birth_y;
var birth_m;
var birth_d;


window.onload = function(){
    IP_id=document.getElementById("id");
    IP_pw=document.getElementById("pw");
    IP_check=document.getElementById("pw_check");
    IP_name=document.getElementById("U_name");
    IP_Sexes=document.getElementsByName("sex");
    ipBirth_y=document.getElementById("birth_y");
    ipBirth_m=document.getElementById("birth_m");
    ipBirth_d=document.getElementById("birth_d");
    // IP_pass=document.getElementsByName("pass");
}

function check(){
    id=IP_id.value;  
    pw=IP_pw.value;  
    pw_check=IP_check.value;  
    U_name=IP_name.value; 
    sex=IP_Sexes.value;
    birth_y=ipBirth_y.value;
    birth_m=ipBirth_m.value;
    birth_d=ipBirth_d.value;
    // pass=IP_pass.value; 

    for(var i=0;i<IP_Sexes.length;i++){
        if(IP_Sexes[i].checked==true){
            sex = IP_Sexes[i].value;
        }
    }
    if(checkId() && checkPw() && checkPw_Check()&&checkUserName()&&check_Check()){
        alert("회원가입 완료");
    } else {
        alert("회원가입 실패");
    }
}
function pass_C(){
    if(IP_pw.value==IP_check.value){
        alert("확인 되었습니다.")
    } else {
        alert("다시 확인해 주세요")
    }
}

function checkId(){
    if(id.length>=4 && id.length<=12){
        console.log("ok id");
        return true;
    } else {
        console.log("no id");
        return false;
    }
}
function checkPw(){
    if(pw.length>=4 && pw.length<=12){
        console.log("ok pw");
        return true;
    } else {
        console.log("no pw");
        return false;
    }
}
function checkPw_Check(){
    if(pw_check.length>=4 && pw_check.length<=12){
        console.log("ok pw_check");
        return true;
    } else {
        console.log("no pw_check");
        return false;
    }
}
function checkUserName(){
    if(U_name.length>=3 && U_name.length<=8){
        console.log("ok name");
        return true;
    } else {
        console.log("no name");
        return false;
    }
}
function check_Check(){
    if(pw==pw_check){
        console.log("ok pw_check");
        return true;
    } else {
        console.log("no pw_check");
    }   return false;
}