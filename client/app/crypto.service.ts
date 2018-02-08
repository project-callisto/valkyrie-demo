// classes ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

var $ = require('jquery');

// all of crypto functions
export class CryptoService {
    run() {
        var record = {
            perpName: 'harvey weinstein',
            perpEmail: 'harvey@weinstein.com'
        }

        for (var i = 0; i < 2; i++) {
            $.post('http://localhost:8080/postPerpId', {
                'pid':'https://www.facebook.com/weinsteinharvey/?ref=br_rs'
              }, function(data, status) {
                  // output from PRF
                var rid = parseInt(data.rid, 16);
                console.log('original rid: ',rid)

            });
        }
    }
}

