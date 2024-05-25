/**
 * - Register spec
 *   - should display register page correctly
 *   - should display alert when name is empty
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email not valid and password are wrong
 *   - should display login when email and password are correct
 */
describe('Register spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register');
  });

  it('should display register page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman register
    cy.get('input[placeholder="Name"]').should('be.visible');
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Register$/).should('be.visible');
  });

  it('should display alert when name is empty', () => {
    // mengisi email
    cy.get('input[placeholder="Email"]').type('testuser@example.com');
    // mengisi password
    cy.get('input[placeholder="Password"]').type('testuser123456');

    // klik tombol register tanpa mengisi name
    cy.get('button').contains(/^Register$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"name" is not allowed to be empty');
    });
  });

  it('should display alert when email is empty', () => {
    // mengisi name
    cy.get('input[placeholder="Name"]').type('testusernew');
    // mengisi password
    cy.get('input[placeholder="Password"]').type('testuser123456');
    // klik tombol register tanpa mengisi email
    cy.get('button').contains(/^Register$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // mengisi name dengan benar
    cy.get('input[placeholder="Name"]').type('testusernew');
    // mengisi email dengan benar
    cy.get('input[placeholder="Email"]').type('testuser@example.com');

    // klik tombol register tanpa mengisi password
    cy.get('button').contains(/^Register$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email not valid and password are wrong', () => {
    // mengisi email yang salah tidak sesuai format
    cy.get('input[placeholder="Email"]').type('notvalid_email');

    // mengisi password yang salah
    cy.get('input[placeholder="Password"]').type('wrong_password');

    // menekan tombol Register
    cy.get('button').contains(/^Register$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email not valid and password wrong');
    });
  });

  it('should display login when email and password are correct', () => {
    // mengisi name dengan benar
    cy.get('input[placeholder="Name"]').type('testusernew');

    // mengisi email dengan benar
    cy.get('input[placeholder="Email"]').type('testuser@example.com');

    // mengisi password dengan benar
    cy.get('input[placeholder="Password"]').type('test123456');

    // menekan tombol Register
    cy.get('button').contains(/^Register$/).click();

    // memverifikasi bahwa elemen yang berada di login ditampilkan
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });
});
