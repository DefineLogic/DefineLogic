var accountInfoList = [];

class Account {
    constructor(name, deposit) {
        this.name = name;
        this.deposit = deposit;
    }
}

var MODULE = (function() {
    return {
        createAccount: function() {
            let name = document.getElementById("name").value;
            let deposit = document.getElementById("deposit").value;
            let account = new Account(name, deposit);
            accountInfoList.push(account);
            let txt = "";
            for (let i = 0; i < accountInfoList.length; i++) {
                txt += "Account name:  " +
                    accountInfoList[i].name +
                    "  Balance:  " +
                    accountInfoList[i].deposit +
                    "\n";
            }
            document.getElementsByTagName("textarea")[0].value = txt;
        }
    }
})();

var createAccount = MODULE.createAccount;