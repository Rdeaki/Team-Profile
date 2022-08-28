const Employee = require("../lib/Employee");

test("create the employee object", ()=>{
    const e = new Employee();
  
    expect(typeof(e)).toBe("object");
  });
 