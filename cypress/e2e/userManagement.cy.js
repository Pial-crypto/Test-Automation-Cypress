import AdminPage from '../pages/AdminPage';
import AddUserPage from '../pages/AddUserPage';
import EditUserPage from '../pages/EditUserPage';
import { buildUserData } from '../utils/userDataFactory';

describe('OrangeHRM - Admin User Management', () => {
  let userData;

 
  beforeEach(() => {
    cy.fixture('userData').then((baseData) => {
      userData = buildUserData(baseData);
    });
  });

  it('should create a new user, search by username and verify the saved details', () => {
  
    cy.login();

  
    AdminPage.openFromMenu();


    AdminPage.clickAdd();
    AddUserPage.fillUserForm(userData);
    AddUserPage.save();

   
    AdminPage.searchByUsername(userData.username);
    AdminPage.assertSingleRecordFound(userData.username);

   
    AdminPage.openUserRecord(userData.username);
    cy.get('@selectedEmployeeName').then((employeeName) => {
      EditUserPage.assertUserDetails({ ...userData, employeeName });
    });
  });
});