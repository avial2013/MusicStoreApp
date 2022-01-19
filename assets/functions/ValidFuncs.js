export function isNumInStr(test) {
    //Checks number in test
    for (let i = 0; i < 10; i++) {
        if (test.includes(i))
            return true
    }
    return false
}

export function isCharUpCapInNum(test) {
    //Checks Char 'A-Z' in test
    for (let i = 65; i < 91; i++) {
        if (test.includes(String.fromCharCode(i)))
            return true
    }
    return false
}


export function isCharLowCapInNum(test) {
    //Checks Char 'a-z' in test
    for (let i = 97; i < 123; i++) {
        if (test.includes(String.fromCharCode(i)))
            return true
    }
    return false
}


export function isSignsInVal(test) {
    //Checks signs in test
    for (let i = 33; i < 48; i++) {
        if (test.includes(String.fromCharCode(i)))
            return true
    }
    for (let i = 58; i < 65; i++) {
        if (test.includes(String.fromCharCode(i)))
            return true
    }
    return false
}

export function hasShtrudel(test) {
    //Checks if @ in test
    if (test.includes(String.fromCharCode(64)))
        return true
    return false
}

export function isMailAddress(test) {
    //Checks if test is an Email address
    let domainList = ['.com', '.co', '.org', '.net']

    if (hasShtrudel(test)) {
        for (const runner of domainList) {
            if (test.endsWith(runner))
                return true
        }
    }
    return false
}

export function isExpDate(test) {
    //Checks if test is an Expiration date
    let months = ['01', '02', '03', '04', '05', '06'
        , '07', '08', '09', '10', '11', '12']
    let years = ['22', '23', '24', '25', '26', '27'
        , '28', '29', '30', '31', '32', '33', '34', '35', '36', '37'
        , '38', '39', '40', '41', '42', '43', '44', '45', '46', '47'
        , '48', '49', '50']

    if (isCharLowCapInNum(test) || isCharUpCapInNum(test)) {
        return false
    }

    if (test === undefined)
        return false

    if (test.length != 5) {
        return false
    }

    if (test.charAt(2) != '/') {
        return false
    }

    for (const runner of months) {
        if (test.startsWith(runner)) {
            for (const runner of years) {
                if (test.endsWith(runner)) {
                    return true
                }
            }
        }
    }
    return false
}

export function isCVV(test) {
    //Checks if test is a CVV number
    if (isOnlyNumber(test)) {
        test = parseInt(test)
        if (test > 99 && test < 1000) {
            return true
        }
    }
    return false
}

export function isOnlyNumber(test) {
    //Checks if test is only a number
    if (isCharLowCapInNum(test) || isCharUpCapInNum(test) ||
        isSignsInVal(test)) return false
    return true
}

export function isOnlyString(test) {
    //Checks if test is only a string
    if (isSignsInVal(test) || isNumInStr(test))
        return false
    return true
}