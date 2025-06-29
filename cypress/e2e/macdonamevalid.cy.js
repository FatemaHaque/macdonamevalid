const nameTestCases = [
  { input: '123456', expectedError: 'Business name cannot contain emojis or special characters' },
  { input: '@username', expectedError: 'Business name can only contain letters, spaces, and dots' },
  { input: 'John_Doe', expectedError: 'Business name can only contain letters, spaces, and dots' },
  { input: 'A', expectedError: 'Business name must be at least 2 characters' },
  { input: 'John Doe 123', expectedError: 'Business name cannot contain emojis or special characters' },
  { input: '"John Doe"', expectedError: 'Business name cannot contain quotes' },
  { input: '   ', expectedError: 'Business name is required' },
  { input: 'John!@#Doe', expectedError: 'Business name cannot contain emojis or special characters' },
  { input: 'John@Doe.com', expectedError: 'Business name can only contain letters, spaces, and dots' },
  { input: '123 Main Street', expectedError: 'Business name cannot contain emojis or special characters' },
  { input: 'Jane-Doe-', expectedError: 'Business name can only contain letters, spaces, and dots' },
  { input: 'Mr. & Mrs. Smith', expectedError: 'Business name can only contain letters, spaces, and dots' },
  { input: 'OConnor!', expectedError: 'Business name can only contain letters, spaces, and dots' },
  { input: 'John Doe', expectedError: '' }, 
  { input: '👨‍💻🚀🎉', expectedError: 'Business name cannot contain emojis or special characters' },
  { input: '    John Doe', expectedError: 'Business name can only contain letters, spaces, and dots' },
  { input: 'Doe, John', expectedError: 'Business name can only contain letters, spaces, and dots' },
  { input: 'John\tDoe', expectedError: 'Business name can only contain letters, spaces, and dots' },
  { input: 'Doe-John!', expectedError: 'Business name can only contain letters, spaces, and dots' },
  { input: '__________', expectedError: 'Business name can only contain letters, spaces, and dots' },
  { input: '(John Doe)', expectedError: 'Business name can only contain letters, spaces, and dots' },
  { input: 'ThisNameIsWayTooLongForARealisticPersonAndShouldNotBeAllowed', expectedError: 'Business name cannot exceed 50 characters' },
  { input: 'NULL', expectedError: 'Invalid name' },
  { input: 'undefined', expectedError: 'Invalid name' },
  { input: 'SELECT * FROM users;', expectedError: 'Business name cannot contain emojis or special characters' },
  { input: 'alert("Hacked!")', expectedError: 'Business name cannot contain quotes' },
  { input: "alert('XSS')", expectedError: 'Business name can only contain letters, spaces, and dots' },
  { input: 'Mr. John', expectedError: '' } 
];



describe('Name Field Validation', () => {
  nameTestCases.forEach((testCase, index) => {
    it(`Test ${index + 1}: Name = "${testCase.input}"`, () => {
      cy.visit('https://www.macdosoft.com/');
      cy.get('.justify-end > .nav_btn').click();
      cy.scrollTo('bottom');

      
      cy.get('input[name="businessName"]').clear().type(testCase.input);

      
      cy.get('input[name="businessEmail"]').type('valid@example.com');
      cy.get('input[name="phone"]').type('01234567890');
      cy.get('textarea[name="projectDescription"]').type('sdfghjkjhgfdsfghhgfdfghkjhghjk');
      cy.get('input[name="price"]').type('76569');
      cy.get('input[type="checkbox"]').check({ force: true });

      
      cy.get('button[type="submit"]').click();

      if (testCase.expectedError) {
        cy.contains(testCase.expectedError).should('be.visible');
      } else {
        
        cy.contains('Failed to submit your quote request. Please try again.').should('be.visible'); 
      }
    });
  });
});


const emailTestCases = [
  { input: 'plainaddress', expectedError: 'Please enter a valid email address' },
  { input: '@missinglocal.com', expectedError: 'Please enter a valid email address' },
  { input: 'username@.com', expectedError: 'Please enter a valid email address' },
  { input: 'username@com', expectedError: 'Please enter a valid email address' },
  { input: 'user    name@email.ca', expectedError: 'Please enter a valid email address' },
  { input: 'username@domain..com', expectedError: 'Please enter a valid email address' },
  { input: 'username@domain,com', expectedError: 'Please enter a valid email address' },
  { input: 'username@domain@another.com', expectedError: 'Email cannot contain multiple @ symbols' },
  { input: 'username@domain.c', expectedError: 'Please enter a valid email address' },
  { input: '.username@email.com', expectedError: 'Please enter a valid email address' },
  { input: 'username@-domain.com', expectedError: 'Please enter a valid email address' },
  { input: 'username@domain-.com', expectedError: 'Please enter a valid email address' },
  { input: 'username@domain..co.uk', expectedError: 'Please enter a valid email address' },
  { input: '"username"@domain.com', expectedError: 'Please enter a valid email address' },
  { input: 'user@name@domain.com', expectedError: 'Email cannot contain multiple @ symbols' },
  { input: 'username@.sub.domain.com', expectedError: 'Please enter a valid email address' },
  { input: 'user..name@domain.com', expectedError: 'Please enter a valid email address' },
  { input: 'user_name@domain..com', expectedError: 'Please enter a valid email address' },
  { input: 'user@domain#$.com', expectedError: 'Please enter a valid email address' },
  { input: 'user@[192.168.1.1]', expectedError: 'Please enter a valid email address' },
  { input: 'username@domain.corporate', expectedError: 'Please enter a valid email address' } 
];


describe('Email Field Validation', () => {
  emailTestCases.forEach((testCase, index) => {
    it(`Email test ${index + 1}: "${testCase.input}"`, () => {
      cy.visit('https://www.macdosoft.com/');
      cy.get('.justify-end > .nav_btn').click();
      cy.scrollTo('bottom');

      
      cy.get('input[name="businessName"]').type('Valid Company');
      cy.get('input[name="businessEmail"]').type(testCase.input);
      cy.get('input[name="phone"]').type('01234567890');
      cy.get('textarea[name="projectDescription"]').type('sdfghjkjhgfdsfghhgfdfghkjhghjk');
      cy.get('input[name="price"]').type('76569');
      cy.get('input[type="checkbox"]').check({ force: true });

      
      cy.get('button[type="submit"]').click();

      
      cy.contains(testCase.expectedError).should('be.visible');
    });
  });
});

