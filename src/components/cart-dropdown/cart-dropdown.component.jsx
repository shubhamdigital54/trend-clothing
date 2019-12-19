import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss';

import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItems } from '../../redux/cart/cart.selector'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                        <span className='empty-message'>your cart is empty</span>
                    )
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden()
            )
        }}>Go to chackout</CustomButton>
    </div>
)

const mapsStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapsStateToProps)(CartDropdown));