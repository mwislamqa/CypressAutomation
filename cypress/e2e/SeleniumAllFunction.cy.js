describe('SeleniumAllTest',()=>{
before('excute before all it block',()=>{
    cy.visit("http://softwaretesting-guru.blogspot.com/p/blog-page.html")
   //cy.log('open browser first')
    
})

it('lanching url',()=>{

cy.url().should('include','blogspot.com')
//.and('contian','softwaretesting-guru')
//.and('contian','gootball')
cy.title().should('eq','Software Testing Guru : Selenium Practice page')
.and('contain','Software')

})
it('input text',()=>{
cy.get("[name='Name']").type('selenium')
//cy.get("[name='Name']").should(be.visible)
})

it('selct check box',()=>{
cy.get("[name='subscribe']").check().should("be.checked")

})

it('send comments',()=>{
cy.get("[name='comments'][rows='7']").type('I love cypress automation. Its really cool .')
})

it('select from list',()=>{

     cy.get("[name='countries']")
     .select('Aruba')
    .should('have.value','Aruba')
})

it('password field',()=>{

    cy.get("[name=pwd]").type('mdislam123')
})

it('password field',()=>{

    cy.get("[value=excellent]").check()
    .should('be.checked')
})

it('submit pop popup',()=>{
    cy.wait(2000)
        cy.get("[value='Submit']").click()

        cy.on('window:alert',(text)=>{
            expect(text).to.equal(`Clicked`)
    
        })
    })
    

})