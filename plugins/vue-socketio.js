import Vue from 'vue'

import io from 'socket.io-client'

const socket = io('http://localhost:3000')

socket.on('connect', () => {
  console.log('connect server')
})
