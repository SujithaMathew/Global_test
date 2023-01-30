import common from "./pages/common.js";
import address from "./pages/shippingAddress.js";

fixture`Luma`.page`https://magento.softwaretestingboard.com/`;

test.meta({testid:'TC01', type: 'Regression'})('To verify user should able to add and update the items in cart', async t => {
    await common.cookieDialog()
    await t
        .maximizeWindow()
        .expect(common.lumaLogo.exists).ok()
    await common.searchItem(t, 'Gwyn Endurance Tee')
    await t.click(common.itemMediumSize)
        .click(common.itemGreenColour)
        .click(common.itemQuantity)
        .pressKey('ctrl+a delete')
        .typeText(common.itemQuantity, '4', { paste: true })
        .click(common.addToCartButton)
    await t.expect(common.shoppingCartItemCount.innerText).eql('4')
    await t.click(common.showCartIcon).click(common.proceedToCheckoutButton)
    //address
    await t.expect(address.shippingAddress.exists).ok('', { timeout: 15000 })
        .typeText(address.emailTextbox, 'abc12@example.com', { paste: true })
        .click(address.firstName)
        .typeText(address.firstName, 'John')
        .click(address.lastName)
        .typeText(address.lastName, 'David', { paste: true })
        .click(address.street)
        .typeText(address.street, 'WestAvenue', { paste: true })
        .click(address.city)
        .typeText(address.city, 'London', { paste: true })
        .click(address.state)
    const stateDropdown = address.state
    const stateOption = stateDropdown.find('option')
    await t.click(stateOption.withText('Kansas'))
    await t.click(address.countryDropdown)
    const countryDropdown = address.countryDropdown
    const countryOption = countryDropdown.find('option')
    await t.click(countryOption.withText('United Kingdom'))
        .click(address.zipCode)
        .typeText(address.zipCode, 'AB12 3CD', { paste: true })
        .click(address.phone)
        .typeText(address.phone, '1234567891', { paste: true })
        .click(address.shippingMethodOption)
        .click(address.nextButton)
    //discount amount
    const amount = await common.discoutTotal.innerText
    await t.expect(amount).eql('$92.00')
    //Update cart
    await t.click(common.lumaLogo)
    await t.expect(common.shoppingCartItemCount.innerText).eql('4')
    await t.click(common.showCartIcon)
        .click(common.shoppingCartQuantity)
        .pressKey('ctrl+a delete')
        .typeText(common.shoppingCartQuantity, '3', { paste: true })
        .click(common.updateButton)
    //Add to cart item 1
    await t.click(common.lumaSearchBox)
    await common.searchItem(t, 'Gwyn Endurance Tee')
    await t.click(common.itemYellowColour).click(common.itemSmallSize).click(common.addToCartButton)
    //Add to cart item 2
    await t.click(common.lumaSearchBox)
    await common.searchItem(t, 'Quest Lumaflex™ Band')
    await t.click(common.addToCartButton)
    //Final cart total
    await t.expect(common.shoppingCartItemCount.innerText).eql('5')
    await t.click(common.showCartIcon)
    const subtotalAmount = await common.shoppingCartSubtotal.innerText
    await t.expect(subtotalAmount).eql('$116.00')
});