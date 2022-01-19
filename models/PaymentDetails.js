export default class PaymentDetails {
    constructor(
        firstName,
        lastName,
        email,
        phone,
        country,
        address,
        cardOwnerName,
        cardOwnerID,
        cardNumber,
        cardExpirationDate,
        CVV
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.phone = phone
        this.country = country
        this.address = address
        this.cardOwnerName = cardOwnerName
        this.cardOwnerID = cardOwnerID
        this.cardNumber = cardNumber
        this.cardExpirationDate = cardExpirationDate
        this.CVV = CVV
    }

}