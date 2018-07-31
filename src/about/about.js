import axios from 'axios'

export default {
  name: 'about',
  data () {
    return {
      ip: '',
      input: {
        firstname: '',
        lastname: ''
      },
      response: ''
    }
  },
  mounted () {
    axios({ method: 'GET', 'url': 'https://httpbin.org/ip' }).then(result => {
      this.ip = result.data.origin
      this.url = result.data.url
    }, error => {
      console.error(error)
    })
  },
  methods: {
    sendData () {
      axios({ method: 'POST', 'url': 'https://httpbin.org/post', 'data': this.input, 'headers': { 'content-type': 'application/json' } }).then(result => {
        this.response = result.data
      }, error => {
        console.error(error)
      })
    }
  }
}
