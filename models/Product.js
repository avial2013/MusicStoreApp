export default class Product {
    constructor(
        id,
        catID,
        imageURL,
        title,
        description,
        measurements,
        delivery,
        finalPriceIncDel,
        reviews
    ) {
        this.id = id
        this.catID = catID
        this.imageURL = imageURL
        this.title = title
        this.description = description
        this.measurements = measurements
        this.delivery = delivery
        this.finalPriceIncDel = finalPriceIncDel
        this.reviews = reviews
    }
}