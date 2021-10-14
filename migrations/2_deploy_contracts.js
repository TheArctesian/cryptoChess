var Token = artifacts.require("./Token.sol");

//artifacts are contract abstractions for truffle

module.exports = function (deployer) {
    deployer.deploy(Token);
};

/* 
to test ran 
```
truffle migrate
Token.deploy().then(function(i){token=i;})
    returned undefined 
Token.address
    returned '0x02812Ea9bf2986B9b519ba1F763682ef73599fc4'
token.totalSupply().then(function(s){totalSupply = s;});
    returned undefined
totalSupply
    returned BN {
        negative: 0,
        words: [0, < 1 empty item > ],
        length: 1,
        red: null
    }
totalSupply.toNumber()
    returned 0 //problem 
*/