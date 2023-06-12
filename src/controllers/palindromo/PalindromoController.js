exports.validPalindrome = (req, res) => {
  async function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return res.send(reverseStr === lowRegStr).status(200);
  }

  try {
    // Chama a função que valida a string enviada se é palíndromo. 
    palindrome("Amor a Roma");
  } catch (error) {
    res.sendStatus(error)
  }
}