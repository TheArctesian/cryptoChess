var Token = artifacts.require("./Token.sol");

contract('Token', function(accounts){
    it('sets the total supply on deploy', function() {
        return Token.deployed().then(function(instance) {
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply) {
            assert.equal(totalSupply.toNumber(), 100000, 'The total supply is 100000');
        })
    })
})