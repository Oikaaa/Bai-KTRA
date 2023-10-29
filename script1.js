if (localStorage.getItem("accounts") === null){
    localStorage.setItem("accounts", JSON.stringify([]))
}

document.getElementById("button").addEventListener("click", function(){
    const fullName = document.getElementById("Fullname").value
    const email = document.getElementById("Email").value
    const password = document.getElementById("Password").value

    const accountUser = {
        fullname: fullName,
        email: email,
        password: password,
    }
    
    const accounts = JSON.parse(localStorage.getItem("accounts"))
    accounts.push(accountUser)
    localStorage.setItem("accounts", JSON.stringify(accounts))
})

accounts.forEach(function(item,index){
    const liTag = document.createElement("li");
    const accList = document.createElement("div");

    
    liTag.innerText = item.fullname;

    accList.appendChild("liTag");

    document.getElementById("container").appendChild("accList")
})

