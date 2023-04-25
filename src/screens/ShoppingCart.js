import { Text, FlatList, View, StyleSheet, Pressable } from 'react-native'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux'

const ShoppingCartTotals = () => (
  <View style={styles.totalsContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>$500.00</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>$10.00</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>$510.00</Text>
    </View>
  </View>
)

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items)
  
  return (
    <>
    <FlatList
      data={cartItems}
      renderItem={({item}) => <CartListItem cartItem={item} />}
      ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
    marginVertical: 2,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textBold: {
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  }
})

export default ShoppingCart;