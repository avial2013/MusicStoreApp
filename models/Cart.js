export default class Cart {
    constructor() {
        this.productList = []
        this.totalPrice = 0
        this.couponA = false
        this.couponB = false
        this.couponC = false
    }

    get ProductList() {
        return this.productList
    }

    addPL(item) {
        this.productList.push(item)
    }

    calcTotalPrice() {
        let sum = 0

        for (const item of this.productList) {
            sum += item.finalPriceIncDel
        }

        if (this.couponA) sum += this.couponA
        if (this.couponB) sum += this.couponB
        if (this.couponC) sum += this.couponC

        this.totalPrice = sum
    }


}