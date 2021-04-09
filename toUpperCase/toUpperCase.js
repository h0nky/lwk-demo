const toUpperCase = str => str.split('').map((char, index) => {
    const charCode = str.charCodeAt(index) - 32;
  	return String.fromCharCode(charCode)
  }).join('');