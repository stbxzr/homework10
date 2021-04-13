const Employee = require("../lib/Employee")

describe('Employee', () =>{

    // name
    it('should return..', () => {

        let employeeName = "julian";
        let newEmployee = new Employee("julian");
        expect(newEmployee.name).toBe("julian");
        expect(newEmployee.getName()).toBe("julian");
        
    });
    // id
    id
    it('should return..', () => {

        let employeeId = "10";
        let newId = new Employee("", 10);
        expect(newId.id).toBe(10);
        expect(newId.getId()).toBe(10);
        
    });
    // email
    email
    it('should return..', () => {

        let employeeEmail = "julian@yahoo.com";
        let newEmail = new Employee("", "", "julian@yahoo.com");
        expect(newEmail.email).toBe("julian@yahoo.com"); 
        expect(newEmail.getEmail()).toBe("julian@yahoo.com");
        
    });

    

});  


