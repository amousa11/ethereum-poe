var IOTA = require('iota.lib.js');

var iota = new IOTA({
    'host': 'http://45.77.4.212',
    'port': 14265
});
//create an array of hashes. This should get its values from the react front end
const POE = { 
    getHash: function (hash, onSuccess, onFail) {
        if (iota.valid.isArrayOfHashes([hash])){
            iota.api.getNodeInfo(function(error, success) {
                if (error) {
                    onFail(error);
                } else {
                    iota.api.getTransactionsObjects([hash], function(error, success) {
                        if (error) {
                            onFail(error);
                        } else {
                            onSuccess(success); // success!
                        }
                    });
                }
            });
        }
        else {
            onFail("invalid hash");
        }
    },

    commitHash: function (seed, doc) {

        iota.api.sendTransfer('YRBIARWWUFSGYDQFFISFXGFHZZVZ9YKKJZFCQKM9ENZGSXDQJLPTRONRPKWWFZXDBSEQOUIWVXZFCVRKH', 5, 8, [{
            'address': 'ADQIFLUGSHOUWDODBIBJUDXHXRHOESIAWDZSIRLDPSOJXSRBVHDHYISQDG9YQPPOJ9JMU9OAUAFYLPPAQXWYHDUAOR',
            'value':1,
        }], function(error, success) {
            if (error) {
                console.error(error);
            } else {
                console.log(success);
            }
        })

    }
}

module.exports = POE; 


