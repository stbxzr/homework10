const Employee = require("../lib/Employee")

describe('Employee', () =>{

    // name
    it('should return..', () => {

        let employeeName = "";
        let newEmployee = new Employee("");
        expect(newEmployee.name).toBe("");
        
    });

    // id
    // it('should return..', () => {

    //     let employeeId = "";
    //     let newId = new Employee("");
    //     expect(newId.id).toBe("");
        
    // });

    // email
    // it('should return..', () => {

    //     let employeeEmail = "";
    //     let newEmail = new Employee("");
    //     expect(newEmail.email).toBe("");
        
    // });

    
    getName(){
        
    }
    
    getId(){
        
    }
    
    getEmail(){
        
    }
    
    getRole(){
        return 'Employee'
    } 
});  


