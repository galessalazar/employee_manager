INSERT INTO department (department_name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ("Legal");

INSERT INTO role (department_id, role_name),
VALUES (1, 'Salesperson'),
       (2, 'Lead Engineer'),
       (3,'Software Engineer'),
       (4,'Account Manager'),
       (5, 'Accountant'),
       (6, 'Legal Team Lead'),
       (7, 'Lawyer');

INSERT INTO employee (first_name, last_name, role_id, manager_id),
VALUES ('first_name'),
       ('last_name'),
       ('role_id'),
       ('manager_id');


