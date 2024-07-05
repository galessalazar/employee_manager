INSERT INTO department (name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ( 'Salesperson', 5000, 1),
       ( 'Lead Engineer',3500, 2 ),
       ('Software Engineer',10000, 2),
       ('Account Manager',65000, 3),
       ( 'Accountant',5000, 3),
       ( 'Legal Team Lead',66660, 3),
       ( 'Lawyer',5000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Bill', 'Jones', 1, null),
       ('Jackie', 'Brown', 2, null);
       
      


