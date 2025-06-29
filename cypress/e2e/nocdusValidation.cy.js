const formTestCases = [
 {
    name: '....',
    email: 'info@example.com', 
    phone: '01234567890',
    message: 'We need a cross-platform mobile application with user login, payment, and admin dashboard features.',
    expectedError: 'Name cannot start with a dot'

  },
  
  {
    name: 'Acme Inc.',
    email: '', 
    phone: '01234567890',
    message: 'We need a cross-platform mobile application with user login, payment, and admin dashboard features.',
    expectedError: 'Email is required'
  },
  {
    name: 'Acme Inc.',
    email: 'info@example.com',
    phone: '', 
    message: 'We need a cross-platform mobile application with user login, payment, and admin dashboard features.',
    expectedError: 'Phone number is required'
  },
  {
    name: 'Acme Inc.',
    email: 'info@example.com',
    phone: 'esxdedfr', 
    message: 'We need a cross-platform mobile application with user login, payment, and admin dashboard features.',
    expectedError: 'Please enter a valid phone number'
  },
  
  {
    name: 'Acme Inc.',
    email: 'info@example.com',
    phone: '019828e347746', 
    message: '',
    expectedError: 'Message is required'
  },
  {
    name: 'Acme Inc.',
    email: 'info@example.com',
    phone: '01837873474', 
    message: 'asdwik',
    expectedError: 'Message must be at least 10 characters'
  },

  
];

describe('Form Validation Tests', () => {
  formTestCases.forEach((data, index) => {
    it(`should show validation for test case ${index + 1}`, () => {
      cy.visit('https://nocdus.com/');
      cy.get('.col-lg-8 > .thrown-btn > .header-button').click({ force: true });
      

      if (data.name) cy.get('input[name="name"]').type(data.name);
      if (data.name1) cy.get('input[name="name"]').type(data.name1);
      if (data.email) cy.get('input[name="email"]').type(data.email);
      if (data.phone) cy.get('input[name="phone"]').type(data.phone);
      if (data.message) cy.get('textarea[name="message"]').type(data.message);
     

      cy.get('button[type="submit"]').click();
      
      

      
      if (data.expectedError) {
        cy.contains(data.expectedError).should('be.visible');
        

      } else {
        
        cy.contains('Your contact request has been submitted successfully!').should('be.visible'); 
      }
      
    });
  });
});

