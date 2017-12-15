import Reactotron, { asyncStorage } from 'reactotron-react-native'

Reactotron
.configure()
.use(asyncStorage()) 
.connect()