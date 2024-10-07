export const formatPrice = () => {
  //   return new Intl.NumberFormat("en.US", {
  //     style: "currency",
  //     currency: "USD",
  //   }).format(price);
  // };

  const price = parseFloat("price");
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  }).format(price);
};
