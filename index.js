let users = [
    {
        username: "yuva122",
        password: "password",
        name: "Yuvaraj",
        email: "yraj66770@gmail.com"
    },
    {
        username: "all",
        password: "123456",
        name: "All",
        email: "all@utem.edu.my"
    }
]

let dbUsers = 


function login(username, password) {
    console.log( "someone try to login")
    let matched = dbUsers.find(element => 
        element.username == username
    
    )
    if(matched) {
        if(matched.password == password) {
            return matched
        } else {
            return "Password not matched"
        }
    } else {
        return "Username not found"

    }
}

// try to login
//console.log( login("yuva122", "password") )
console.log( login("yuva122", "123456") )