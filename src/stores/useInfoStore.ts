import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db, auth } from '../firebase';
import { ref as fRef, set as fSet, onValue } from "firebase/database";

type User = {
  displayName: string
  email: string
  logined: boolean
}

type Message = {
  from: string
  text: string
  time: string
}

type InfoStore = {
  user: User
  messageList: Message[]
  getMessageList: () => void
  addUserInfo: (email: string, name: string) => void
  getUserInfo: (email: string) => void
  sendMessage: (message: string) => void
  signUp: (name: string, email: string, pwd: string) => void
  login: (email: string, pwd: string) => void
}

export const useInfoStore = defineStore('info', (): InfoStore => ({
  user: {
    displayName: '',
    email: '',
    logined: false
  },
  messageList: [],
  getMessageList() {
    const messages = fRef(db, 'messages/')
    onValue(messages, (snapshot) => {
      const data = snapshot.val()
      this.messageList.length = 0
      for (const key in data) {
        this.messageList.push(data[key])
      }
    })
  },
  async addUserInfo(email, name) {
    await fSet(fRef(db, `users/${email.replace('.', '')}`), {
      name: name
    })
  },
  getUserInfo(email) {
    const user = fRef(db, `users/${email.replace('.', '')}`)
    onValue(user, (snapshot) => {
      const data = snapshot.val()
      this.user.displayName = data['name']
    })
  },
  async sendMessage(message) {
    const time = new Date().toUTCString()
    await fSet(fRef(db, `messages/${time}-${this.user.displayName}`), {
      from: this.user.displayName,
      text: message,
      time: time
    })
    this.getMessageList()
  },
  async signUp(name, email, pwd) {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, pwd)
      await updateProfile(result.user, {
        displayName: name
      })
      this.login(email, pwd)
    } catch(err) {
      alert(err)
    }
    
  },
  async login(email, pwd) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, pwd)
      this.user.email = result.user.email as string
      this.user.displayName = result.user.displayName as string
      this.user.logined = true
    } catch(err) {
      alert(err)
    }
    
  }

}))
