//NAME: MISHA SOPHIA S. RILLORAZA
//STUDENT NUMBER: 2023-16578
//SECTION: CMSC 100 C-3L
//REFERENCES: https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip
//https://www.geeksforgeeks.org/how-a-function-returns-an-object-in-javascript/

//VALIDATE
function validatePassword(password1, password2){
    if (password1 == password2){ //match
        if(password1.length >= 8 && password2.length >= 8){ //8 charas
            let comparison = password1; 
            let upperComparison = password1.toUpperCase(); //makes the pw into uppercase for comparison
            let hasUpper = false;  //initialize them to false first since we have to check 
            let hasLower = false;  //if each statement if they're true
            let hasNum = false;
            for (let i = 0; i < password1.length; i++){
                if (comparison[i] == upperComparison[i]){ //check if one of the chara is upper
                    hasUpper = true;
                } else { //check if one of them has a lower chara
                    hasLower = true;
                }

                if (comparison[i] >= '0' && comparison[i] <= '9' ){ //checks if the pw has a num
                    hasNum = true;
                }
            }

            //after checking, IF ALL CONDITIONS ARE MET = RETURN TRUE
            if (hasUpper && hasLower && hasNum){
                return true;
            }
        } 
    }
    return false;
}
//debug console.log(validatePassword("Pass1234", "Pass1234"));


//REVERSE: return reversed string of pw
function reversePassword(name, password1, password2){
    let emptyString = "";
    let size = password1.length; //get size of length of pw1

    for (let i = size - 1; i >= 0; i--) { 
        emptyString += password1[i]; 
    }
    //debug console.log(emptyString);
    return emptyString;
}
//debug console.log(reversePassword("John", "Pass1234", "Pass1234"))


//STORE: return an object (containing: name and newpassword as keys)
function storePassword(name, password1, password2){
    let newPassword;

    if(validatePassword(password1, password2)){
        newPassword = reversePassword(password1, password2); //if pw is valid: use reverse to create new pw
    } else {
        newPassword = password1; ////else pw is not valid: use old pw for the new pw
    }

    let person = {
        name: name,
        newPassword: newPassword
    };
    return person;

}
console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));



