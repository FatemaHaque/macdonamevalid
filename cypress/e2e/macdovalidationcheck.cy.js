const formTestCases = [
  {
    name: 'John Dow', 
    email: 'info@example.com',
    phone: '01234567890',
    projectDescription: 'We need a cross-platform mobile application with user login, payment, and admin dashboard features.',
    price: '5000',
    shouldCheckTerms: true,
    expectedError: ''
  },
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
      cy.visit('https://software.bulipetech.com/');
      cy.get('.justify-end > .nav_btn').click();
      

      if (data.name) cy.get('input[name="businessName"]').type(data.name);
      if (data.email) cy.get('input[name="businessEmail"]').type(data.email);
      if (data.phone) cy.get('input[name="phone"]').type(data.phone);
      if (data.projectDescription) cy.get('textarea[name="projectDescription"]').type(data.projectDescription);
      if (data.price) cy.get('input[name="price"]').type(data.price);
      if (data.shouldCheckTerms) {
        cy.get('input[type="checkbox"]').check({ force: true });
      }

      cy.get('button[type="submit"]').click();
      
      

      
      if (data.expectedError) {
        cy.contains(data.expectedError).should('be.visible');
      } else {
        
        cy.contains('Failed to submit your quote request. Please try again.').should('be.visible'); 
      }
      
    });
  });
});



