describe('My First Test', () => {
  
    it('Valid submission', () => {
     cy.visit('https://software.bulipetech.com/');
     cy.get('.justify-end > .nav_btn').click();

     cy.get('input[name="businessName"]').type('Fatema Haque').wait(1000);

    // Fill Business Email
    cy.get('input[name="businessEmail"]').type('abcd@gmail.com').wait(1000);

    // Fill Phone
    cy.get('input[name="phone"]').type('01234567890').wait(1000);

    // Select a time from the dropdown (assuming a <select> element or a custom dropdown)
    cy.get('#goodTime').select('Morning (9am - 12pm)').wait(1000); // Replace 'Morning' with actual option

    // Fill Requirements description if available
    cy.get('#requirements').select('Website Development').wait(1000);

    // Fill Project Description
    cy.get('textarea[name="projectDescription"]').type('We need a cross-platform mobile application with user login, payment, and admin dashboard features.');

    // Enter estimated budget (if it’s a text or number input)
    cy.get('input[name="price"]').type('5000').wait(1000);

    // Agree to terms if there's a checkbox
    cy.get('input[type="checkbox"]').check().wait(1000);

    // Submit the form
    cy.get('button[type="submit"]').click();
    });

    it('invalid submission',() => {
      
      cy.visit('https://software.bulipetech.com/');
      cy.get('.justify-end > .nav_btn').click();
      cy.scrollTo('bottom');
      cy.get('button[type="submit"]').click();
    });

    it('invalid submission2',() =>{


     cy.visit('https://software.bulipetech.com/');
     cy.get('.justify-end > .nav_btn').click();

     cy.get('input[name="businessName"]').type('......').wait(1000);

    // Fill Business Email
     cy.get('input[name="businessEmail"]').type('abcd@.com').wait(1000);

     cy.get('button[type="submit"]').click();
    });

    it.only('invalid submission3',() =>{


     cy.visit('https://software.bulipetech.com/');
     cy.get('.justify-end > .nav_btn').click();

     cy.get('input[name="businessName"]').type('......').wait(1000);

    // Fill Business Email
     cy.get('input[name="businessEmail"]').type('abcd@.com').wait(1000);

     cy.get('button[type="submit"]').click();
    



   

    

      
      
      
      // Step 1: Hover over the "Services" menu item
      //  cy.get(':nth-child(2) > .nav-link')
      //  .trigger('mouseover')

    // Step 2: Wait for submenu and click on "Mobile App Development"
      // cy.get('.text-base.text-emerald-500.font-medium')
      //  .trigger('mouseover')

    // Step 3: Click on "App Design & Prototyping" in the service detail page
    //  cy.select('App Design & Prototyping')
      //  .should('be.visible')
      //  .click()




    // cy.visit("https://software.bulipetech.com/")
    //cy.scrollTo('top'); 
    // cy.get('[class="hidden md:flex md:w-3/5 md:justify-center lg:w-auto lg:justify-between "]').contains ('Services').trigger('mouseover').wait(1000);
    //cy.get(':nth-child(6) > .nav-link').click()
    //cy.focused('[class="thrown-menu style-five dark"]').click() // Click on el with focus
    // cy.get('.mega-menu-item[href*="mobile-app-development"]').click();
    // cy.contains('App Design & Prototyping').click();
   
    
    //cy.get('[class=" font-medium hover:text-yellow-500 text-lg"]').click();
   
    
    
    
    
    
    
    //cy.get('.ytSearchboxComponentInputBox').type("javascript by tester talk");
    //cy.get('.ytSearchboxComponentSearchButton > yt-icon > .yt-icon-shape > div').click();
    //cy.title().should('eq','Hightech IT Support Services')
    //cy.get(':nth-child(6) > .nav-link').click()
    

   });
});
