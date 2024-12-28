const analyzeString = (str) =>{
    const hasUpperCase = /[A-Z]/.test(str)
    const hasDigit = /[0-9]/.test(str)
    const hasSpecialChars = /[^a-zA-Z0-9\s]/.test(str)

    return{
        hasUpperCase,
        hasDigit,
        hasSpecialChars
    }
}

export default analyzeString