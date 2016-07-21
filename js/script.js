function m_1_Down(obj) {
    obj.src="img/cat1_inverse.jpg";
}

function m_1_Up(obj) {
    obj.src="img/cat1.jpg";
}

function m_2_Down(obj) {
    obj.src="img/cat2_inverse.jpg";
}

function m_2_Up(obj) {
    obj.src="img/cat2.jpg";
}

function m_3_Down(obj) {
    obj.src="img/cat3_inverse.jpg";
}

function m_3_Up(obj) {
    obj.src="img/cat3.jpg";
}

function m_4_Down(obj) {
    obj.src="img/cat4_inverse.jpg";
}

function m_4_Up(obj) {
    obj.src="img/cat4.jpg";
}

function m_5_Down(obj) {
    obj.src="img/cat5_inverse.jpg";
}

function m_5_Up(obj) {
    obj.src="img/cat5.jpg";
}


var eating_1_bool=false;
var eating_2_bool=false;
var eating_3_bool=false;
var eating_4_bool=false;
var eating_5_bool=false;
function eating_1(){
    if(eating_1_bool){
        document.getElementById("cat_1").src="img/cat1.jpg";
    }
    else{
        document.getElementById("cat_1").src="img/eating.jpg";
    }
    if(eating_1_bool===false){
        eating_1_bool=true;    
    }
    else{
        eating_1_bool=false;
    }
    
}
function eating_2(){
    if(eating_2_bool){
        document.getElementById("cat_2").src="img/cat2.jpg";
    }
    else{
        document.getElementById("cat_2").src="img/eating.jpg";
    }
    if(eating_2_bool===false){
        eating_2_bool=true;    
    }
    else{
        eating_2_bool=false;
    }
}
function eating_3(){
    if(eating_3_bool){
        document.getElementById("cat_3").src="img/cat3.jpg";
    }
    else{
        document.getElementById("cat_3").src="img/eating.jpg";
    }
    if(eating_3_bool===false){
        eating_3_bool=true;    
    }
    else{
        eating_3_bool=false;
    }
    
}
function eating_4(){
    if(eating_4_bool){
        document.getElementById("cat_4").src="img/cat4.jpg";
    }
    else{
        document.getElementById("cat_4").src="img/eating.jpg";
    }
    if(eating_4_bool===false){
        eating_4_bool=true;    
    }
    else{
        eating_4_bool=false;
    }
}
function eating_5(){
    if(eating_5_bool){
        document.getElementById("cat_5").src="img/cat5.jpg";
    }
    else{
        document.getElementById("cat_5").src="img/eating.jpg";
    }
    if(eating_5_bool===false){
        eating_5_bool=true;    
    }
    else{
        eating_5_bool=false;
    }
}



function getUrlVars() {//url>>值 的function
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	vars[key] = value;
	});
	return vars;
}
var first = getUrlVars()["location"];
var second = getUrlVars()["FirstName"];


var radios = document.getElementsByName('catName');






function RadioBtn(){
    var breeds = document.getElementById('inputBreed').value;

    if(radios[0].checked && breeds===""){
        eating_1();
        eating_2();
        eating_3();
        eating_4();
        eating_5();
    }
    else if(radios[1].checked && breeds===""){
        eating_1();
    }
    else if(radios[2].checked && breeds===""){
        eating_2();
    }
    else if(radios[3].checked && breeds===""){
        eating_3();
    }
    else if(radios[4].checked && breeds===""){
        eating_4();
    }
    else if(radios[5].checked && breeds===""){
        eating_5();
    }
    else if(breeds!=""){
        if(breeds==="ragdoll"){
            if(radios[0].checked){
                eating_1();
                eating_5();
            }
            else if(radios[1].checked){
                eating_1();
            }
            else if(radios[5].checked){
                eating_5();
            }
        }
        else if(breeds==="ring"){
            if(radios[0].checked){
                eating_2();
                eating_3();
            }
            else if(radios[2].checked){
                eating_2();
            }
            else if(radios[3].checked){
                eating_3();
            }
        }
        else if(breeds==="tardar"){
            if(radios[0].checked){
                eating_4();
            }
            else if(radios[4].checked){
                eating_4();
            }
        }
    }
    
    
}



