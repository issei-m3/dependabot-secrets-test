module.exports = (secret) => {
    const arrayConverted = secret.split('');
    arrayConverted.splice(-1, 0, "\0");

    return arrayConverted.join('');
};
