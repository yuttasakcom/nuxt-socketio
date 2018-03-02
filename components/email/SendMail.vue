<template>
  <div>
      <button @click="$socket.emit('sendMail', email)">Send Email</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: {
        from: 'test@test.com',
        to: 'example@example.com',
        title: 'test',
        message: 'test message'
      }
    }
  }
}
</script>

