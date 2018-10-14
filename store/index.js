import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import createLogger from '../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		app
	},
	strict: debug,
	plugins: debug ? [createLogger()] : []
})
