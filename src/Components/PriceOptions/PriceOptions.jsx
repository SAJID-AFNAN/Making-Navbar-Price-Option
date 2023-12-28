import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to cardio equipment",
                "Basic workout area",
                "Locker room access",
                "Standard fitness classes"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
                "Access to all gym areas",
                "Full range of workout equipment",
                "Locker with towel service",
                "Unlimited fitness classes",
                "Sauna and steam room access"
            ]
        },
        {
            "id": 3,
            "name": "VIP Membership",
            "price": 99.99,
            "features": [
                "Exclusive access to VIP lounge",
                "Personal trainer sessions",
                "Nutritional counseling",
                "All premium membership features",
                "Priority class reservations"
            ]
        }
    ]

    return (
        <div>
            <h2 className="text-center text-5xl py-4 font-semibold bg-slate-500 mx-80 my-4 rounded-xl text-gray-200">Best Price in the town</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;