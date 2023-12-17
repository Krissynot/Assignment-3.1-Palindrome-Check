function String()
{
    var String1 = document.getElementById("initString").value;
    var String2 = document.getElementById("2ndString").value;

    document.getElementById("Str1Display").innerHTML = "You input " + String1
    document.getElementById("Str2Display").innerHTML = "You input " + String2
    
    var String3 = String1 + String2;
    var len = String3.length;

    //document.getElementById("StrUpdate").innerHTML = "concatenate of 1 and 2 = " + len;
    //1st element of string = 0, first 3 chars, (0,3)
    String3 = String1.substring(0,3);
   // document.getElementById("StrUpdate").innerHTML = "substing starting at 0 length 3 = " + String3;

   String3 = String1.replace(/qwe/, "asd");
  // document.getElementById("StrUpdate").innerHTML = "replaceqwe with asd 1x = " + String3;
   String3 = String3.toLowerCase();
   String3 = String3.replace(/qwe/g, "asd");
   //document.getElementById("StrUpdate").innerHTML = "replace all qwe with asd 1x = " + String3;
  
   String3 = String1.split("");
   //document.getElementById("StrUpdate").innerHTML = "SPLIT " + String3;

   String3 = String3.reverse();
   //document.getElementById("StrUpdate").innerHTML = "REVERSE " + String3;

   String3 = String3.join("");
   //document.getElementById("StrUpdate").innerHTML = "JOIN " + String3;

   String3 = String1


  var i
  var reversed = "";  
  
   for (i= String3.length-1; i >=0;i--)
{
    reversed += String3[i]; //reverse = reverse + String3[i]
}

document.getElementById("StrUpdate").innerHTML = "reversed using loop" + String3;

}