const Employee = require("../lib/Employee");

test("create the employee object", ()=>{
    const e = new Employee();
  
    expect(typeof(e)).toBe("object");
  });

  test("sets the name of the constructor", ()=>{
    const name = 'ricky';
    const e = new Employee(name);
  
    expect(e.name).toBe(name);
  });
  
  test("sets the id of the constructor", ()=>{
    const valor = 1;
    const e = new Employee("ricky", valor);
  
    expect(e.id).toBe(valor);
  });
  
  test("sets the email of the constructor", ()=>{
    const valor = "ricky@gmail.com";
    const e = new Employee("ricky",1, valor);
  
    expect(e.email).toBe(valor);
  }); 