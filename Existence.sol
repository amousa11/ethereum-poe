pragma solidity ^0.4.15;


contract Existence {
    mapping(bytes32 => uint) proofs;

    event LogProof(bytes32 data, uint blockNumber);

    event CheckProof(bytes32 data, uint blockNumber);

    function prove(bytes32 data) constant returns (uint) {
        CheckProof(data, proofs[data]);
        return proofs[data];
    }

    function upload(bytes32 data) {
        require (proofs[data] == 0);
        proofs[data] = block.number;
        LogProof(data, block.number);
    }
}