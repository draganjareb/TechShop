import { create } from "zustand";

export const useCartItemStore = create((set) => ({
  cart: [],

  addItemToOrderCart: (newItem) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === newItem.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  totalPrice: newItem.price,
                }
              : item
          ),
        };
      } else {
        return {
          cart: [
            ...state.cart,
            {
              ...newItem,
              quantity: 1,
              totalPrice: newItem.price,
            },
          ],
        };
      }
    }),

  removeItemFromOrderCart: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
    })),

  clearOrderCart: () => set({ cart: [] }),

  increaseItemQuantity: (itemId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.price * (item.quantity + 1),
            }
          : item
      ),
    })),

  decreaseItemQuantity: (itemId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.price * (item.quantity - 1),
            }
          : item
      ),
    })),
}));
