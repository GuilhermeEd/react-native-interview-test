import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartDetails from '../../organisms/CartDetails';
import { ApplicationState } from '../../store/ducks';
import { addTickets } from '../../store/ducks/tickets';
import { addTicket, clearCart, CartState } from '../../store/ducks/cart';
import Ticket from '../../models/ticket';

export interface Props {
  onCheckout?: () => void;
}

const CartCheckout: React.FC<Props> = ({ onCheckout }) => {
  // Get values from details store state
  const { tickets } = useSelector<ApplicationState, CartState>(
    store => store.cart,
  );

  // Get dispatcher
  const dispatch = useDispatch();

  // Dispatch action to add the changed ticket to cart
  const handleAddTicket = (ticket: Ticket, amount: number): void => {
    const newTicket: Ticket = { ...ticket, amount };
    dispatch(addTicket(newTicket, false));
  };

  // Call parent callback and disaptch action to clear cart and add tickets
  const handleCheckout = (): void => {
    if (onCheckout) {
      onCheckout();
    }

    dispatch(addTickets(tickets));
    dispatch(clearCart());
  };

  return (
    <CartDetails
      tickets={tickets}
      onChange={handleAddTicket}
      onCheckout={handleCheckout}
    />
  );
};

export default CartCheckout;
