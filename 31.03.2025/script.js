function myFunction()
{
    let h1_Obj = document.getElementById("hello")
    let user_name = document.getElementById("inputname")
    let sur_name = document.getElementById("inputsurname")
    let age_name = document.getElementById("inputage")

    h1_Obj.innerText = "Hello," + user_name.value + "1";
    console.log(user_name.value);
    console.log(sur_name.value);
    console.log(age_name.value);

    if(age_name.value <= 0 || age_name.value.match(0-9))
    {
        alert("error: age is invalid");
        return;
    }

    if(user_name.value <= 0 || user_name.value.match(0-9))
        {
            alert("error: age is invalid");
            return;
        }    

    let table = document.getElementById("mytable");
    let row = table.insertRow 
    let cell1 = row.InsertCell();
    let cell2 = row.InsertCell();
    let cell3 = row.InsertCell(); 
    cell1.innerHTML = user_name.value;
    cell2.innerHTML = sur_name.value;
    cell3.innerHTML = age_name.value;
}