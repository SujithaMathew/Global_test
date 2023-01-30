import { Selector } from "testcafe";

export default{
    shippingAddress: Selector('#shipping'),
    emailTextbox: Selector('#customer-email-fieldset #customer-email'),
    firstName: Selector('input[name="firstname"]'),
    lastName: Selector('input[name="lastname"]'),
    street: Selector('input[name="street[0]"]'),
    city: Selector('input[name="city"]'),
    state: Selector('.control .select'),
    countryDropdown: Selector('.control .select').nth(1),
    zipCode: Selector('input[name="postcode"]'),
    phone: Selector('input[name="telephone"]'),
    nextButton: Selector('.button.continue '),
    shippingMethodOption: Selector('#checkout-shipping-method-load td input').nth(1)
}