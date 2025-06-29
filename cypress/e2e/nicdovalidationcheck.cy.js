const formTestCases = [
  {
    name: '', 
    email: 'info@example.com',
    phone: '01234567890',
    projectDescription: 'We need a cross-platform mobile application with user login, payment, and admin dashboard features.',
    price: '5000',
    shouldCheckTerms: true,
    expectedError: 'Business name is required'
  },
  {
    name: 'Acme Inc.',
    email: 'invalid-email', 
    phone: '01234567890',
    projectDescription: 'We need a cross-platform mobile application with user login, payment, and admin dashboard features.',
    price: '5000',
    shouldCheckTerms: true,
    expectedError: 'Please enter a valid email'
  },
  {
    name: 'Acme Inc.',
    email: 'info@example.com',
    phone: '', 
    projectDescription: 'We need a cross-platform mobile application with user login, payment, and admin dashboard features.',
    price: '5000',
    shouldCheckTerms: true,
    expectedError: 'Phone number is required'
  },
  {
    name: 'Acme Inc.',
    email: 'info@example.com', 
    phone: '01234567890',
    projectDescription: '.......',
    price: '5000',
    shouldCheckTerms: true,
    expectedError: 'Project description is required'
  },
  {
    name: 'Acme Inc.',
    email: 'info@example.com', 
    phone: '01234567890',
    projectDescription: 'We need a cross-platform mobile application with user login, payment, and admin dashboard features.',
    price: '5a0df0',
    shouldCheckTerms: true,
    expectedError: 'Please enter a valid number'
  },
  {
    name: 'Acme Inc.',
    email: 'info@example.com', 
    phone: '01234567890',
    projectDescription: 'We need a cross-platform mobile application with user login, payment, and admin dashboard features.',
    price: '5000',
    shouldCheckTerms: false,
    expectedError: 'You must agree to the terms'
  },

  
];

describe('Form Validation Tests', () => {
  formTestCases.forEach((data, index) => {
    it(`should show validation for test case ${index + 1}`, () => {
      cy.visit('https://nicdoweb.com/');
      cy.get('.bg-secondary').click();
       
      

      if (data.name) cy.get('input[name="firstName"]').type(data.name);
      if (data.email) cy.get('input[name="email"]').type(data.email);
      if (data.phone) cy.get('input[name="phone"]').type(data.phone);
      if (data.projectDescriptionhone) cy.get('textarea[name="message"]').type(data.projectDescriptionhone);
     

      cy.get('button[type="submit"]').click();
      
      

      
      if (data.expectedError) {
        cy.contains(data.expectedError).should('be.visible');
      } else {
        
        cy.contains('Your quote request has been submitted successfully!').should('be.visible'); 
      }
      
    });
  });
});