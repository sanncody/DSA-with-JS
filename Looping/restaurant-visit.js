let totalBill = 0;
let orderDetails = [];

function addToBill(item, price) {
    console.log(`👉 You ordered: ${item} - ₹${price}`);
    totalBill += price;
    orderDetails.push({ item, price });
}

do {
    console.log("======================================");
    console.log("🍽️  WELCOME TO RAJU DA DHABBA  🍽️");
    console.log("======================================");
    console.log("1. 🥗 Starters");
    console.log("2. 🍛 Main Course");
    console.log("3. 🍨 Dessert");
    console.log("4. 🥤 Complimentary");
    console.log("5. 💰 View Bill & Exit");
    console.log("======================================");

    let option = Number(prompt("Choose an option from 1 to 5: "));

    switch (option) {
        case 1: // ⭐ Starters
            console.log("\n🥗 Starters Menu");
            console.log("1. Chilly Potato - ₹120");
            console.log("2. Spring Roll - ₹100");
            console.log("3. Chaap - ₹150");
            console.log("4. Paneer Mushroom - ₹180");
            console.log("5. Veg Manchurian - ₹140");

            let starterOptions = Number(prompt("Choose a starter (1-5): "));
            switch (starterOptions) {
                case 1: addToBill("Chilly Potato", 120); break;
                case 2: addToBill("Spring Roll", 100); break;
                case 3: addToBill("Chaap", 150); break;
                case 4: addToBill("Paneer Mushroom", 180); break;
                case 5: addToBill("Veg Manchurian", 140); break;
                default: console.log("❌ Invalid Option!"); break;
            }
            break;

        case 2: // ⭐ Main Course
            console.log("\n🍛 Main Course Menu");
            console.log("1. Dal Makhani - ₹200");
            console.log("2. Mix Veg - ₹180");
            console.log("3. Mattar Paneer - ₹220");
            console.log("4. Rajma Rice - ₹160");
            console.log("5. Cholle Bhature - ₹150");

            let mainOptions = Number(prompt("Choose a main course (1-5): "));
            switch (mainOptions) {
                case 1: addToBill("Dal Makhani", 200); break;
                case 2: addToBill("Mix Veg", 180); break;
                case 3: addToBill("Mattar Paneer", 220); break;
                case 4: addToBill("Rajma Rice", 160); break;
                case 5: addToBill("Cholle Bhature", 150); break;
                default: console.log("❌ Invalid Option!"); break;
            }
            break;

        case 3: // ⭐ Desserts
            console.log("\n🍨 Desserts Menu");
            console.log("1. Ice Cream - ₹80");
            console.log("2. Milk Shake - ₹120");
            console.log("3. Gulaab Jamun - ₹100");
            console.log("4. Ras Malai - ₹140");
            console.log("5. Brownie - ₹150");

            let dessertOptions = Number(prompt("Choose a dessert (1-5): "));
            switch (dessertOptions) {
                case 1: addToBill("Ice Cream", 80); break;
                case 2: addToBill("Milk Shake", 120); break;
                case 3: addToBill("Gulaab Jamun", 100); break;
                case 4: addToBill("Ras Malai", 140); break;
                case 5: addToBill("Brownie", 150); break;
                default: console.log("❌ Invalid Option!"); break;
            }
            break;

        case 4: // ⭐ Complimentary
            console.log("\n🥤 Complimentary Menu");
            console.log("1. Water - Free");
            console.log("2. Two Free Future Coupons");
            console.log("3. Maaza - Free");

            let compOptions = Number(prompt("Choose a complimentary item (1-3): "));
            switch (compOptions) {
                case 1: addToBill("Water", 0); break;
                case 2: addToBill("Two Free Future Coupons", 0); break;
                case 3: addToBill("Maaza", 0); break;
                default: console.log("❌ Invalid Option!"); break;
            }
            break;

        case 5: // ⭐ Billing
            console.log("\n===============================");
            console.log("🧾 FINAL BILL - RAJU DA DHABBA 🧾");
            console.log("===============================");
            orderDetails.forEach((order, index) => {
                console.log(`${index + 1}. ${order.item} - ₹${order.price}`);
            });
            console.log("-------------------------------");
            console.log(`💰 Total Amount: ₹${totalBill}`);
            console.log("===============================");
            console.log("🙏 Thank you for dining with us!");
            console.log("===============================\n");
            process.exit(0); // End program

        default:
            console.log("❌ Invalid Option! Please try again.");
            break;
    }

    var userInp = prompt("Do you want to order more? (yes/YES): ");
    
} while (userInp === "yes" || userInp === "YES");
