import { Selector } from 'testcafe';

async function cookieDialog(t) {
    if (await this.googleCookieDialog.exists) {
        await t.click(this.googleCookieRejectButton)
    }
}
async function searchItem(t, item) {
    await t.click(this.lumaSearchBox)
        .typeText(this.lumaSearchBox, item, { paste: true })
        .pressKey('enter')
        .expect(this.itemLink.withText(item).exists).ok()
        .click(this.itemLink.withText(item))
}
export default {
    googleCookieDialog: Selector('#CXQnmb'),
    googleCookieRejectButton: Selector('#W0wltc'),
    googleSearch: Selector('input[type="submit"][value="Google Search"]'),
    lumaLogo: Selector('.logo'),
    lumaSearchBox: Selector('#search'),
    itemLink: Selector('.product-item-link'),
    itemSmallSize: Selector('#option-label-size-143-item-167'),
    itemMediumSize: Selector('#option-label-size-143-item-168'),
    itemGreenColour: Selector('#option-label-color-93-item-53'),
    itemYellowColour: Selector('#option-label-color-93-item-60'),
    itemQuantity: Selector('#qty'),
    addToCartButton: Selector('#product-addtocart-button'),
    showCartIcon: Selector('.action.showcart'),
    proceedToCheckoutButton: Selector('#top-cart-btn-checkout'),
    shoppingCartQuantity: Selector('.item-qty.cart-item-qty'),
    updateButton: Selector('.update-cart-item'),
    shoppingCartSubtotal: Selector('.amount.price-container'),
    discoutTotal: Selector('.grand.totals .price'),
    shoppingCartItemCount: Selector('.action.showcart .counter-number'),
    cookieDialog,
    searchItem
}