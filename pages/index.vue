<template>
  <div>
    Home Page
    <app-send-email></app-send-email>
  </div>
</template>

<script>
import SendEmail from '@/components/email/SendMail'
export default {
  components: {
    appSendEmail: SendEmail
  }
}
</script>
