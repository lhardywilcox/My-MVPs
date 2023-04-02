INSERT INTO department (name)
VALUES ("Sales"),
        ("Service"),
        ("Parts");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 80000, 2),
        ("Assistant Manager", 60000, 2),
        ("Service Advisor", 40000, 2),
        ("Parts Counterperson", 40000, 3),
        ("Technician", 50000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Amanda", "Byrnes", 1, 1),
        ("Max", "Dupont", 2, 1),
        ("Terry", "Douglas", 3, 1),
        ("Jennifer", "Tracy", 4, 1),
        ("Forrest", "Nickelsen", 5, 1);
        