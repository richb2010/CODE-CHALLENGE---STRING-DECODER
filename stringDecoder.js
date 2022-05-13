// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
// '2bna0p1mp2osl0e' => 'apple'
// '0y4akjfe0s' => 'yes'
















const decoder = (code) => {
    let decodedStr = ''
    for (let i = 0; i < code.length; i++){
        console.log('CURRENT CHARACTER', code[i]);
        i += parseInt(code[i]) + 1;
        console.log('ADJUSTED CHARACTER', code[i]);
        decodedStr += code[i];  
    }
    return decodedStr;
}

console.log(decoder('0h2xce5ngbrdy'));
console.log(decoder('3vdfn'));
console.log(decoder('0r'));
console.log(decoder('2bna0p1mp2osl0e'));
console.log(decoder('0y4akjfe0s'));