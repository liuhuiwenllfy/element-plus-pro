import {onBeforeUnmount, onMounted, ref} from 'vue'
import {getSession} from '@/assets/js/sessionStorageUtils'

const heartbeatInterval = 55000;
let heartbeatTimer: number;

const useWebSocket = () => {
  const ws = ref<WebSocket | null>(null)
  const message = ref<any>('')

  const connect = () => {
    // @ts-ignore
    ws.value = new WebSocket(`${import.meta.env.VITE_WS_API_URL}?token=${encodeURIComponent(localStorage.getItem('token'))}&username=${getSession('user_info').username}`)

    ws.value.addEventListener('open', (event) => {
      console.log('WebSocket Connection Open:', event)
      ws.value?.send('LOGIN')
      startHeartbeat();
    })

    ws.value.addEventListener('message', (event) => {
      console.log('WebSocket Message Received:', event)
      message.value = `${event.data}-${new Date().getTime() / 1000}`
    })

    ws.value.addEventListener('close', (event) => {
      console.log('WebSocket Connection Closed:', event)
      stopHeartbeat()
    })

    ws.value.addEventListener('error', (event) => {
      console.error('WebSocket Connection Error:', event)
      stopHeartbeat()
    })
  }

  const disconnect = () => {
    if (ws.value) {
      ws.value.close()
    }
  }

  onMounted(() => {
    connect()
  })

  onBeforeUnmount(() => {
    disconnect()
  })
  const startHeartbeat = () => {
    heartbeatTimer = setInterval(function() {
      ws.value?.send('LOGIN')
    }, heartbeatInterval);
  }
  const stopHeartbeat = () => {
    clearInterval(heartbeatTimer);
  }
  return {
    message,
  }
}

export default useWebSocket
