<template>
  <div class="container mx-auto px-4">
    <div style="margin: 1rem 0">
      <Logo />
    </div>

    <h2 class="font-bold text-blue-500 text-2xl">Hello {{ user.name }}</h2>

    <form @submit.prevent="addItemToCart" data-testid="add-items">
      <input class="input[type='text']"  type="text" v-model="itemName" />
      <button class="btn">Add</button>
    </form>

    <form @submit.prevent="buy">
      <ul class="pl-4" data-testid="items">
        <li class="ml-4 font-bold list-decimal" v-for="item in cart.items" :key="item.name">
          {{ item.name }} ({{ item.amount }})
          <button @click="cart.removeItem(item.name)" type="button" class="btn !bg-red-500 !text-white !py-2.1 !m-0 !rounded-full ">X</button>
        </li>
      </ul>
 <hr class="border-gray-600 mt-5">
      <button class="btn" :disabled="!user.name">Buy</button>
      <button class="btn"
        :disabled="!cart.items.length"
        @click="clearCart"
        type="button"
        data-testid="clear"
      >
        Clear the cart
      </button>
    </form>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import { defineComponent, ref } from 'vue-demi'
import { useUserStore } from './stores/user'
import { useCartStore } from './stores/cart'
export default defineComponent({
  components: { Logo },
  setup() {
    const user = useUserStore()
    const cart = useCartStore()
    const itemName = ref('')
    function addItemToCart() {
      if (!itemName.value) return
      cart.addItem(itemName.value)
      itemName.value = ''
    }
    function clearCart() {
      if (window.confirm('Are you sure you want to clear the cart?')) {
        cart.rawItems = []
      }
    }
    async function buy() {
      const n = await cart.purchaseItems()
      console.log(`Bought ${n} items`)
      cart.rawItems = []
    }
    return {
      itemName,
      addItemToCart,
      cart,
      user,
      buy,
      clearCart,
    }
  },
})
</script>

<style scoped>
@screen lg {
  .bar {
    background: orange;
  }
}
.bar {
  @apply bg-pink-500;
}
</style>
