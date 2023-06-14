
const TaxAmount = 30;

const shopping = (amount) => {

    const discount_Amount = 40;

    const DiscountAmount = () =>{
        return discount_Amount;
    }

    function discount(){
        return amount - DiscountAmount();
    };

    const total = discount() + TaxAmount;
    return total;
};

const billAmount = shopping(100);
console.log(billAmount)