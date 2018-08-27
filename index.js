var customerName = 'bob';

upperCaseCustomerName = () => {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob"
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'jim'

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'pam'
}
