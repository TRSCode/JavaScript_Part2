const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(), 
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    return newUser;
};

// implied return method
const createCompany = () => ({
    _id: faker.datatype.uuid(),
    companyName: faker.company.name(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    },
});

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    console.log(newUser);
    res.json(newUser);
    // or (replaces const newUser = createUser() and res.json(newUser))
    // res.json(createUser())
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const combinedObject = {
        user: newUser,
        company: newCompany,
    }
    res.json(combinedObject);
    // or (without the last 7 lines)
    // res.json({user: createUser, company: createCompany()})
});

app.listen( port, () => console.log(`Listening on port: ${port}`));




