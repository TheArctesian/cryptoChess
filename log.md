## Logs of progress 

Collection of every day I have worked on this project and mainly just a log of me divulging into madness 
## Log #1 

Day: Thursday 
Date: 14 October 2021

Reinstalled Node and NPM for the most current versions, installed truffle and Ganache. Following [Dapp University's](https://www.youtube.com/channel/UCY0xL8V6NzzFcwzHCgB8orQ) tutorial series for creating a EC20 blockchain. 

Problems: Not returning correct token supply 
```powershell
 0 passing (262ms)
  1 failing

  1) Contract: Token
       sets the total supply on deploy:

      The total supply is 100000
      + expected - actual

      -0
      +100000
```

was a problem with my truffle config and the solidity version so a set to "^0.8" but still fucked