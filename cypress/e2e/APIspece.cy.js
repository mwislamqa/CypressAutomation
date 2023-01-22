///<reference types ="Cypress" />

//const { name } = require("ejs")



describe('api testing',()=>{

    //fake data creation 
    const faker=require('faker')
    const fName=faker.name.firstName()
    const lName = faker.name.lastName()
    const email =faker.internet.email()
    const jonTitle = faker.name.jobTitle()
    const gender=faker.name.gender()
    const address=faker.address.city()
    const phoneNumber= faker.phone.phoneNumber()


it('get method',()=>{

//cy.get(Request.get("https:"))
cy.request({
    
        method : 'GET',
        url : 'https://reqres.in/api/users?page=2'

})
.then(res =>{
    //BDD assertion
    expect(res.status).to.eq(200)
    expect(res.body.data[0].first_name).to.eq('Michael')
    expect(res.body.data[0]).has.property('first_name','Michael')

})

})
// post request dynaic data call
let randomName=""
let randomText =""

it('post method 1',()=>{

  var pattern ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  for(var i=0; i<10;i++)
  randomText += pattern.charAt(Math.floor(Math.random() * pattern.length))
    randomName =randomText //+ "@gmail.com"

    cy.request({
        
            method : 'POST',
            url : 'https://reqres.in/api/users',
            body : {
                
                    "name": randomName,
                    "job": "leader"
                }
    })
    .then(res =>{
        expect(res.status).to.eq(201)
        expect(res.body.name).to.eq(randomName)
        expect(res.body).has.property('name',randomName)
        cy.log(JSON.stringify(res))
    })
    
    })

    //2nd post request
    it('post method faker data',()=>{


      
          cy.request({
              
                  method : 'POST',
                  url : 'https://reqres.in/api/users',
                  body : {
                      
                          "name": fName+ " "+lName,
                          "email":email ,
                          "gender": gender,
                          "job": jonTitle,
                          "address": address,
                          "phoneNumber": phoneNumber
                      }
          })
          .then(res =>{
              expect(res.status).to.eq(201)
              expect(res.body.name).to.eq(fName+ " "+lName)
              expect(res.body).has.property('name',fName+ " "+lName)
              expect(res.body).has.property('email',email)
              cy.log(JSON.stringify(res))
          })
          
          })
    


})