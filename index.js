//NAME: MISHA SOPHIA S. RILLORAZA
//STUDENT NUMBER: 2023-16578
//SECTION: CMSC 100 C-3L
//CODE DESCRIPTION: 
//CREATE 3 FUNCTIONS: VALIDATE, REVERSE, STORE PW
//REFERENCES: https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip

/*
//VALIDATE: compare if 2 pw match
//true:
// - two passwords match 
// - pw atleast 8 charas
// - at least 1 number, 1uppercase, 1lowercase
function validatePassword(password1, password2){
    if (password1 == password2){ //match
        if((password1.length && password2.length) >= 8){ //8 charas
            let comparison = password1; 
            let upperComparison = password1.toUpperCase(); //makes the pw into uppercase for comparison
            for (let i = 0; i >= password1.length; i++){
                if(comparison[i] == upperComparison[i]){ //check if one of the chara is upper
                    if(comparison[i] != upperComparison[i]){ //checks the lowercase
                        return true; 
                    }
                } 
            }
        } 
    }
    return false;
}
*/

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
reversePassword("John", "Pass1234", "Pass1234")


//STORE:   
//3 parameters: 1 name and 2 pws
//return an object (containing: name and newpassword as keys)
//if pw is valid: use reverse to create new pw
//else pw is not valid: use old pw for the new pw



