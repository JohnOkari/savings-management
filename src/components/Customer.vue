<template>
  <div class="customer">
    <h2>{{ customer.name }}</h2>
    <p>ID: {{ customer.id }}</p>
    <p>Phone: {{ customer.phone }}</p>
    <p>Email: {{ customer.email }}</p>
    <p>Member Number: {{ customer.memberNumber }}</p>
  </div>
</template>

<script>
export default {
  props: {
    customer: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.customer {
  margin-bottom: 20px;
}
</style>
