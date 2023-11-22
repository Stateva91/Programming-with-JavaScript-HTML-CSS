function employees(input) {

    input.forEach(employee => {

        const firstName=employee;
        const personalNumber=employee.length;
        
        console.log(`Name: ${firstName} -- Personal Number: ${personalNumber}`);
    });
    
}


employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);