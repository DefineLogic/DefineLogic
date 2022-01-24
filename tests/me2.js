// Private Field: name
// Private Field: age
// Private Field: salary
// Public Method: setAge(newAge)
// Public Method: setSalary(newSalary)
// Public Method: setName(newName)
// Private Method: getAge( )
// Private Method: getSalary( )
// Private Method: getName( )
// Public Method: increaseSalary(percentage) // uses private getSalary( )
// Public Method: incrementAge( ) // uses private getAge( ) 

//Revealing Module Pattern.
// var employee = (function() {
//     var name;
//     var age;
//     var salary;
//     var getAge = function() {
//         return age;
//     }
//     var getSalary = function() {
//         return salary;
//     }

//     var getName = function() {
//         return name;
//     }

//     var setAge = function(newAge) {
//         age = newAge;
//     }
//     var setSalary = function(newSalary) {
//         salary = newSalary;
//     }
//     var setName = function(newName) {
//         name = newName;
//     }

//     var incrementAge = function() {
//         age = getAge() + 1;
//         return age;
//     }

//     var incrementSalary = function(percentage) {
//         salary = getSalary() * percentage / 100 + getSalary();
//         return salary;
//     }
//     return {
//         setAge: setAge,
//         setSalary: setSalary,
//         setName: setName,
//         incrementAge: incrementAge,
//         incrementSalary: incrementSalary
//     }
// })();

// employee.setAge(25);
// employee.setName("Shyam");
// employee.setSalary(30000);
// console.log(employee.incrementAge());
// console.log(employee.incrementSalary(1))

//Anonymous Object Literal Return Pattern
// var employee = (function() {
//     var name;
//     var age;
//     var salary;
//     var getAge = function() {
//         return age;
//     }
//     var getSalary = function() {
//         return salary;
//     }

//     var getName = function() {
//         return name;
//     }

//     return {
//         setAge: function(newAge) {
//             age = newAge;
//         },
//         setSalary: function(newSalary) {
//             salary = newSalary;
//         },
//         setName: function(newName) {
//             name = newName;
//         },
//         incrementAge: function() {
//             age = getAge() + 1;
//             return age;
//         },
//         incrementSalary: function(percentage) {
//             salary = getSalary() * percentage / 100 + getSalary();
//             return salary;
//         }
//     }
// })();

// employee.setAge(25);
// employee.setName("Shyam");
// employee.setSalary(30000);
// console.log(employee.incrementAge());
// console.log(employee.incrementSalary(1));


//Locally Scoped Object Literal Pattern
var employee = (function() {
    var name;
    var age;
    var salary;
    var getAge = function() {
        return age;
    }
    var getSalary = function() {
        return salary;
    }

    var getName = function() {
        return name;
    }
    var myObject = new Object();
    myObject.setAge = function(newAge) {
        age = newAge;
    };
    myObject.setSalary = function(newSalary) {
        salary = newSalary;
    };
    myObject.setName = function(newName) {
        name = newName;
    };
    myObject.incrementAge = function() {
        age = getAge() + 1;
        return age;
    };
    myObject.incrementSalary = function(percentage) {
        salary = getSalary() * percentage / 100 + getSalary();
        return salary;
    };
    return myObject;
})();

employee.setAge(25);
employee.setName("Shyam");
employee.setSalary(30000);
console.log(employee.incrementAge());
console.log(employee.incrementSalary(1));
employee.address = "";
employee.getAddress = function() {
    return address;
}
employee.setAddress = function(newAddress) {
    address = newAddress;
}

employee.setAddress("iowa");
console.log(employee.getAddress());