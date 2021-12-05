import { server } from './config.js';

export async function getAccount(withdrawAddress, projectCode, amount) {
    // const response = await fetch(server + '/account/GetByWithdrawAddress?withdrawAddress=' + withdrawAddress + '&saleProjectCode=' + projectCode + '&amount=' + amount);
    
    
    const response = await fetch(server + '/account/GetByWithdrawAddress?withdrawAddress=' + withdrawAddress + '&saleProjectCode=' + projectCode + '&amount=' + amount).then((response) => {
      if (response.status >= 400 && response.status < 600) {
        var testJS = document.getElementById('js-error');
        testJS.innerHTML = "An error occured, please try again."
      }
      return response;
      });
    
    const accountData = await response.json();

    return accountData.account.id;
  }

  export async function getAccountById(accountId) {
    const response = await fetch(server + '/account/GetById?accountId=' + accountId);
    const accountData = await response.json();

    return accountData;
  }